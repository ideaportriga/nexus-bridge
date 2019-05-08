import N19notifications from './n19notifications';

export default class N19baseApplet {
  constructor(settings) {
    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.utils = SiebelJS.Dependency('SiebelApp.Utils');
    this.pm = settings.pm;
    this.convertDates = settings.convertDates;
    this.returnRawNumbers = settings.returnRawNumbers;
    this.returnRawCurrencies = settings.returnRawCurrencies;

    this.view = SiebelApp.S_App.GetActiveView();
    this.appletName = this.pm.Get('GetName');
    this.applet = this.view.GetApplet(this.appletName);
    this.isListApplet = typeof this.pm.Get('GetListOfColumns') !== 'undefined';
    this.required = []; // will be empty for the list applet
    this.lov = {};
    this.boolObject = new SiebelApp.S_App.DatumBoolObject();

    this.loadLocaleData(); // TODO: do not create for the popup applet?

    this.fieldToControlMap = this._getFieldToControlMap();
    this.notifications = new N19notifications(this.pm, this.consts, this.fieldToControlMap);

    // populate the required array for form applets
    if (!this.isListApplet) {
      const appletId = `s_${this.pm.Get('GetFullId')}_div`;
      const appletInputs = document.getElementById(appletId).querySelectorAll('input');
      appletInputs.forEach((el) => {
        if (el.attributes['aria-required']) {
          this.required.push(el.attributes.name.nodeValue);
        }
      });
    }

    // listener to get dynamic LOVs
    this.pm.AttachPMBinding('UpdateQuickPickInfo', (inputName, b, arr, i) => {
      if (i === 6) { // this is a normal flow, could it be 5 as in Bookshelf stated?
        if (this.appletName === arr[2]) {
          if ('false' === arr[4]) {
            // eslint-disable-next-line no-console
            console.warn(`[N19]Picklist is not associated with the control - ${JSON.stringify(arr)}`);
          }
          this.lov[inputName] = arr.slice().splice(i);
        }
      } else if (i === 0) { // this is a misconfiguration, when getting dynamic LOV is called second+ time?
        // eslint-disable-next-line no-console
        console.warn('[N19]It seems the control/list column is incorrectly configured in the Tools.');
        this.lov[inputName] = arr;
      }
    }, { scope: this });

    this.isTreeApplet = SiebelAppFacade.ExplorerPresentationModel === this.pm.constructor;
    if (this.isTreeApplet) {
      // eslint-disable-next-line no-console
      console.warn('This is a tree applet... it is easier and safer to use list or form applets');
    }
  }

  loadLocaleData() {
    const localeObject = SiebelApp.S_App.LocaleObject;
    const dateTimeFormat = localeObject.GetProfile(this.consts.get('LOCAL_DATETIME_FORMAT'));
    this.localeData = {
      firstDayOfWeek: localeObject.GetWeekStartDay(),
      dateFormat: localeObject.GetProfile(this.consts.get('LOCAL_DATE_FORMAT')),
      dateTimeFormat,
      is24hoursFormat: !/p$/.test(dateTimeFormat),
      localCountryPhoneCode: localeObject.GetProfile(this.consts.get('LOCAL_PHONE_COUNTRY')),
      currencyDecimal: localeObject.GetDispCurrencyDecimal(),
      currencySeparator: localeObject.GetDispCurrencySeparator(),
      numberDecimal: localeObject.GetDispNumberDecimal(),
      numberSeparator: localeObject.GetDispNumberSeparator(),
    };
    this.localeData.months = [];
    this.localeData.shortMonths = [];
    const months = localeObject.GetData('Month', localeObject.m_spMonthPS);
    for (let i = 1; i <= 12; i += 1) {
      this.localeData.months.push(months.GetProperty(`${i}:0`));
      this.localeData.shortMonths.push(months.GetProperty(`${i}:1`));
    }

    const weekDays = localeObject.GetData('DayOfWeek', localeObject.m_spDayOfWeekPS);
    this.localeData.weekDays = [];
    this.localeData.weekDays3 = [];
    this.localeData.weekDays1 = [];
    for (let i = 0; i < 7; i += 1) {
      this.localeData.weekDays.push(weekDays.GetProperty(`${i}:0`));
      this.localeData.weekDays3.push(weekDays.GetProperty(`${i}:1`));
      this.localeData.weekDays1.push(weekDays.GetProperty(`${i}:2`));
    }
  }

