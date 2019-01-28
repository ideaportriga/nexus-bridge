export default class N19baseApplet {
  constructor(settings) {
    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.pm = settings.pm;
    this.view = SiebelApp.S_App.GetActiveView();
    this.appletName = this.pm.Get('GetName');
    this.applet = this.view.GetAppletMap()[this.appletName];
    this.isListApplet = typeof this.applet.GetListOfColumns === 'function';
    this.required = []; // will be empty for the list applet
    this.lov = {};

    this.token = 0;
    this.subscribers = [];
    const bcId = this.applet.GetBCId();
    this.pm.AttachNotificationHandler(this.consts.get('SWE_PROP_BC_NOTI_END'), (propSet) => {
      if (bcId === propSet.GetProperty('bc')) {
        for (let i = 0; i < this.subscribers.length; i += 1) {
          // we assume that the function does not throw an error
          this.subscribers[i].func();
        }
      }
    });

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
    const appletName = this.pm.Get('GetName');
    this.pm.AttachNotificationHandler(this.consts.get('SWE_PROP_BC_NOTI_GENERIC'), (propSet) => {
      const viewName = SiebelApp.S_App.GetActiveView().GetName();
      const type = propSet.GetProperty(this.consts.get('SWE_PROP_NOTI_TYPE'));
      if (type === 'GetQuickPickInfo') {
        const arr = [];
        CCFMiscUtil_StringToArray(propSet.GetProperty(this.consts.get('SWE_PROP_ARGS_ARRAY')), arr);
        if (viewName === arr[1] && appletName === arr[2]) {
          this.lov[arr[3]] = arr.splice(5).filter(el => el !== '');
        }
      }
    });
  }

  subscribe(func) {
    if (typeof func !== 'function') {
      throw new Error('func is not a function');
    }
    this.token += 1;
    this.subscribers.push({ token: this.token, func });
    return this.token;
  }

  unsubscribe(token) {
    for (let i = 0; i < this.subscribers.length; i += 1) {
      if (token === this.subscribers[i].token) {
        return this.subscribers.splice(i, 1);
      }
    }
    return false;
  }

  _getControl(name) {
    return this.applet.GetControl(name);
  }

  _returnControls() {
    if (this.isListApplet) {
      return this.applet.GetListOfColumns(); // pm.Get('GetListOfColumns')
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

  static GetStaticLOV(arr) {
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
        // pickApplet: control.GetPickApplet(), // confusing and not consistent - see wiki
        inputName: controlInputName,
        isPostChanges: control.IsPostChanges(),
        maxSize: control.GetMaxSize(),
        // maxChars: control.GetMaxChars(), // it is always 0
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
        obj.staticLOV = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);
        obj.lovs = obj.staticLOV.reduce((acc, el) => { // normalized
          acc.push({ lic: el.FieldValue, val: el.DisplayName });
          return acc;
        }, []);
      }
      controls[controlName] = obj;
    }
    return controls;
  }

  getRecordSet(addRecordIndex) {
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
      //  should we check applet.GetActiveControl (applet.prototype.InvokeMethod)
      //  and nullify it if active?
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
    return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, false);
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
      cb,
    });
  }

  writeRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, false);
  }

  deleteRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord', null, false);
  }

  undoRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'UndoRecord', null, false);
  }

  setControlValue(name, value) {
    // TODO: If value is null, nothing happens, should we convert null to ''?
    const control = this._getControl(name);
    // TODO: Check if control is found
    value = this._getValueForControl(control.GetUIType(), value); // eslint-disable-line no-param-reassign
    // maybe check if typeof applet.SetControlValueByName is function and use it when available? - not exists in 14.x
    // TODO: should we use SetCellValue for list applets?
    this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
    const ret = this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);
    if (!ret) {
      console.log(`Value ${value} was not set for ${control.GetName()}`); // eslint-disable-line no-console
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
    this.applet.SetActiveControl(null); // to preve UpdatePick
    this.applet.InvokeMethod('GetQuickPickInfo', ps);
    return this.lov[controlInputName];
  }

  getStaticLOV(controlName) {
    const control = this._getControl(controlName);
    const ret = [];
    if ('1' === control.IsStaticBounded()) {
      const arr = N19baseApplet.GetStaticLOV(control.GetRadioGroupPropSet().childArray);
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

  // this is a temp method to support the demo where
  // Siebel and custom rendered applet coexist
  _getFieldToControlMap(_controls) {
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
    // todo: check if record
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

    const bc = this.applet.GetBusComp();

    if (bc.IsInQueryState()) {
      // if no records and the entered the query mode,
      // selection is -1, therefore we need to check query mode first
      return 3;
    }
    if (this.getSelection() < 0) {
      return 0;
    }
    if (bc.IsInsertPending()) {
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

  getCurrentRecordModel(_controls, _methods) {
    if (!_controls) {
      return false;
    }
    _controls.state = this.calculateCurrentRecordState(); // eslint-disable-line no-param-reassign
    _controls.id = ''; // eslint-disable-line no-param-reassign
    let obj = {};
    const index = this.getSelection();
    if (index > -1) {
      obj = this.getRecordSet()[index];
      _controls.id = this.getRawRecordSet()[index].Id; // eslint-disable-line no-param-reassign
    }
    let arr = Object.keys(_controls);
    const appletControls = this._returnControls();
    // populate controls
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      if (typeof control !== 'undefined') {
        const controlName = control.GetName();
        const fieldName = control.GetFieldName();
        if (_controls.state > 0) {
          _controls[arr[i]] = { // eslint-disable-line no-param-reassign
            value: this._getControlValue(control.GetUIType(), obj[fieldName]),
            readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
            isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(control.GetInputName()),
            maxSize: control.GetMaxSize(),
            fieldName,
          };
        } else { // no record displayed
          _controls[arr[i]] = { // eslint-disable-line no-param-reassign
            value: '',
            readonly: true,
            isLink: false,
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(control.GetInputName()),
            maxSize: control.GetMaxSize(),
            fieldName,
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

  queryBySearchExprSync(expr) {
    this.applet.InvokeMethod('NewQuery');
    this.applet.GetBusComp().SetFieldValue('Id', expr);
    this.applet.InvokeMethod('ExecuteQuery');
    return this.getRecordSet().length;
  }

  queryByIdSync(rowId) {
    let expr = rowId;
    if (Array === rowId.constructor) {
      expr = rowId.map(el => `Id="${el}"`).join(' OR ');
      console.log(expr);
    }

    this.applet.InvokeMethod('NewQuery');
    this.applet.GetBusComp().SetFieldValue('Id', expr);
    this.applet.InvokeMethod('ExecuteQuery');
    return this.getRecordSet().length;
  }

  queryById(rowId, cb) {
    const promise = new Promise(resolve => this._queryById(rowId, resolve));
    const ret = promise.then(() => this.getRecordSet().length);
    return typeof cb === 'function' ? ret.then(cb) : ret;
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
    const ret = promise.then(() => this.getRecordSet().length);
    return typeof cb === 'function' ? ret.then(cb) : ret;
  }

  _query(params, cb) {
    // TODO: check if it is already in query mode to avoid calling the new query again
    // or maybe better to cancel the existing query?
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
    return controlName;
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
        const boolObject = new SiebelApp.S_App.DatumBoolObject();
        const { childArray } = psOutputs.GetChildByType('ResultSet') || {}; // to be protectedd when no results?
        const ret = {};
        for (let i = 0; i < childArray.length; i += 1) {
          ret[childArray[i].GetType()] = {};
          for (let j = 0; j < childArray[i].childArray.length; j += 1) {
            const el = childArray[i].childArray[j];
            ret[childArray[i].GetType()][el.GetType()] = el.childArray.map((rec) => {
              const primary = rec.propArray['SSA Primary Field'];
              boolObject.SetAsString(primary);
              rec.propArray['SSA Primary Field'] = boolObject.GetValue(); // eslint-disable-line no-param-reassign
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

  _retrieveData(amount) { // temp method?
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
    this.applet.GetBusComp().SetFieldValue(name, value);
    return this.applet.InvokeMethod('WriteRecord');
  }

  getFieldToControlMap() {
    this.fieldToControlMap = { Id: 'Id' };
    const appletControls = this._returnControls();
    const arr = Object.keys(appletControls);
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      const field = control.GetFieldName();
      if (field) {
        this.fieldToControlMap[field] = arr[i];
      }
    }
    return this.fieldToControlMap;
  }

  getControlsRecordSet() {
    if (!this.fieldToControlMap) {
      this.getFieldToControlMap();
    }
    // used slice to avoid modification of the record set
    const ret = this.getRecordSet().slice();

    for (let i = 0; i < ret.length; i += 1) {
      ret[i] = Object.keys(ret[i]).filter(el => this.fieldToControlMap[el]).reduce((acc, el) => ({
        ...acc,
        ...{ [this.fieldToControlMap[el]]: ret[i][el] },
      }), {});
    }

    return ret;
  }
}
