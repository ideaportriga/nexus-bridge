// support form and list applets

import N19popup from './n19popup';

SiebelAppFacade.N19Helper = class {
  constructor(settings) {
    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.pm = settings.pm;
    this.isPopup = settings.isPopup;
    this.appletName = this.pm.Get('GetName');
    this.view = SiebelApp.S_App.GetActiveView();
    this.viewName = this.view.GetName();
    this.applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[this.appletName];
    this.isListApplet = typeof this.applet.GetListOfColumns === 'function';
    this.appletId = `s_${this.pm.Get('GetFullId')}_div`;
    this.required = []; // will be empty for list applet
    this.lov = {};

    // populate the required array for form applets
    if (!this.isListApplet) {
      const appletInputs = document.getElementById(this.appletId).querySelectorAll('input');
      for (let i = 0; i < appletInputs.length; i += 1) {
        if (appletInputs[i].attributes['aria-required']) {
          this.required.push(appletInputs[i].attributes.name.nodeValue);
        }
      }
    }

    // listener to get dynamic LOVs
    this.pm.AttachNotificationHandler(this.consts.get('SWE_PROP_BC_NOTI_GENERIC'), (propSet) => {
      const type = propSet.GetProperty(this.consts.get('SWE_PROP_NOTI_TYPE'));
      if (type === 'GetQuickPickInfo') {
        const arr = [];
        CCFMiscUtil_StringToArray(propSet.GetProperty(this.consts.get('SWE_PROP_ARGS_ARRAY')), arr);
        if (this.viewName === arr[1] && this.appletName === arr[2]) {
          this.lov[arr[3]] = arr.splice(5).filter(el => el !== '');
        }
      }
    });

    console.log('N19Helper started....', this.appletName); // eslint-disable-line no-console

    // get the n19popup singleton instance
    this.n19popup = N19popup.instance;
  }

  _getControl(name) {
    return this.applet.GetControl(name);
  }

  _returnControls() {
    if (this.isListApplet) {
      return this.applet.GetListOfColumns();
    }
    return this.applet.GetControls(); // pm.Get('GetControls');
  }

  // called into the getControls to reduce the amount of the returned controls
  _isSkipControl(type) {
    // https://docs.oracle.com/cd/E74890_01/books/ConfigOpenUI/appendix_a_api002.htm
    // maybe we need to exclude more types
    return (type === this.consts.get('SWE_PST_BUTTON_CTRL'))
      || (type === this.consts.get('SWE_CTRL_LINK'))
      || (type === this.consts.get('SWE_CTRL_PLAINTEXT'))
      || (type === 'null'); // GetUiType returns string
  }

  _isRequired(inputName) {
    // required is empty for list applets, hopefully for now
    return this.required.indexOf(inputName) > -1;
  }

  _getStaticLOV(arr) {
    const ret = [];
    for (let i = 0; i < arr.length; i += 1) {
      ret.push(arr[i].propArray);
    }
    return ret;
  }

  _setActiveControl(name) {
    return this.applet.SetActiveControl(this._getControl(name));
  }

  _getValueForControl(controlUiType, value) {
    // TODO: DateTime, numbers, and phones?
    if (this.consts.get('SWE_CTRL_CHECKBOX') === controlUiType) {
      // convert true/false => Y/N
      // do we want to support setting to null
      value = value ? 'Y' : 'N'; // eslint-disable-line no-param-reassign
    }
    return value;
  }

  _showPopupApplet(name, hide, cb) {
    if (!this.n19popup) { // it is a popup applet
      throw new Error('Openning popup on the popup is not supported now');
    }
    if (!this.n19popup.canOpenPopup()) {
      throw new Error('Cannot open popup!');
      // return false;
    }
    this.view.SetActiveAppletInternal(this.applet); // or SetActiveApplet
    this._setActiveControl(name);
    return this.n19popup.showPopupApplet(hide, cb, this.pm);
  }

  showMvgApplet(name, hide, cb) {
    return this._showPopupApplet(name, hide, cb);
  }

  showPickApplet(name, hide, cb) {
    return this._showPopupApplet(name, hide, cb);
  }

  canInvokeMethod(method) {
    return this.pm.ExecuteMethod('CanInvokeMethod', method);
  }

  getControls() {
    const controls = {};
    const appletControls = this._returnControls();
    const arr = Object.keys(appletControls);
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      const controlUiType = control.GetUIType();
      if (this._isSkipControl(controlUiType)) {
        continue; // eslint-disable-line no-continue
      }
      const controlName = control.GetName();
      const controlInputName = control.GetInputName();
      const obj = {
        name: controlName,
        label: control.GetDisplayName(),
        uiType: controlUiType,
        required: this._isRequired(controlInputName),
        boundedPick: control.IsBoundedPick() === '1',
        staticPick: control.IsStaticBounded() === '1',
        pickApplet: control.GetPickApplet(),
        inputName: controlInputName,
        isPostChanges: control.IsPostChanges(),
        maxSize: control.GetMaxSize(),
        maxChars: control.GetMaxChars(),
        fieldName: control.GetFieldName(),
        isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
      };
      if (this.isListApplet) {
        obj.readOnly = !this.pm.ExecuteMethod('CanUpdate',
          this.pm.GetRenderer().GetColumnHelper().GetActualControlName(controlName));
      } else {
        obj.readOnly = !this.pm.ExecuteMethod('CanUpdate', controlName);
      }
      // add values to be displayed in the static pick list
      if (obj.staticPick) {
        obj.staticLOV = this._getStaticLOV(control.GetRadioGroupPropSet().childArray);
        obj.lovs = obj.staticLOV.reduce((accumulator, currentValue) => { // normalized
          accumulator.push({ lic: currentValue.FieldValue, val: currentValue.DisplayName });
          return accumulator;
        }, []);
      }
      controls[controlName] = obj;
    }
    return controls;
  }

  getRecordSet() {
    return this.pm.Get('GetRecordSet');
  }

  getRawRecordSet() {
    return this.pm.Get('GetRawRecordSet');
  }

  getRowListRowCount() {
    // how much applet can display (specified in Siebel Tools) - 10/20
    return this.pm.Get('GetRowListRowCount');
  }

  getNumRows() {
    // currently visible in applet
    return this.pm.Get('GetNumRows');
  }

  getSelection() {
    return this.pm.Get('GetSelection');
  }

  _navigate(method) {
    if (!this.canInvokeMethod(method)) {
      return false;
    }
    const ret = this.pm.ExecuteMethod('InvokeMethod', method, null, false);
    return ret;
  }

  nextRecord() {
    return this._navigate(this.isListApplet ? 'GotoNext' : 'GotoNextSet');
  }

  nextRecordSet() {
    if (!this.isListApplet) {
      return false;
    }
    return this._navigate('GotoNextSet');
  }

  positionOnRow(index) {
    if (this.isListApplet) {
      if (!this.pm.ExecuteMethod('CanInvokeMethod', 'PositionOnRow')) {
        return false;
      }
      if (this.getNumRows() < index + 1) {
        return false;
      }
      return this.pm.ExecuteMethod('HandleRowSelect', index, false, false);
    }
    return false;
  }

  prevRecord() {
    if (this.isListApplet) {
      return this.positionOnRow(this.pm.Get('GetSelection') - 1);
    }
    return this._navigate('GotoPreviousSet');
  }

  prevRecordSet() {
    if (!this.isListApplet) {
      return false;
    }
    return this._navigate('GotoPreviousSet');
  }

  newRecord(cb) {
    const promise = new Promise(resolve => this._newRecord(resolve));
    return typeof cb === 'function' ? promise.then(cb) : promise;
  }

  _newRecord(cb) {
    return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, {
      async: true,
      cb,
    });
  }

  newRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, false);
  }

  writeRecord(cb) {
    const promise = new Promise(resolve => this._writeRecord(resolve));
    return typeof cb === 'function' ? promise.then(cb) : promise;
  }

  _writeRecord(cb) {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, {
      async: true,
      cb,
    });
  }

  writeRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, false);
  }

  deleteRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord', null, false);
  }

  setControlValue(name, value) {
    // TODO: If value is null, nothing happens, should we convert null to ''?
    const control = this._getControl(name);
    // TODO: Check if control is found
    value = this._getValueForControl(control.GetUIType(), value); // eslint-disable-line no-param-reassign
    // TODO: should we use SetCellValue for list applets?
    this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
    const ret = this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);
    if (!ret) {
      console.log(`Value ${value} was not set for ${control.toString()}`); // eslint-disable-line no-console
    }
    return ret;
  }

  getDynamicLOV(controlName) {
    const control = this._getControl(controlName);
    const controlInputName = control.GetInputName();
    this.lov[controlInputName] = {};
    const ps = SiebelApp.S_App.NewPropertySet();
    ps.SetProperty('SWEField', controlInputName);
    ps.SetProperty('SWEJI', false);
    this.applet.InvokeMethod('GetQuickPickInfo', ps);
    return this.lov[controlInputName];
  }

  getStaticLOV(controlName) {
    const control = this._getControl(controlName);
    const ret = [];
    if ('1' === control.IsStaticBounded()) {
      const arr = this._getStaticLOV(control.GetRadioGroupPropSet().childArray);
      for (let i = 0; i < arr.length; i += 1) {
        ret.push(arr[i].DisplayName);
      }
      ret.sort();
    }
    return ret;
  }

  _getControlValue(controlUiType, value) {
    // todo: what about datetime?
    let ret = value;
    if (this.consts.get('SWE_CTRL_CHECKBOX') === controlUiType) {
      // convert Y/N/null -> true/false/null
      // do we need to send null?
      switch (value) {
        case 'Y':
          ret = true;
          break;
        case 'N':
          ret = false;
          break;
        default:
          ret = null;
      }
    }
    return ret;
  }

  _getFieldToControlsMap(_controls) {
    const ret = {};
    const appletControls = this._returnControls();
    const arr = Object.keys(_controls);
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      ret[control.GetFieldName()] = {
        name: control.GetName(),
        isPostChanges: control.IsPostChanges(),
        uiType: control.GetUIType(),
      };
    }
    return ret;
  }

  getCurrentRecord(raw) {
    const index = this.getSelection();
    // todo: check if record exists
    if (raw) {
      return this.pm.Get('GetRawRecordSet')[index];
    }
    return this.pm.Get('GetRecordSet')[index];
  }

  getCurrentRecordModel(_controls) {
    if (!_controls) {
      return false;
    }
    const arr = Object.keys(_controls);
    const index = this.getSelection();
    const appletControls = this._returnControls();
    _controls.isRecord = index > -1; // eslint-disable-line no-param-reassign
    let obj = {};
    if (_controls.isRecord) {
      obj = this.getRecordSet()[index];
    }

    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      if (typeof control !== 'undefined') {
        const controlName = control.GetName();
        const controlInputName = control.GetInputName();
        const controlFieldName = control.GetFieldName();
        if (_controls.isRecord) {
          _controls[arr[i]] = { // eslint-disable-line no-param-reassign
            value: this._getControlValue(control.GetUIType(), obj[controlFieldName]),
            readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
            isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(controlInputName),
            maxSize: control.GetMaxSize(),
          };
        } else { // no record displayed
          _controls[arr[i]] = { // eslint-disable-line no-param-reassign
            value: '',
            readonly: true,
            isLink: false,
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(controlInputName),
            maxSize: control.GetMaxSize(),
          };
        }
      }
    }
    // todo: do we need to return true or better to return also the object?
    return true;
  }

  _getControlInputNameForIdQuery() {
    const appletControls = this._returnControls();
    const arr = Object.keys(appletControls);
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      const controlUiType = control.GetUIType();
      if (!this._isSkipControl(controlUiType)) {
        // skipping also JCheckbox
        // todo: check do we need to skip also date?
        if (controlUiType !== this.consts.get('SWE_CTRL_CHECKBOX')) {
          return control.GetInputName();
        }
      }
    }
    throw new Error('cannot find a control for query');
  }

  _newQuery() {
    return this.pm.ExecuteMethod('InvokeMethod', 'NewQuery', null, false);
  }

  queryById(rowId, cb) {
    const promise = new Promise(resolve => this._queryById(rowId, resolve));
    return typeof cb === 'function' ? promise.then(cb) : promise;
  }

  _queryById(rowId, cb) {
    // maybe check if it is already in query mode / cancel the query
    this._newQuery();

    const method = 'ExecuteQuery';
    const ai = {
      scope: this,
      async: true,
      mask: false,
      selfbusy: false,
      args: [],
    };
    if (typeof cb === 'function') {
      ai.cb = cb;
    }

    const psOutput = SiebelApp.S_App.NewPropertySet();
    const psInput = SiebelApp.S_App.NewPropertySet();
    psInput.SetProperty(this._getControlInputNameForIdQuery(), `Id="${rowId}"`);

    ai.args.push(method);
    ai.args.push(psInput.Clone());

    return this.applet.CallServerApplet(method, psInput, psOutput, ai);
  }

  query(params, cb) {
    const promise = new Promise(resolve => this._query(params, resolve));
    return typeof cb === 'function' ? promise.then(cb) : promise;
  }

  _query(params, cb) {
    // maybe check if it is already in query mode / cancel the query
    this._newQuery();

    const method = 'ExecuteQuery';
    const ai = {
      scope: this,
      async: true,
      mask: false,
      selfbusy: false,
      args: [],
    };
    if (typeof cb === 'function') {
      ai.cb = cb;
    }

    const psOutput = SiebelApp.S_App.NewPropertySet();
    const psInput = SiebelApp.S_App.NewPropertySet();
    const arr = Object.keys(params);
    const _controls = this._returnControls();
    for (let i = 0; i < arr.length; i += 1) {
      const control = _controls[arr[i]];
      psInput.SetProperty(control.GetInputName(), this._getValueForControl(control.GetUIType(), params[arr[i]]));
    }
    ai.args.push(method);
    ai.args.push(psInput.Clone());

    return this.applet.CallServerApplet(method, psInput, psOutput, ai);
  }

  drilldown(controlName) {
    // todo: check isLink of control?
    // index is not effective, and drilldown anyway happens on last selected record
    if (!this.isListApplet) {
      return false;
    }
    const index = this.getSelection();
    return this.pm.ExecuteMethod('OnDrillDown', controlName, index);
  }

  gotoView(targetViewName, targetAppletName, id) {
    // todo: get the applet name from the view definition?
    const rowId = typeof id === 'undefined' ? this.getCurrentRecord(true).Id : id;
    let SWECmd = `GotoView&SWEView=${targetViewName}&SWEApplet0=${targetAppletName}`;
    SWECmd += `&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=${rowId}`;
    SWECmd = encodeURI(SWECmd);
    SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '');
  }

  _insertPending() {
    return this.pm.Get('GetBusComp').insertPending;
  }

  requery(name) {
    const service = SiebelApp.S_App.GetService('N19 BS');
    if (service) {
      const inPropSet = SiebelApp.S_App.NewPropertySet();
      inPropSet.SetProperty('name', name);
      service.InvokeMethod('Requery', inPropSet, {});
    }
  }

  refresh(name) {
    const service = SiebelApp.S_App.GetService('N19 BS');
    if (service) {
      const inPropSet = SiebelApp.S_App.NewPropertySet();
      inPropSet.SetProperty('name', name);
      service.InvokeMethod('Refresh', inPropSet, {});
    }
  }

  pickRecord() {
    // todo : check CanInokeMethod and/or is it pick
    return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
  }

  deleteRecords(cb) {
    // method is not allowed to delete the primary
    //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
    // todo: check canInvokeMethod and/or is it MVG
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');
    typeof cb === 'function' && cb();
    return ret;
  }

  addRecords(cb) {
    // todo: check canInvokeMethod and/or is it MVG. and if we have a record in assoc?
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');
    typeof cb === 'function' && cb();
    return ret;
  }

  _firstRecord() { // temp method, assumes that no scrolling happened
    if (this.isListApplet) {
      if (this.getSelection() !== 0) {
        return this.positionOnRow(0);
      }
      return true;
    }
    return false;
  }
};