  subscribe(func) { // eslint-disable-line class-methods-use-this
    // TODO: accept also context for function, or the caller binds the context to the function?
    return this.notifications.subscribe(func);
  }

  unsubscribe(token) { // eslint-disable-line class-methods-use-this
    return this.notifications.unsubscribe(token);
  }

  _getControl(name) {
    return this.pm.ExecuteMethod('GetControl', name);
  }

  _returnControls() {
    // if (this.isListApplet) { // commented to return buttons for list applet
    //  return this.pm.Get('GetListOfColumns');
    // }
    return this.pm.Get('GetControls');
  }

  // called into the getControls to reduce the amount of the returned controls
  _isSkipControl(type) {
    // https://docs.oracle.com/cd/E74890_01/books/ConfigOpenUI/appendix_a_api002.htm
    // maybe we need to exclude more types
    return (type === this.consts.get('SWE_CTRL_LINK'))
      // || (type === this.consts.get('SWE_PST_BUTTON_CTRL'))
      // || (type === this.consts.get('SWE_CTRL_PLAINTEXT')) // KC IM
      || (type === 'null'); // GetUiType returns string
  }

  _isRequired(inputName) {
    // required is empty for list applets
    // it would be very good to use IsRequired and RequiredControl PM prop
    return this.required.indexOf(inputName) > -1;
  }

  _setActiveControl(name) {
    if (name) {
      return this.pm.ExecuteMethod('SetActiveControl', this._getControl(name));
    }
    return this.pm.ExecuteMethod('SetActiveControl', null);
  }

  _isDateTimeControl(uiType) {
    return this.consts.get('SWE_CTRL_DATE_TZ_PICK') === uiType
      || this.consts.get('SWE_CTRL_DATE_TIME_PICK') === uiType
      || this.consts.get('SWE_CTRL_DATE_PICK') === uiType;
  }

