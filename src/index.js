// for now only for form and list applets

import N19popup from './n19popup';

SiebelAppFacade.N19Helper = class {
  constructor(settings) {
    SiebelAppFacade.N19popup = N19popup; // to make it available in PR
    this.consts = SiebelJS.Dependency('SiebelApp.Constants');
    this.pm = settings.pm;
    this.appletName = this.pm.Get('GetName');
    this.view = SiebelApp.S_App.GetActiveView();
    this.viewName = this.view.GetName();
    this.applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[this.appletName];
    this.isListApplet = typeof this.applet.GetListOfColumns === 'function';
    this.appletId = `s_${this.pm.Get('GetFullId')}_div`;
    this.required = []; // will be empty for list applet
    this.lov = {};

    // populate required
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

    // eslint-disable-next-line no-console
    console.log(`${this.constructor.name} started....`, this.appletName);
  }

  _getControl(name) {
    return this.applet.GetControl(name);
  }

  returnControls() {
    if (this.isListApplet) {
      return this.applet.GetListOfColumns();
    }
    return this.applet.GetControls();
    // the same - ? // return pm.Get('GetControls');
  }

  canInvokeMethod(method) {
    return this.pm.ExecuteMethod('CanInvokeMethod', method);
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
    // required is empty for list applets
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

  _isPopupOpen() {
    // this code will close the applet even if this applet was originated by another applet
    const currPopups = SiebelApp.S_App.GetPopupPM().Get('currPopups');
    if (0 === currPopups.length) {
      return { isOpen: false };
    }
    if (1 === currPopups.length) {
      return { isOpen: true, appletName: currPopups[0].GetName() };
    }
    if (2 === currPopups.length) {
      // this is a shuttle or
      // maybe we opened a popup applet on the top of pick applet - TODO: // test it
      //      test it  - maybe we need to close the several applets
      for (let i = 0; i < currPopups.length; i += 1) {
        if (typeof currPopups[1].GetPopupAppletName === 'function') {
          return { isOpen: true, appletName: currPopups[i].GetName() };
        }
      }
      throw new Error('Mvg applet is not found...');
    }
    // todo: test if we can get to here
    //    maybe when we open a new applet on top of the shuttle applet
    throw new Error('how did I get here...');
  }

  _showMvgApplet(name) {
    this.view.SetActiveAppletInternal(this.applet); // or SetActiveApplet
    this._setActiveControl(name);
    const { isOpen, appletName } = this._isPopupOpen();
    if (isOpen) {
      console.log(`closing ${appletName} in _showMvgApplet...`); // eslint-disable-line no-console
      // maybe do not close if the applet to be opened if the same as opened?
      SiebelAppFacade.N19[appletName].closeApplet(); // todo: check if closed?
    }
    // return this.applet.InvokeMethod('EditPopup', null, false); // async
    // return this.pm.OnControlEvent(this.consts.get('PHYEVENT_INVOKE_MVG'), this._getControl(name)); // async
    // return this.pm.ExecuteMethod('InvokeMethod', 'EditPopup', null, false); // async

    return this.applet.InvokeMethod('EditPopup', null, false);
  }

  getAppletType() {
    return this.isListApplet ? 'list' : 'form';
  }

  getControls() {
    const controls = {};
    const appletControls = this.returnControls();
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
        // ?
        obj.readOnly = !this.pm.ExecuteMethod('CanUpdate',
          this.pm.GetRenderer().GetColumnHelper().GetActualControlName(controlName));
      } else {
        obj.readOnly = !this.pm.ExecuteMethod('CanUpdate', controlName);
      }
      // add values to be displayed in the static pick list
      if (obj.staticPick) {
        obj.staticLOV = this._getStaticLOV(control.GetRadioGroupPropSet().childArray);
      }
      // obj.staticValue = obj.staticLOV; // if somebody already uses it
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
    // how much applet can display (specified in Siebel Tools)
    // 10/20
    return this.pm.Get('GetRowListRowCount');
  }

  getNumRows() {
    // visible in applet
    return this.pm.Get('GetNumRows');
  }

  getSelection() {
    return this.pm.Get('GetSelection');
  }

  _navigate(method) {
    if (!this.canInvokeMethod(method)) {
      return false;
    }
    const ps = SiebelApp.S_App.NewPropertySet();
    ps.SetProperty('SWEApplet', this.appletName);
    ps.SetProperty('SWEView', this.viewName);
    const ret = this.applet.InvokeControlMethod(method, ps, {});
    // if (ret) {
    // if navigation was successfull, we need to get the new controls
    // controls = {};
    // }
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

  _invokeCommandManager(cmd, f) {
    this.view.SetActiveAppletInternal(this.applet);
    // maybe we don't need to set active applet if send the command as below
    // "*Browser Applet* *UndoRecord*Service Request Detail Applet* "
    const ai = {
      scope: {
        cb: (...args) => { // eslint-disable-line func-names
          console.log('response in callback', cmd, args); // eslint-disable-line no-console
          if (args[3]) {
            console.log(cmd, 'was successful'); // eslint-disable-line no-console
            if (typeof f === 'function') {
              f(cmd);
            }
          } else {
            console.log(cmd, 'WAS NOT successful'); // eslint-disable-line no-console
          }
        },
      },
    };
    // todo: Do we always need to sent true
    return SiebelApp.CommandManager.GetInstance().InvokeCommand.call(null, cmd, true, ai);
  }

  newRecord(cb) {
    return this._invokeCommandManager('*Browser Applet* *NewRecord* * ', cb);
  }

  newRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'NewRecord', null, false);
  }

  undoRecord(cb) {
    return this._invokeCommandManager('*Browser Applet* *UndoRecord* * ', cb);
  }

  writeRecord(cb) {
    return this._invokeCommandManager('*Browser Applet* *WriteRecord* * ', cb);
  }

  writeRecordSync() {
    return this.pm.ExecuteMethod('InvokeMethod', 'WriteRecord', null, false);
  }

  deleteRecord(cb) {
    console.log(typeof cb); // eslint-disable-line no-console
    return this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecord', null, false);
    // return _invokeCommandManager('*Browser Applet* *DeleteRecord* * ', cb);
  }

  _getValueForControl(controlUiType, value) { // from external system
    // DateTime, numbers, and phone
    if (this.consts.get('SWE_CTRL_CHECKBOX') === controlUiType) {
      // convert true/false => Y/N
      // do we want to support setting to null
      value = value ? 'Y' : 'N'; // eslint-disable-line no-param-reassign
    }
    return value;
  }

  setControlValue(name, value) {
    // !!! TODO: If value is null, nothing happens, should we convert null to ''?
    const control = this._getControl(name);
    // TODO: Check if control is found
    value = this._getValueForControl(control.GetUIType(), value); // eslint-disable-line no-param-reassign
    // TODO: should we use SetCellValue for list applets?
    this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_FOCUS'), control);
    const ret = this.pm.OnControlEvent(this.consts.get('PHYEVENT_CONTROL_BLUR'), control, value);
    if (!ret) {
      console.log(`Value ${value} was not set for ${control.toString()}`); // eslint-disable-line no-console
      // todo: do we need to put back the old value
    }
    return ret;
  }

  getDynamicLOV(name) {
    const control = this._getControl(name);
    const controlInputName = control.GetInputName();
    this.lov[controlInputName] = {};
    const ps = SiebelApp.S_App.NewPropertySet();
    ps.SetProperty('SWEField', controlInputName);
    ps.SetProperty('SWEJI', false);
    this.applet.InvokeMethod('GetQuickPickInfo', ps);
    // is it possible to get something different than true
    return this.lov[controlInputName];
  }

  getStaticLOV(name) {
    const control = this._getControl(name);
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

  getControlValue(controlUiType, value) { // to be exposed externally
    // todo: datetime
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

  getCurrentRecord() {
    // todo: check if record exists
    return this.pm.Get('GetRecordSet')[this.pm.Get('GetSelection')];
  }

  getCurrentRecordModel(_controls) {
    if (!_controls) {
      return false;
    }
    const arr = Object.keys(_controls);
    const index = this.getSelection();
    const appletControls = this.returnControls();
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
            value: this.getControlValue(control.GetUIType(), obj[controlFieldName]),
            readonly: !this.pm.ExecuteMethod('CanUpdate', controlName),
            isLink: this.pm.ExecuteMethod('CanNavigate', controlName),
            label: control.GetDisplayName(),
            isPostChanges: control.IsPostChanges(),
            required: this._isRequired(controlInputName),
            maxSize: control.GetMaxSize(),
          };
        } else { // no record
          _controls[arr[i]] = { // eslint-disable-line no-param-reassign
            value: '', // is it a right value
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

    return true;
  }

  _getControlInputNameForIdQuery() {
    const appletControls = this.returnControls();
    const arr = Object.keys(appletControls);
    for (let i = 0; i < arr.length; i += 1) {
      const control = appletControls[arr[i]];
      const controlUiType = control.GetUIType();
      if (!this._isSkipControl(controlUiType)) {
        // skipping also JCheckbox
        // todo: do we need to skip also date?
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
    // maybe check if it is already in query mode
    this._newQuery(); // ?

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
    // maybe skip the new query if Object.keys(params).length is 0
    // maybe check if it is already in query mode
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
    const _controls = this.returnControls();
    for (let i = 0; i < arr.length; i += 1) {
      const control = _controls[arr[i]];
      psInput.SetProperty(control.GetInputName(), this._getValueForControl(control.GetUIType(), params[arr[i]]));
    }
    ai.args.push(method);
    ai.args.push(psInput.Clone());

    return this.applet.CallServerApplet(method, psInput, psOutput, ai);
  }

  getFieldToControlsMap(_controls) {
    const ret = {};
    const appletControls = this.returnControls();
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

  drilldown(name) {
    // todo: check isLink of control?
    // name is control name, not field
    // index is not effective, and drilldown anyway happens on last selected record

    // check if it ListApplet?
    if (!this.isListApplet) {
      return false;
    }
    const index = this.getSelection();
    return this.pm.ExecuteMethod('OnDrillDown', name, index);
  }

  gotoView(targetViewName, targetAppletName, id) {
    // todo: get the applet name from the view definition
    const rowId = typeof id === 'undefined' ? this.getRawRecordSet()[this.getSelection()].Id : id;
    let SWECmd = `GotoView&SWEView=${targetViewName}&SWEApplet0=${targetAppletName}`;
    SWECmd += `&SWEBU=1&SWEKeepContext=FALSE&SWERowId0=${rowId}`;
    SWECmd = encodeURI(SWECmd);
    SiebelApp.S_App.GotoView(targetViewName, '', SWECmd, '');
  }

  insertPending() {
    return this.pm.Get('GetBusComp').insertPending;
  }

  showMvgApplet(input) {
    return this._showMvgApplet(input);
  }

  showPickApplet(input) {
    return this._showMvgApplet(input);
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
    // todo : check if it a pick applet
    // todo : check CanInokeMethod
    return this.pm.ExecuteMethod('InvokeMethod', 'PickRecord');
  }

  deleteRecords(cb) {
    // method is not allowed to delete the primary
    //  in this case it returns "Method DeleteRecords is not allowed here" SBL-UIF-00348
    // todo: check canInvokeMethod ??
    // todo: check if it is a Mvg?

    const ret = this.pm.ExecuteMethod('InvokeMethod', 'DeleteRecords');

    if (typeof cb === 'function') {
      cb();
    }

    return ret;
  }

  addRecords(cb) {
    const ret = this.pm.ExecuteMethod('InvokeMethod', 'AddRecords');

    if (typeof cb === 'function') {
      cb();
    }

    return ret;
  }

  closeApplet() {
    const isPopupApplet = typeof this.applet.GetPopupAppletName === 'function';
    const isPickApplet = typeof this.applet.GetPickAppletName === 'function';

    if (isPopupApplet || isPickApplet) {
      // todo : check canInvokeMethod
      return this.pm.ExecuteMethod('InvokeMethod', 'CloseApplet');
    }
    throw new Error('This applet is neither pick nor popup');
  }

  _getActiveControlName() {
    const activeControl = this.pm.Get('GetActiveControl');
    return activeControl ? activeControl.GetName() : '';
  }

  __setPopupVisible(val) {
    return SiebelApp.S_App.GetPopupPM().ExecuteMethod('SetPopupVisible', val);
  }

  __getViewTitle() {
    return this.view.GetTitle(); // how GetViewSummary is different
  }

  __getAppletTitle() {
    return this.applet.GetAppletLabel(); // how GetAppletSummary is different
  }

  __clearQuery() { // todo : could we get it calling the query methods with empty object
    this.pm.ExecuteMethod('InvokeMethod', 'NewQuery', null, false);
    this.pm.ExecuteMethod('InvokeMethod', 'ExecuteQuery', null, false);
  }

  _isInQueryMode() {
    return this.pm.Get('IsInQueryMode');
  }

  _NotifyNewDataWS(name) {
    return this.applet.NotifyNewDataWS(name);
  }
};
