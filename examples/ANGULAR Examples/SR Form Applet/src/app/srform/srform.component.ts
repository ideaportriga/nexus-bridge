import { Component, OnInit, Inject, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material';
import { ServiceRequest } from './sr.model';
import { SiebelEvent } from '../siebel-event';
import { AbstractRecordModelField, RecordModelDateField } from '../record-model-field';

declare var consts: any;

export class FormErrorStateMatcher implements ErrorStateMatcher {
  constructor(private comp: SRFormComponent) {}
  isErrorState(control: FormControl | null): boolean {
    return !this.comp.isQueryMode && !!(control && control.invalid && control.dirty && control.touched);
  }
}

export function customValidator(field: AbstractRecordModelField): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (!field || !control || control.pristine)
      return null;

    if (field.options.required && !control.value)
      return { 'required':  true };

    if ((field.options.staticLov || field.options.dynamicLov) && control.value && field.lov && !field.lov.includes(control.value))
      return { 'unlistedValue': control.value };

    return null;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './srform.component.html',
  styleUrls: ['./srform.component.css']
})

export class SRFormComponent implements OnInit {

  // State variables
  eventStack: SiebelEvent[] = [];
  isQueryMode = false;
  isAdvancedQuery = false;

  // Data
  record = new ServiceRequest();
  queryString: string;
  queryObject: {};
  
  // Form controls
  form = this.fb.group(this.record.getFormModel());
  autocompletes: { [key: string]: Observable<string[]> } = {};
  errorMatcher = new FormErrorStateMatcher(this);

  // Elements references
  @ViewChild('summary') private summaryRef: ElementRef;

  constructor(@Inject('N19') public n19: any, private fb: FormBuilder, private zone: NgZone, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this._resetForm();
    this._attachEventListeners();
  }

  dumpValue(field: string) {
    if (!this.isQueryMode && this.form.get(field).dirty) {
      this.n19 && this.n19.setControlValue(this.record.getField(field).siebelControl, this.form.get(field).value);
    }
  }

  saveRecord(fn?: () => void) {
    if (this.form.dirty && this.form.valid && this.n19) {
      this.n19.writeRecord(() => {
        fn && fn.call(this);
      }, () => {
        this._handleWriteRecordError();
      });
    } else if (this.form.dirty && this.form.invalid) {
      this._handleWriteRecordError();
    } else {
      fn && fn.call(this);
    }
  }

  newRecord() {
    this.n19 && this.n19.newRecord(() => {
      setTimeout(() => this.summaryRef.nativeElement.focus());
    });
  }

  undoChanges() {
    if (this.isQueryMode) {
      this.n19 && this.n19.pm.ExecuteMethod('InvokeMethod', 'CancelQuery', null, false);
    } else {
      this.n19 && this.n19.undoRecordSync();
    }
  }

  deleteRecord() {
    this.n19 && this.n19.deleteRecordSync();
  }

  newQuery() {
    if (!this.isQueryMode) {
      this.n19 && this.n19.pm.ExecuteMethod('InvokeMethod', 'NewQuery', null, false);
    } else {
      this._resetQuery();
    }
  }

  toggleQueryMode() {
    this.isAdvancedQuery = !this.isAdvancedQuery;
    if (this.isAdvancedQuery) {
      this._buildQuery();
    }
  }

  executeQuery() {
    if (this.isAdvancedQuery) {
      this.unimlementedFeature('Query in advanced mode currently is not implemented');
      return;
    }
    this._buildQuery();
    this.n19 &&  this.n19.query(this.queryObject);
  }

  prevRecord() {
    if (!this.isQueryMode) {
      this.n19 && this.n19.canInvokeMethod("GotoPreviousSet") && this.n19.prevRecord();
    }
  }

  nextRecord() {
    if (!this.isQueryMode) {
      this.n19 && this.n19.canInvokeMethod("GotoNextSet") && this.n19.nextRecord();
    }
  }