  _getSiebelValue(value, uiType, displayFormat) {
    if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
      // convert true/false => Y/N // null is not handled (the same as in standard Open UI)
      // value = value ? 'Y' : 'N';
      this.boolObject.SetValue(value);
      return this.boolObject.GetAsString();
    }
    if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
      // TODO: check if a valid date is inputted
      const date = value.toLocaleString('en-US', { hour12: false }).split(',').join('');
      return SiebelApp.S_App.LocaleObject.GetStringFromDateTime(date, 'M/D/YYYY HH:mm:ss', displayFormat, false);
    }
    return `${value}`; // to implicitly convert to string? Number for currencies/numbers
  }

  canInvokeMethod(method) {
    return this.pm.ExecuteMethod('CanInvokeMethod', method);
  }

  invokeMethod(method) {
    if (!this.canInvokeMethod(method)) {
      return false;
    }
    return this.pm.ExecuteMethod('InvokeMethod', method);
  }

  _getCurrencyCodeField(control) { // eslint-disable-line class-methods-use-this
    const fieldNumber = control.GetCurrField();
    if (!fieldNumber) {
      throw new Error(`Not found currency field for ${control.GetFieldName()}`);
    }
    // check if 0 exists?
    return SiebelApp.S_App.LookupStringCache(fieldNumber).split('|')[0];
  }

  static GetPropSet(control) {
    const ret = [];
    const propSet = control.GetPMPropSet();
    if (propSet && propSet.propArray) {
      const { propArray } = propSet;
      Object.keys(propArray).forEach(prop => ret.push({ prop, val: propArray[prop] }));
    }
    return ret;
  }

  static GetControlStaticLOV(control) {
    return control.GetRadioGroupPropSet().childArray.map(el => el.propArray.DisplayName).sort();
  }

  getControls() {
    const controls = {};
    const appletControls = this._returnControls();
    const arr = Object.entries(appletControls);
    arr.forEach((controlEntry) => {
      const control = controlEntry[1];
      const uiType = control.GetUIType();
      if (!this._isSkipControl(uiType)) {
        const name = controlEntry[0];
        const inputName = control.GetInputName();
        const fieldName = control.GetFieldName();
        const displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
        const staticPick = control.IsStaticBounded() === '1';
        const dataType = this.pm.ExecuteMethod('GetFieldDataType', fieldName);
        const iconMap = control.GetIconMap();
        const obj = {
          name,
          label: control.GetDisplayName(),
          uiType,
          required: this._isRequired(inputName),
          boundedPick: control.IsBoundedPick() === '1',
          staticPick,
          inputName,
          isPostChanges: control.IsPostChanges(),
          maxSize: control.GetMaxSize(),
          fieldName,
          isLink: this.pm.ExecuteMethod('CanNavigate', name),
          readonly: !this.pm.ExecuteMethod('CanUpdate', name),
          displayFormat,
          dataType,
          isLOV: staticPick || this.consts.get('SWE_CTRL_COMBOBOX') === uiType,
          currencyCodeField: 'currency' === dataType ? this._getCurrencyCodeField(control) : '',
          popupType: control.GetPopupType(), // always correlate to uiType?
          props: N19baseApplet.GetPropSet(control),
          isSortable: control.IsSortable(),
          iconMap: iconMap ? SiebelApp.S_App.GetIconMap()[SiebelApp.S_App.LookupStringCache(iconMap)] : null,
          methodName: control.GetMethodName(),
        };
        Object.defineProperty(obj, 'readOnly', {
          get: () => {
            // eslint-disable-next-line no-console
            console.warn('[N19]The readOnly property will be removed; use readonly instead of it.');
            return obj.readonly;
          },
        });
        if (obj.staticPick) { // add values to be displayed in the static picklist - 2 properties are deprecated
          Object.defineProperty(obj, 'staticLOV', { // TODO: to be removed
            enumerable: true,
            get: () => {
              // eslint-disable-next-line no-console
              console.warn('[N19]The staticLOV property will be removed; use options instead of it.');
              return control.GetRadioGroupPropSet().childArray.map(el => el.propArray);
            },
          });
          Object.defineProperty(obj, 'lovs', { // TODO: to be removed
            enumerable: true,
            get: () => {
              // eslint-disable-next-line no-console
              console.warn('[N19]The lovs property will be removed; use options instead of it.');
              return control.GetRadioGroupPropSet().childArray
                .map(el => ({ lic: el.propArray.FieldValue, val: el.propArray.DisplayName }));
            },
          });
          obj.options = N19baseApplet.GetControlStaticLOV(control);
        }
        controls[name] = obj;
      }
    });
    return controls;
  }

  getRecordSet(addRecordIndex) {
    // TODO: convert the values?
    if (addRecordIndex) {
      return this.pm.Get('GetRecordSet').map((el, index) => {
        const ret = Object.assign({}, el);
        ret._indx = index;
        return ret;
      });
    }
    return this.pm.Get('GetRecordSet');
  }

  getRawRecordSet(addRecordIndex) {
    // TODO: convert the values?
    if (addRecordIndex) {
      return this.pm.Get('GetRawRecordSet').map((el, index) => {
        const ret = Object.assign({}, el);
        ret._indx = index;
        return ret;
      });
    }
    return this.pm.Get('GetRawRecordSet');
  }

  getRowListRowCount() {
    // how much applet can display (specified in Siebel Tools) - 10/20
    return this.pm.Get('GetRowListRowCount');
  }

  getNumRows() {
    // currently fetched from server?
    return this.pm.Get('GetNumRows');
  }

  getSelection() {
    return this.pm.Get('GetSelection');
  }

  _navigate(method) {
    if (!this.canInvokeMethod(method)) {
      return false;
    }
    const ret = this.pm.ExecuteMethod('InvokeMethod', method);
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

  positionOnRow(index, keys) {
    if (this.isListApplet) {
      if (!this.pm.ExecuteMethod('CanInvokeMethod', 'PositionOnRow')) {
        return false;
      }
      if (Number(index) < 0) {
        return false;
      }
      if (this.getRowListRowCount() < Number(index) + 1) {
        throw new Error(`${index} is equal/higher than amount of records in the applet ${this.getRowListRowCount()}`);
      }
      // TODO: if we got here, should we check GetActiveControl (applet.prototype.InvokeMethod)
      // and nullify it if active? otherwise if there is an active control, the navigation doesn't happen
      const { ctrlKey, shiftKey } = keys || {};
      return this.pm.ExecuteMethod('HandleRowSelect', index, ctrlKey, shiftKey);
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
    // 20190312 - changed from NewRecord to CreateRecord, #31
    return this.pm.ExecuteMethod('InvokeMethod', 'CreateRecord', null, {
      async: true,
      cb,
    });
  }

  newRecordSync() {
    // 20190312 - changed from NewRecord to CreateRecord, #31
    return this.pm.ExecuteMethod('InvokeMethod', 'CreateRecord');
  }

  writeRecord(cb, cberr) {
    let promise = new Promise((resolve, reject) => this._writeRecord((...args) => {
      if (args[2].GetProperty('Status') === 'Completed') {
        resolve();
      } else {
        reject();
      }
    }));
    promise = typeof cb === 'function' ? promise.then(cb) : promise;
    promise = typeof cberr === 'function' ? promise.catch(cberr) : promise;
    return promise;
  }

  _writeRecord(cb) {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, {
      async: true,
      // TODO: selfbusy: true,
      cb,
    });
  }

  writeRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord');
  }

  deleteRecordSync(skipConfirmDialog) {
    if (skipConfirmDialog) {
      this.N19Confirm = SiebelApp.Utils.Confirm;
      SiebelApp.Utils.Confirm = () => { };
    }
    // do we need to try..catch and restore the function in catch ?
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord');
    if (skipConfirmDialog) {
      SiebelApp.Utils.Confirm = this.N19Confirm;
    }
    return ret;
  }

  undoRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'UndoRecord');
  }

  setControlValue(name, value) {
    // TODO: If value is null, nothing happens, should we convert null to ''?
    const control = this._getControl(name);
    if (!control) {
      throw new Error(`Cannot find a control by name ${name} to set ${value}.`);
    }
    const uiType = control.GetUIType();
    const displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
    // eslint-disable-next-line no-param-reassign
    value = this._getSiebelValue(value, uiType, displayFormat);
    // TODO: should we use SetCellValue for list applets?
    const ret = this._setControlValueInternal(control, value);
    if (!ret) {
      console.log(`Value ${value} was not set for ${name} control`); // eslint-disable-line no-console
    }
    return ret;
  }

  // experimental method, still safer to use setContolVaue
  // not described in wiki
  // could be removed in the next version
  _setControlValue(name, value) {
    const control = this._getControl(name);
    if (!control) {
      throw new Error(`Cannot find a control by name ${name} to set ${value}.`);
    }
    const uiType = control.GetUIType();
    const isPostChanges = control.IsPostChanges();
    const displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
    // eslint-disable-next-line no-param-reassign
    value = this._getSiebelValue(value, uiType, displayFormat);
    let ret = this._setControlValueInternal(control, value);
    if (!ret) {
      console.log(`Value ${value} was not set for ${name} control`); // eslint-disable-line no-console
      return ret;
    }
    ret = this.getCurrentRecordModel();
    // TODO: do we need to check the state, or can we assume that we always have a record?
    if (!isPostChanges) {
      Object.keys(ret.controls).forEach((el) => {
        if (!ret.controls[el].isPostChanges) {
          if (ret.controls[el].name) { // it has name
            ret.controls[el].value = this.applet.GetControlValueByName(el);
          }
        }
      });
    }
    return ret;
  }

  _setControlValueInternal(control, value) {
    // should it be PHYEVENT_COLUMN_FOCUS/PHYEVENT_COLUMN_BLUR for list applet
    this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
    return this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);
  }

  _validatePickControl(control, staticPick) {
    // Possible results:
    // no pick
    // static pick
    // dynamic pick
    // pick
    // mvg
    // ?

    const isStaticPick = this.isStatic(control);
    const uiType = control.GetUIType();

    if (staticPick) { // static
      if (!isStaticPick) {
        // eslint-disable-next-line no-console
        console.warn(`[N19]It seems the getStaticLOV called for not static control - ${uiType}.`);
      }
    } else { // dynamic
      if (isStaticPick) {
        console.warn('[N19]It seems the getDynamicLOV called for static control.'); // eslint-disable-line no-console
      }
      if (this.consts.get('SWE_CTRL_COMBOBOX') !== uiType) { // the control is not "JComboBox"
        switch (uiType) {
          case this.consts.get('SWE_CTRL_PICK'): // Pick
          case this.consts.get('SWE_CTRL_MVG'): // MVG
            // eslint-disable-next-line no-console
            console.warn(`[N19]You need to use the popups instead of getDynamicLOV - ${uiType}.`);
            break;
          default:
            // eslint-disable-next-line no-console
            console.warn(`[N19]Probably getDynamicLOV is not going to work for this control - ${uiType}.`);
        }
      }
    }
  }

  isStatic(control) { // eslint-disable-line class-methods-use-this
    return '1' === control.IsStaticBounded();
  }

  isDynamic(control) {
    return !this.isStatic(control)
      && this.consts.get('SWE_CTRL_COMBOBOX') === control.GetUIType();
  }

  _getControlDynamicLOV(control) {
    const controlInputName = control.GetInputName();
    this.lov[controlInputName] = {};
    const ps = SiebelApp.S_App.NewPropertySet();
    ps.SetProperty('SWEField', controlInputName);
    ps.SetProperty('SWEJI', false);
    this._setActiveControl(null); // to prevent UpdatePick
    this.pm.ExecuteMethod('InvokeMethod', 'GetQuickPickInfo', ps);
    return this.lov[controlInputName];
  }

  getLOV(controlName) {
    const control = this._getControl(controlName);
    if (this.isStatic(control)) {
      return N19baseApplet.GetControlStaticLOV(control);
    }
    if (!this.isDynamic(control)) {
      // Take the dynamic path in the hope that it will work
      // eslint-disable-next-line no-console
      console.warn(`[N19]It seems ${controlName} is not properly configured in the Tools or not a picklist.`);
    }
    return this._getControlDynamicLOV(control);
  }

  getDynamicLOV(controlName) {
    const control = this._getControl(controlName);
    this._validatePickControl(control, false);
    return this._getControlDynamicLOV(control);
  }

  getStaticLOV(controlName) {
    const control = this._getControl(controlName);
    this._validatePickControl(control, true);
    return N19baseApplet.GetControlStaticLOV(control);
  }

  _getJSValue(value, attr) {
    const {
      uiType, dataType, displayFormat, currencyCode,
    } = attr;
    if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
      // convert Y/N/null -> true/false // null comes as false?
      this.boolObject.SetAsString(value);
      return this.boolObject.GetValue();
    }
    if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
      if (value === '') {
        return null;
      }
      let ISO = '';
      if (this.isListApplet) {
        ISO = this.utils.ToISOFormat(value, this.consts.get('SWE_CTRL_DATE_PICK') !== uiType, displayFormat);
      } else {
        ISO = this.utils.GetISODateTime(value, true);
      }
      if (ISO === '') {
        throw new Error(`ISO value is empty after converting ${value}`);
      }
      return new Date(ISO);
    }
    if (this.returnRawNumbers && this.isListApplet && 'number' === dataType) {
      // it is already not formatted on form applet, so only for list applet
      return SiebelApp.S_App.LocaleObject.FormattedToString(dataType, value, displayFormat);
    }
    if (this.returnRawCurrencies && this.isListApplet && 'currency' === dataType && currencyCode) {
      // it is already not formatted on form applet, so only for list applet
      SiebelApp.S_App.LocaleObject.SetCurrencyCode(currencyCode); // TODO: do we need to restore the m_sCurrencyCode?
      return SiebelApp.S_App.LocaleObject.FormattedToString(dataType, value, displayFormat);
    }
    return value;
  }

  getCurrentRecord(raw) {
    // TODO: need conversion?
    const index = this.getSelection();
    // TODO: check if there is a record
    // TODO: make a copy of returned object?
    if (raw) {
      return this.getRawRecordSet()[index];
    }
    return this.getRecordSet()[index];
  }

  calculateCurrentRecordState() {
    // TODO: do we need to delete pending?
    // 0 - No records displayed
    // 1 - Record is being created
    // 2 - Record is being edited
    // 3 - Is in query mode
    // 4 - Record is displayed,
    // 5 - Record is read-only

    const bc = this.pm.Get('GetBusComp');

    if (this.pm.Get('IsInQueryMode')) {
      // if no records and the entered the query mode,
      // selection is -1, therefore we need to check query mode first
      return 3;
    }
    if (this.getSelection() < 0) {
      return 0;
    }
    if (bc.IsInsertPending()) { // or insertPending property
      return 1;
    }
    if (bc.IsCommitPending()) { // bc.commitPending or this.pm.GetStateUIMap().CommitPending
      return 2;
    }
    if (!this.canInvokeMethod('WriteRecord')) {
      // or use the canUpdate property of the BC?
      return 5;
    }

    return 4; // this is a default fallback;
  }

  _getMethods() {
    const methods = {};
    const appletControls = this.pm.Get('GetControls'); // even for list applet
    const arr = Object.entries(appletControls);
    arr.forEach((controlEntry) => {
      const controlMethod = controlEntry[1].GetMethodName();
      if (typeof controlMethod !== 'undefined' && controlMethod !== '') {
        methods[controlMethod] = {};
      }
    });
    return methods;
  }

  getControlDisplayFormat(uiType) {
    switch (uiType) {
      case this.consts.get('SWE_CTRL_DATE_TZ_PICK'):
      case this.consts.get('SWE_CTRL_DATE_TIME_PICK'):
        return this.localeData.dateTimeFormat;
      case this.consts.get('SWE_CTRL_DATE_PICK'):
        return this.localeData.dateFormat;
      default:
        return '';
    }
  }

  getCurrentRecordModel(_controls, _methods) {
    if (!_controls) {
      _controls = this.getControls(); // eslint-disable-line no-param-reassign
    }
    _controls.state = this.calculateCurrentRecordState(); // eslint-disable-line no-param-reassign
    _controls.id = ''; // eslint-disable-line no-param-reassign
    let obj = {};
    const index = this.getSelection();
    if (index > -1 && _controls.state !== 3) { // added _controls.state !== 3; we don't need id in query mode
      obj = this.getRecordSet()[index];
      _controls.id = this.getRawRecordSet()[index].Id; // eslint-disable-line no-param-reassign
    }
    const appletControls = this._returnControls();
    // populate controls
    Object.keys(_controls).forEach((controlName) => {
      const control = appletControls[controlName];
      if (typeof control !== 'undefined') { // just if somebody sends incorrect name of the control
        const fieldName = control.GetFieldName();
        const uiType = control.GetUIType();
        const displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
        const staticPick = control.IsStaticBounded() === '1';
        const dataType = this.pm.ExecuteMethod('GetFieldDataType', fieldName);
        let currencyCodeField = '';
        let currencyCode = '';
        if ('currency' === dataType) {
          currencyCodeField = this._getCurrencyCodeField(control);
          if (currencyCodeField && index > -1) {
            currencyCode = this.getRawRecordSet()[index][currencyCodeField];
          }
        }
        if (_controls.id) {
          _controls[controlName] = { // eslint-disable-line no-param-reassign
            value: this._getJSValue(obj[fieldName], {
              uiType, dataType, displayFormat, currencyCode,
            }),
            uiType,
            readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
            isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(control.GetInputName()),
            maxSize: control.GetMaxSize(),
            fieldName,
            displayFormat,
            isLOV: staticPick || this.consts.get('SWE_CTRL_COMBOBOX') === uiType,
            dataType,
            currencyCodeField,
            currencyCode,
            name: controlName,
          };
        } else { // no record displayed
          _controls[controlName] = { // eslint-disable-line no-param-reassign
            value: '',
            uiType,
            readonly: _controls.state !== 3, // should be edittable in query mode
            isLink: false,
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(control.GetInputName()),
            maxSize: control.GetMaxSize(),
            fieldName,
            displayFormat,
            isLOV: staticPick || this.consts.get('SWE_CTRL_COMBOBOX') === uiType,
            dataType,
            currencyCodeField,
            currencyCode,
            name: controlName,
          };
        }
      }
    });
    // populate methods
    if (!_methods) {
      // Is it better to use applet.GetCanInvokeArray?
      _methods = this._getMethods(); // eslint-disable-line no-param-reassign
    }
    // TODO: could be an exception if method name is incorrect?
    // eslint-disable-next-line no-param-reassign
    Object.keys(_methods).forEach((methodName) => { _methods[methodName] = this.canInvokeMethod(methodName); });
    return {
      controls: _controls,
      methods: _methods,
    };
  }

  _findControlToEnterSearchExpr() {
    const appletControls = this._returnControls();
    const arr = Object.values(appletControls);
    const found = arr.find((control) => {
      const controlUiType = control.GetUIType();
      if (!this._isSkipControl(controlUiType)) {
        // skipping also checkbox, plaintext and button
        return controlUiType !== this.consts.get('SWE_CTRL_CHECKBOX')
          && controlUiType !== this.consts.get('SWE_PST_BUTTON_CTRL')
          && controlUiType !== this.consts.get('SWE_CTRL_PLAINTEXT');
      }
      return false;
    });
    return found;
  }

  _newQuery() {
    return this.pm.ExecuteMethod('InvokeMethod', 'NewQuery');
  }

  queryBySearchExprSync(expr) {
    this._newQuery(); // ? check or optionally skip
    const control = this._findControlToEnterSearchExpr();
    this._setControlValueInternal(control, expr);
    this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery');
    return this.getRecordSet().length;
  }

  queryByIdSync(rowId) {
    let expr;
    if (Array === rowId.constructor) {
      expr = rowId.map(el => `Id="${el}"`).join(' OR ');
    } else {
      expr = `Id="${rowId}"`;
    }
    return this.queryBySearchExprSync(expr);
  }

  queryById(rowId, cb) {
    const promise = new Promise(resolve => this._queryById(rowId, resolve));
    const ret = promise.then(() => this.getRecordSet().length);
    return typeof cb === 'function' ? ret.then(cb) : ret;
  }

  _queryById(rowId, cb) {
    this._newQuery(); // ? check or optionally skip

    const ai = {
      scope: this,
      async: true,
      selfbusy: true,
    };
    if (typeof cb === 'function') {
      ai.cb = cb;
    }

    const control = this._findControlToEnterSearchExpr();
    this._setControlValueInternal(control, `Id="${rowId}"`);
    return this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, ai);
  }

  query(params, cb) {
    const promise = new Promise(resolve => this._query(params, resolve));
    const ret = promise.then(() => this.getRecordSet().length);
    return typeof cb === 'function' ? ret.then(cb) : ret;
  }

  _query(params, cb) {
    // TODO: check if it is already in query mode to avoid calling the new query again
    // or accept the input parameter to skip calling the new query?
    // or maybe better to cancel the existing query?
    this._newQuery();

    const ai = {
      scope: this,
      async: true,
      selfbusy: true,
    };
    if (typeof cb === 'function') {
      ai.cb = cb;
    }

    const _controls = this._returnControls();
    const arr = Object.keys(params);
    arr.forEach((controlName) => {
      const control = _controls[controlName];
      if (control) {
        this._setControlValueInternal(control, this._getSiebelValue(params[controlName], control.GetUIType()));
      } else {
        console.error(`The control "${controlName}" is not found!`); // eslint-disable-line no-console
      }
    });

    return this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, ai);
  }

  static Requery(name) {
    const service = SiebelApp.S_App.GetService('N19 BS');
    if (service) {
      const inPropSet = SiebelApp.S_App.NewPropertySet();
      inPropSet.SetProperty('name', name);
      service.InvokeMethod('Requery', inPropSet, {});
    }
  }

  static Refresh(name) {
    const service = SiebelApp.S_App.GetService('N19 BS');
    if (service) {
      const inPropSet = SiebelApp.S_App.NewPropertySet();
      inPropSet.SetProperty('name', name);
      service.InvokeMethod('Refresh', inPropSet, {});
    }
  }

  getMVF(ids, fields, useActiveBO) {
    return new Promise((resolve, reject) => this._getMVF(ids, fields, useActiveBO, resolve, reject));
  }

  _getFieldNameForControl(controlName) {
    const control = this._getControl(controlName);
    // if not found, the input value is returned
    if (control) {
      return control.GetFieldName();
    }
    return controlName; // fallback - just in case we got the field name
  }

  _getMVF(ids, fields, useActiveBO, resolve, reject) {
    const arr = Object.entries(fields);
    const psInputs = SiebelApp.S_App.NewPropertySet();
    psInputs.SetProperty('BO', SiebelApp.S_App.GetActiveBusObj().GetName());
    psInputs.SetProperty('BC', this.pm.Get('GetBusComp').GetName());
    psInputs.SetProperty('UseActiveBO', useActiveBO ? 'Y' : 'N');
    psInputs.SetProperty('ID', ids.join(','));
    arr.forEach((el) => {
      const ps = SiebelApp.S_App.NewPropertySet();
      ps.SetType(this._getFieldNameForControl(el[0]));
      ps.SetProperty('Fields', el[1].join(','));
      psInputs.AddChild(ps.Clone());
    });
    const bs = SiebelApp.S_App.GetService('N19 BS');
    const ai = {
      async: true,
      selfbusy: true,
      scope: this,
      errcb: () => {
        reject();
      },
      cb: (methodName, Inputs, psOutputs) => {
        const ret = {};
        const { childArray } = psOutputs.GetChildByType('ResultSet') || {}; // to be safe when no results
        (childArray || []).forEach((child) => {
          ret[child.GetType()] = {};
          child.childArray.forEach((grandChild) => {
            ret[child.GetType()][grandChild.GetType()] = grandChild.childArray.map((rec) => {
              const primary = rec.propArray['SSA Primary Field'];
              this.boolObject.SetAsString(primary);
              rec.propArray['SSA Primary Field'] = this.boolObject.GetValue(); // eslint-disable-line no-param-reassign
              return Object.assign({}, rec.propArray);
            });
          });
        });
        resolve(ret);
      },
    };
    return bs.InvokeMethod('ReturnMVGFields', psInputs, ai);
  }

  savePref(name, value) {
    // value is a string, and bound to applet and view
    const psInput = SiebelApp.S_App.NewPropertySet();
    psInput.SetProperty('Key', name);
    psInput.SetProperty(name, value);
    this.pm.OnControlEvent(
      this.consts.get('PHYEVENT_INVOKE_CONTROL'),
      this.pm.Get(this.consts.get('SWE_MTHD_UPDATE_USER_PREF')),
      psInput,
    );
    return this.pm.SetProperty(name, value);
  }

  readPref(name) {
    return this.pm.Get(name);
  }

  _retrieveData(amount) { // could be removed in the next version
    // it starts from the current position
    if (!this.isListApplet) {
      return false;
    }

    const data = new Map();
    const allRecords = amount === 0;

    while (data.size < amount || allRecords) {
      const arr = this.getRawRecordSet();

      // avoid the duplicates
      arr.forEach(el => data.set(el.Id, el));

      // we are using canInvokeMethod, as in 16.0 nextRecordSet always returns undefined
      if (!this.canInvokeMethod('GotoNextSet')) {
        break;
      }

      this.nextRecordSet();
    }

    return {
      data: [...data.values()],
      hasNext: this.canInvokeMethod('GotoNextSet'),
    };
  }

  _setFieldValue(name, value) {
    console.warn('[N19]_setFieldValue will be removed in the future!'); // eslint-disable-line no-console
    this.applet.SetControlValueByName(name, value);
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord');
  }

  // this is also called from the the demo where Siebel and custom rendered applet coexist
  _getFieldToControlMap(_controls) {
    // list applet has the GetColumnsByFieldName that could be used for that purpose
    const ret = {};
    const appletControls = this._returnControls();
    const arr = Object.keys(_controls || appletControls);
    arr.forEach((controlName) => {
      const control = appletControls[controlName];
      if (typeof control !== 'undefined') { // just in case somebody gave the incorrect control name
        const fieldName = control.GetFieldName();
        if (fieldName) {
          const uiType = control.GetUIType();
          const dataType = this.pm.ExecuteMethod('GetFieldDataType', fieldName);
          ret[fieldName] = {
            name: controlName,
            isPostChanges: control.IsPostChanges(),
            uiType,
            displayFormat: control.GetDisplayFormat() || this.getControlDisplayFormat(uiType),
            dataType,
            currencyCodeField: 'currency' === dataType ? this._getCurrencyCodeField(control) : '',
          };
        }
      }
    });
    return ret;
  }

  getControlsRecordSet() {
    // used slice to avoid modification of the record set
    const ret = this.getRecordSet().slice();
    const rawRecordSet = this.getRawRecordSet(); // just fallback if record set does not have Id

    for (let i = 0, len = ret.length; i < len; i += 1) {
      const id = ret[i].Id;
      ret[i] = Object.keys(ret[i]).filter(el => this.fieldToControlMap[el]).reduce((acc, el) => ({
        ...acc,
        ...{
          [this.fieldToControlMap[el].name]: this._getJSValue(ret[i][el], {
            uiType: this.fieldToControlMap[el].uiType,
            dataType: this.fieldToControlMap[el].dataType,
            displayFormat: this.fieldToControlMap[el].displayFormat,
            currencyCode: rawRecordSet[i][this.fieldToControlMap[el].currencyCodeField],
          }),
        },
      }), {});
      ret[i].Id = id || rawRecordSet[i].Id;
    }

    return ret;
  }

  sort(controlName, isAscending) {
    // TODO: check if dataset is sortable? e.g. not in query or in insert mode?
    // TODO: check if we can sort by this control
    if (this.isListApplet) {
      const sortOrder = isAscending ? this.consts.get('SORT_ASCENDING') : this.consts.get('SORT_DESCENDING');
      this.pm.ExecuteMethod('OnClickSort', controlName, sortOrder);
      return true;
    }
    return false;
  }

  getPaginationInfo() {
    const start = this.pm.ExecuteMethod('GetWSStartRowNum');
    return {
      start,
      end: this.pm.Get('GetWSEndRowNum'),
      total: this.getNumRows(),
      hasMore: !this.pm.Get('IsNumRowsKnown'),
      current: this.getSelection() + start,
    };
  }
}
