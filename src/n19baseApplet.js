import N19notifications from './n19notifications';

export default class N19baseApplet {
  constructor(settings) {
    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.utils = SiebelJS.Dependency('SiebelApp.Utils');
    this.pm = settings.pm;
    this.convertDates = settings.convertDates;
    this.view = SiebelApp.S_App.GetActiveView();
    this.appletName = this.pm.Get('GetName');
    this.applet = this.view.GetApplet(this.appletName);
    this.isListApplet = typeof this.pm.Get('GetListOfColumns') !== 'undefined';
    this.required = []; // will be empty for the list applet
    this.lov = {};
    this.boolObject = new SiebelApp.S_App.DatumBoolObject();

    this.loadLocaleData();

    const bcId = this.applet.GetBCId();
    this.notifications = new N19notifications(this.pm, this.consts, bcId);

    // populate the required array for form applets
    if (!this.isListApplet) {
      const appletId = `s_${this.pm.Get('GetFullId')}_div`;
      const appletInputs = document.getElementById(appletId).querySelectorAll('input');
      for (let i = 0; i < appletInputs.length; i += 1) {
        if (appletInputs[i].attributes['aria-required']) {
          this.required.push(appletInputs[i].attributes.name.nodeValue);
        }
      }
    }

    // listener to get dynamic LOVs
    this.pm.AttachPMBinding('UpdateQuickPickInfo', (inputName, arg, arr) => {
      const viewName = this.view.GetName();
      if (viewName === arr[1] && this.appletName === arr[2]) {
        if ('false' === arr[4]) {
          // eslint-disable-next-line no-console
          console.warn(`[N19]Picklist is not associated with the control - ${JSON.stringify(arr)}`);
        }
        this.lov[arr[3]] = arr.splice(5).filter(el => el !== '');
        // todo: do we need to indicate when an empty value is allowed?
      }
    }, { scope: this });
  }

  loadLocaleData() {
    const localeObject = SiebelApp.S_App.LocaleObject;
    this.localeData = {
      dateFormat: localeObject.GetProfile(this.consts.get('LOCAL_DATE_FORMAT')),
      dateTimeFormat: localeObject.GetProfile(this.consts.get('LOCAL_DATETIME_FORMAT')),
      firstDayOfWeek: localeObject.GetWeekStartDay(),
    };
    this.localeData.months = [];
    this.localeData.shortMonths = [];
    const months = localeObject.GetData('Month', localeObject.m_spMonthPS);
    for (let i = 1; i <= 12; i += 1) {
      this.localeData.months.push(months.GetProperty(`${i}:0`));
      this.localeData.shortMonths.push(months.GetProperty(`${i}:1`));
    }
    // const weekDays = localeObject.GetData('DayOfWeek', localeObject.m_spDayOfWeekPS);
  }

  subscribe(func) { // eslint-disable-line class-methods-use-this
    // TODO : accept also context for function, or the called bound context to the function?
    return this.notifications.subscribe(func);
  }

  unsubscribe(token) { // eslint-disable-line class-methods-use-this
    return this.notifications.unsubscribe(token);
  }

  _getControl(name) {
    return this.pm.ExecuteMethod('GetControl', name);
  }