  refreshLovs(controlName: string) {
    this.n19 && this.record.loadLov(controlName, this.n19);
    this.autocompletes = {};
    const field = this.record.getField(controlName);
    if (field.options.staticLov || field.options.dynamicLov) {
      this.autocompletes[field.name] = this.form.get(field.name).valueChanges
      .pipe(startWith(null), map(value => !value ? field.lov : field.lov.filter(v => v.toLowerCase().includes(value.toLowerCase()))));
    }
  }

  unimlementedFeature(message?: string) {
    this.snackBar.open(message || 'This feature is not implemented in this demo', 'OK', {
      duration: 5000,
    });
  }

  private _resetForm() {
    // Reset state variables
    this.isQueryMode = false;
    
    // Get current record data
    const siebelData = this.record.getNexusModel();
    this.n19 && this.n19.getCurrentRecordModel(siebelData);
    this.record.loadDataFromNexusModel(siebelData);
    
    // Reload form data
    this._reloadFormData();
    
    // Set form controls properties (required, disabled)
    Object.keys(this.form.controls).forEach(c => {
      const f = this.record.getField(c);

      if (f && f.options.readonly)
        this.form.get(c).disable({ emitEvent: false });
      else
        this.form.get(c).enable({ emitEvent: false });

      this.form.get(c).setValidators(customValidator(f));
    });
  }

  private _reloadFormData() {
    this.form.reset();
    this.form.patchValue(this.record.getFormModel(), { emitEvent: false });
  }

  private _attachEventListeners() {
    if (this.n19) {

      // Push event to the stack
      this.n19.pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN'), () => {
        this.eventStack.push(new SiebelEvent());
      });

      // Pull event from the stack
      this.n19.pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), () => {
        this._handleEvent(this.eventStack.pop());
      });

      // Create listeners for major events
      [ consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'),
        consts.get('SWE_PROP_BC_NOTI_SCROLL_DATA'),
        consts.get('SWE_PROP_BC_NOTI_NEW_DATA'),
        consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'),
        consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'),
        consts.get('SWE_PROP_BC_NOTI_BEGIN_QUERY'),
        consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_DATA')
      ].forEach(event => {
        this.n19.pm.AttachNotificationHandler(event, () => {
          this.eventStack[this.eventStack.length-1].name = event;
        });
      })
      
    }
  }

  private _handleEvent(event: SiebelEvent) {
      if (event.isBlank()) return;

      switch (event.name) {
        
        // Record selection, navigation, scroll, new record, delete record, execute query etc
        case consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'):
        case consts.get('SWE_PROP_BC_NOTI_SCROLL_DATA'):
        case consts.get('SWE_PROP_BC_NOTI_NEW_DATA'):
        case consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'):
        case consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'):
          this.zone.run(() => this._resetForm());
          break;

        // New query
        case consts.get('SWE_PROP_BC_NOTI_BEGIN_QUERY'):
          if (!this.isQueryMode) {
            this.zone.run(() => {
              this.isQueryMode = true;
              this.form.enable({ emitEvent: false });
              this.form.clearValidators();
              this.form.reset();
            });
          }
          break;
        
        // Undo record
        case consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_DATA'):
          this.zone.run(() => this._resetForm());
          break;
      }
  }

  private _handleWriteRecordError() {
    this.snackBar.open('Record cannot be saved due to input errors', '', {
      duration: 5000,
    });
  }

  private _buildQuery() {
    let s = '';
    this.queryObject = {};
    Object.keys(this.form.controls).forEach(control => {
      if (this.form.get(control).value) {
        const field = this.record.getField(control);
        const sc = field.siebelControl;
        let v: string;
        if (field instanceof RecordModelDateField) v = this.form.get(control).value.format("MM/DD/YYYY HH:mm:ss");
        else v = this.form.get(control).value;
        this.queryObject[sc] = `'${v}'`;
        if (v === 'is null') {
          s += `[${sc}] IS NULL AND `;
        } else if (v === '*') {
          s += `[${sc}] IS NOT NULL AND `;
        } else {
          s += `[${sc}] = '${v}' AND `;
        }
      }
    });
    this.queryString = s.substr(0, s.length - 5);
  }

  private _resetQuery() {
    this.form.reset();
    this.queryString = '';
  }

}