  _returnControls() {
    if (this.isListApplet) {
      return this.pm.Get('GetListOfColumns');
    }
    return this.pm.Get('GetControls');
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

  static GetStaticLOV(arr) {
    const ret = [];
    for (let i = 0; i < arr.length; i += 1) {
      ret.push(arr[i].propArray);
    }
    return ret;
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
    // todo: numbers, and phones?
    if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
      // convert true/false => Y/N // null is not handled (the same as in standard Open UI)
      this.boolObject.SetValue(value);
      return this.boolObject.GetAsString();
      // value = value ? 'Y' : 'N'; // eslint-disable-line no-param-reassign
    }
    if (this.convertDates && displayFormat && this._isDateTimeControl(uiType)) {
      // TODO: check if a valid date is inputted
      const date = value.toLocaleString('en-US', { hour12: false }).split(',').join('');
      return SiebelApp.S_App.LocaleObject.GetStringFromDateTime(date, 'M/D/YYYY HH:mm:ss', displayFormat, false);
    }
    return value;
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

  getControls() {
    const controls = {};
    const appletControls = this._returnControls();
    const arr = Object.keys(appletControls);
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      const uiType = control.GetUIType();
      const displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
      if (this._isSkipControl(uiType)) {
        continue; // eslint-disable-line no-continue
      }
      const name = control.GetName();
      const inputName = control.GetInputName();
      const obj = {
        name,
        label: control.GetDisplayName(),
        uiType,
        required: this._isRequired(inputName),
        boundedPick: control.IsBoundedPick() === '1',
        staticPick: control.IsStaticBounded() === '1',
        // pickApplet: control.GetPickApplet(), // confusing and not consistent - see wiki
        inputName,
        isPostChanges: control.IsPostChanges(),
        maxSize: control.GetMaxSize(),
        // maxChars: control.GetMaxChars(), // it is always 0
        fieldName: control.GetFieldName(),
        isLink: this.pm.ExecuteMethod('CanNavigate', name),
        readonly: !this.pm.ExecuteMethod('CanUpdate', name),
        displayFormat,
      };
      Object.defineProperty(obj, 'readOnly', {
        get: () => {
          // eslint-disable-next-line no-console
          console.warn('[N19]The readOnly property will be removed soon; use readonly instead of it.');
          return obj.readonly;
        },
      });
      // add values to be displayed in the static pick list
      if (obj.staticPick) {
        obj.staticLOV = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);
        obj.lovs = obj.staticLOV.reduce((acc, el) => { // normalized
          acc.push({ lic: el.FieldValue, val: el.DisplayName });
          return acc;
        }, []);
      }
      controls[name] = obj;
    }
    return controls;
  }

  getRecordSet(addRecordIndex) {
    // TODO: DO WE NEED TO DO CONVERSION?
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
    // TODO: DO WE NEED TO DO CONVERSION?
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

  positionOnRow(index) {
    if (this.isListApplet) {
      if (!this.pm.ExecuteMethod('CanInvokeMethod', 'PositionOnRow')) {
        return false;
      }
      if (index < 0) {
        return false;
      }
      // seems this check is redundant
      // if (this.getNumRows() < index + 1) { //
      //   return false;
      // }
      if (this.getRowListRowCount() < index + 1) {
        throw new Error(`${index} is equal/higher than amount of records in the applet ${this.getRowListRowCount()}`);
      }
      // todo : if we got to this point
      //  should we check GetActiveControl (applet.prototype.InvokeMethod)
      //  and nullify it if active?
      return this.pm.ExecuteMethod('HandleRowSelect', index);
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
    // todo: should it be the same as WriteRecord?
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
    return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord');
  }

  writeRecord(cb, cberr) {
    let promise = new Promise((resolve, reject) => this._writeRecord((...args) => {
      // do we always have three input arguments, and the third argument is
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
      selfbusy: true,
      cb,
    });
  }

  writeRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord');
  }

  deleteRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord');
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
      console.log(`Value ${value} was not set for ${control.GetName()}`); // eslint-disable-line no-console
    }
    return ret;
  }

  _setControlValueInternal(control, value) {
    this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
    return this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);
  }

  _validatePickControl(control, isStatic) {
    // Possible results:
    // no pick
    // static pick
    // dynamic pick
    // pick
    // mvg
    // ?

    const isStaticPick = '1' === control.IsStaticBounded();
    const uiType = control.GetUIType();

    if (isStatic) { // called getStaticLOV
      if (!isStaticPick) {
        // eslint-disable-next-line no-console
        console.warn(`[N19]The getStaticLOV called for not static control - ${uiType}. Use getDynamicLOV or pick/mvg`);
      }
    } else { // called getDynamicLOV
      if (isStaticPick) {
        console.warn('[N19]The getDynamicLOV called for static control.'); // eslint-disable-line no-console
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

  getDynamicLOV(controlName) {
    const control = this._getControl(controlName);
    this._validatePickControl(control, false);
    const controlInputName = control.GetInputName();
    this.lov[controlInputName] = {};
    const ps = SiebelApp.S_App.NewPropertySet();
    ps.SetProperty('SWEField', controlInputName);
    ps.SetProperty('SWEJI', false);
    this._setActiveControl(null); // to prevent UpdatePick
    this.pm.ExecuteMethod('InvokeMethod', 'GetQuickPickInfo', ps);
    return this.lov[controlInputName];
  }

  getStaticLOV(controlName) {
    const control = this._getControl(controlName);
    this._validatePickControl(control, true);
    const ret = [];
    const arr = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);
    for (let i = 0; i < arr.length; i += 1) {
      ret.push(arr[i].DisplayName);
    }
    return ret.sort();
  }

  _getJSValue(value, uiType, displayFormat) {
    // todo: what about datetime?
    if (this.consts.get('SWE_CTRL_CHECKBOX') === uiType) {
      // convert Y/N/null -> true/false // what about null
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
    return value;
  }

  getCurrentRecord(raw) {
    // todo: do we need to do the conversion
    const index = this.getSelection();
    // todo: check if there is a record
    // todo: make a copy of returned object (to avoid the accidental modification of the recordset)
    if (raw) {
      return this.pm.Get('GetRawRecordSet')[index];
    }
    return this.pm.Get('GetRecordSet')[index];
  }

  calculateCurrentRecordState() {
    // todo: do we need to delete pending
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
    if (bc.IsInsertPending()) { // seems insertPending gives more correct value
      return 1;
    }
    if (bc.IsCommitPending()) {
      return 2;
    }
    if (!this.canInvokeMethod('WriteRecord')) {
      // or maybe better to use the canUpdate property of the bc
      return 5;
    }

    return 4; // this is a default fallback;
  }

  _getMethods() {
    const methods = {};
    const appletControls = this.pm.Get('GetControls'); // even fo list applet
    const arr = Object.keys(appletControls);
    for (let i = 0; i < arr.length; i += 1) {
      const controlMethod = appletControls[arr[i]].GetMethodName();
      if (typeof controlMethod !== 'undefined' && controlMethod !== '') {
        methods[controlMethod] = {};
      }
    }
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
    if (!_methods) {
      _methods = this._getMethods(); // eslint-disable-line no-param-reassign
    }
    _controls.state = this.calculateCurrentRecordState(); // eslint-disable-line no-param-reassign
    _controls.id = ''; // eslint-disable-line no-param-reassign
    let obj = {};
    const index = this.getSelection();
    if (index > -1 && _controls.state !== 3) { // added _controls.state !== 3; we don't need id in query mode
      obj = this.getRecordSet()[index];
      _controls.id = this.getRawRecordSet()[index].Id; // eslint-disable-line no-param-reassign
    }
    let arr = Object.keys(_controls);
    const appletControls = this._returnControls();
    // populate controls
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      if (typeof control !== 'undefined') { // just if somebody sends incorrect name of the control
        const controlName = control.GetName();
        const fieldName = control.GetFieldName();
        const uiType = control.GetUIType();
        const displayFormat = control.GetDisplayFormat() || this.getControlDisplayFormat(uiType);
        if (_controls.id) {
          _controls[arr[i]] = { // eslint-disable-line no-param-reassign
            value: this._getJSValue(obj[fieldName], control.GetUIType(), displayFormat),
            uiType,
            readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
            isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(control.GetInputName()),
            maxSize: control.GetMaxSize(),
            fieldName,
            displayFormat,
          };
        } else { // no record displayed
          _controls[arr[i]] = { // eslint-disable-line no-param-reassign
            value: '',
            uiType,
            readonly: true,
            isLink: false,
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(control.GetInputName()),
            maxSize: control.GetMaxSize(),
            fieldName,
            displayFormat,
          };
        }
      }
    }
    // populate methods
    if (_methods) {
      arr = Object.keys(_methods);
      for (let i = 0; i < arr.length; i += 1) {
        _methods[arr[i]] = this.canInvokeMethod(arr[i]); // eslint-disable-line no-param-reassign
      }
    }
    // return true;
    return {
      controls: _controls,
      methods: _methods,
    };
  }

  _findControlToEnterSearchExpr() {
    const appletControls = this._returnControls();
    const arr = Object.keys(appletControls);
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      const controlUiType = control.GetUIType();
      if (!this._isSkipControl(controlUiType)) {
        // skipping also JCheckbox
        // todo: check do we need to skip also date?
        if (controlUiType !== this.consts.get('SWE_CTRL_CHECKBOX')) {
          return control;
        }
      }
    }
    throw new Error('cannot find a control for query');
  }

  _newQuery() {
    return this.pm.ExecuteMethod('InvokeMethod', 'NewQuery');
  }

  queryBySearchExprSync(expr) {
    this._newQuery(); // ?
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
    this._newQuery(); // ?

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

    const arr = Object.keys(params);
    const _controls = this._returnControls();
    for (let i = 0; i < arr.length; i += 1) {
      const control = _controls[arr[i]];
      if (control) {
        this._setControlValueInternal(control, this._getSiebelValue(params[arr[i]], control.GetUIType()));
      } else {
        console.error(`The control "${arr[i]}" is not found!`); // eslint-disable-line no-console
      }
    }

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
    for (let i = 0; i < arr.length; i += 1) {
      const ps = SiebelApp.S_App.NewPropertySet();
      ps.SetType(this._getFieldNameForControl(arr[i][0]));
      ps.SetProperty('Fields', arr[i][1].join(','));
      psInputs.AddChild(ps.Clone());
    }
    const bs = SiebelApp.S_App.GetService('N19 BS');
    const ai = {
      async: true,
      selfbusy: true,
      scope: this,
      errcb: () => reject(),
      cb: (methodName, Inputs, psOutputs) => {
        const { childArray } = psOutputs.GetChildByType('ResultSet') || {}; // to be protectedd when no results
        const ret = {};
        for (let i = 0; i < (childArray || []).length; i += 1) {
          ret[childArray[i].GetType()] = {};
          for (let j = 0; j < childArray[i].childArray.length; j += 1) {
            const el = childArray[i].childArray[j];
            ret[childArray[i].GetType()][el.GetType()] = el.childArray.map((rec) => {
              const primary = rec.propArray['SSA Primary Field'];
              this.boolObject.SetAsString(primary);
              rec.propArray['SSA Primary Field'] = this.boolObject.GetValue(); // eslint-disable-line no-param-reassign
              return Object.assign({}, rec.propArray);
            });
          }
        }
        resolve(ret);
      },
    };
    return bs.InvokeMethod('ReturnMVGFields', psInputs, ai);
  }

  savePref(name, value) {
    // value is a string
    // value is bound to applet and view
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

  _retrieveData(amount) { // temp method!
    const data = new Map();

    while (data.size < amount) {
      const temp = this.getRawRecordSet();

      // avoid the duplicates
      for (let i = 0; i < temp.length; i += 1) {
        data.set(temp[i].Id, temp[i]);
      }

      // we are using canInvokeMethod, as in 16.00 nextRecordSet always returns undefined
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
    const ret = {};
    const appletControls = this._returnControls();
    const arr = Object.keys(_controls);
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      const field = control.GetFieldName();
      if (field) {
        const uiType = control.GetUIType();
        ret[field] = {
          name: control.GetName(),
          isPostChanges: control.IsPostChanges(),
          uiType,
          displayFormat: control.GetDisplayFormat() || this.getControlDisplayFormat(uiType),
        };
      }
    }
    return ret;
  }

  getControlsRecordSet() {
    if (!this.fieldToControlMap) {
      this.fieldToControlMap = this._getFieldToControlMap(this._returnControls());
    }
    // used slice to avoid modification of the record set
    const ret = this.getRecordSet().slice();

    // todo : convert boolean values (e.g. Y/N <-> true/falss)
    for (let i = 0; i < ret.length; i += 1) {
      const id = ret[i].Id;
      ret[i] = Object.keys(ret[i]).filter(el => this.fieldToControlMap[el]).reduce((acc, el) => ({
        ...acc,
        ...{
          [this.fieldToControlMap[el].name]: this._getJSValue(ret[i][el],
            this.fieldToControlMap[el].uiType,
            this.fieldToControlMap[el].displayFormat),
        },
      }), {});
      if (id) {
        ret[i].Id = id;
      }
    }

    return ret;
  }
}
