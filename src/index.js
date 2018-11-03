// for now only for form and list applets
if (typeof (SiebelAppFacade.N19Helper) === 'undefined') {
  Namespace('SiebelAppFacade.N19Helper');
  SiebelAppFacade.N19Helper = function (settings) { // eslint-disable-line func-names
    const { pm } = settings;
    const appletName = pm.Get('GetName');
    const view = SiebelApp.S_App.GetActiveView();
    const viewName = view.GetName();
    const applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName];
    const isListApplet = typeof applet.GetListOfColumns === 'function';
    const appletId = `s_${pm.Get('GetFullId')}_div`;
    const required = []; // will be empty for list applet
    let controls = {};
    let lov = [];

    // populate required
    if (!isListApplet) {
      const appletInputs = document.getElementById(appletId).querySelectorAll('input');
      for (let i = 0; i < appletInputs.length; i += 1) {
        if (appletInputs[i].attributes['aria-required']) {
          required.push(appletInputs[i].attributes.name.nodeValue);
        }
      }
    }

    // listener to get dynamic LOVs
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_GENERIC'), (propSet) => {
      const type = propSet.GetProperty(consts.get('SWE_PROP_NOTI_TYPE'));
      if (type === 'GetQuickPickInfo') {
        // console.log(propSet); // eslint-disable-line no-console
        const arr = [];
        CCFMiscUtil_StringToArray(propSet.GetProperty(consts.get('SWE_PROP_ARGS_ARRAY')), arr);
        // console.log(arr); // eslint-disable-line no-console
        // if (viewName == arr[1] && appletName == arr[2]) {
        //   if (control.GetInputName() == arr[3]) {
        lov = arr;
      }
    });

    // eslint-disable-next-line no-console
    console.log('N19Helper Started....', appletName, isListApplet, appletId, required);

    function _returnControls() {
      if (isListApplet) {
        return applet.GetListOfColumns();
      }
      return applet.GetControls();
      // the same - ? // return pm.Get('GetControls');
    }

    function _isSkipControl(type) {
      // https://docs.oracle.com/cd/E74890_01/books/ConfigOpenUI/appendix_a_api002.htm
      // maybe we need to exclude more types
      return (type === consts.get('SWE_PST_BUTTON_CTRL'))
        || (type === consts.get('SWE_CTRL_LINK'))
        || (type === consts.get('SWE_CTRL_PLAINTEXT'))
        || (type === 'null'); // GetUiType returns string
    }

    function _isRequired(inputName) {
      // required is empty for list applets
      return required.indexOf(inputName) > -1;
    }

    function _getStaticLOV(arr) {
      const ret = [];
      for (let i = 0; i < arr.length; i += 1) {
        ret.push(arr[i].propArray);
      }
      return ret;
    }

    function getAppletType() {
      if (isListApplet) {
        return 'list';
      }
      return 'form';
    }

    function getControls() {
      console.log('get controls started...'); // eslint-disable-line no-console
      controls = {};
      const appletControls = _returnControls();
      const arr = Object.keys(appletControls);
      for (let i = 0; i < arr.length; i += 1) {
        const control = appletControls[arr[i]];
        const controlUiType = control.GetUIType();
        if (_isSkipControl(controlUiType)) {
          continue; // eslint-disable-line no-continue
        }
        const controlName = control.GetName();
        const controlInputName = control.GetInputName();
        const obj = {
          name: controlName,
          label: control.GetDisplayName(),
          uiType: controlUiType,
          required: _isRequired(controlInputName),
          boundedPick: control.IsBoundedPick(),
          staticPick: control.IsStaticBounded(),
          pickApplet: control.GetPickApplet(),
          inputName: controlInputName,
          isPostChanges: control.IsPostChanges(),
          readOnly: pm.ExecuteMethod('CanUpdate', controlName),
          maxSize: control.GetMaxSize(),
          maxChars: control.GetMaxChars(),
          fieldName: control.GetFieldName(),
        };
        // add values to be displayed in the static pick list
        if ('1' === obj.staticPick) {
          obj.staticValue = _getStaticLOV(control.GetRadioGroupPropSet().childArray);
        }
        controls[controlName] = obj;
      }
      console.log('returns controls -', controls); // eslint-disable-line no-console
      return controls;
    }

    function _getControlByName(name) {
      // check if controls are not empty
      if (Object.keys(controls).length === 0) {
        controls = getControls();
      }
      const control = controls[name];
      if (!control) {
        throw new Error(`control is not found - ${name}`);
      }
      console.log(control); // eslint-disable-line no-console
      return control;
    }

    function getRecordSet() {
      return pm.Get('GetRecordSet');
    }

    function _navigate(method) {
      if (!pm.ExecuteMethod('CanInvokeMethod', method)) {
        return false;
      }
      const ps = SiebelApp.S_App.NewPropertySet();
      ps.SetProperty('SWEApplet', appletName);
      ps.SetProperty('SWEView', viewName);
      const ret = applet.InvokeControlMethod(method, ps, {});
      if (ret) {
        // if navigation successfull, we need to get the new controls
        controls = {};
      }
      return ret;
    }

    function nextRecord() {
      return _navigate(isListApplet ? 'GotoNext' : 'GotoNextSet');
    }

    function nextRecordSet() {
      if (!isListApplet) {
        return false;
      }
      return _navigate('GotoNextSet');
    }

    function prevRecord() {
      if (isListApplet) {
        // todo: call position on row
        return false;
      }
      return _navigate(isListApplet ? 'GotoPrevios' : 'GotoPreviousSet');
    }

    function prevRecordSet() {
      if (!isListApplet) {
        return false;
      }
      return _navigate('GotoPreviousSet');
    }

    function positionOnRow() {
      if (!isListApplet) {
        return false;
      }
      return true;
      // todo
    }

    function _invokeCommandManager(cmd, f) {
      view.SetActiveAppletInternal(view.GetAppletMap()[appletName]);
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
      // todo: DEBUG DO WE ALWAYS NEED TRUE
      SiebelApp.CommandManager.GetInstance().InvokeCommand.call(null, cmd, true, ai);
    }

    function newRecord(cb) {
      _invokeCommandManager('*Browser Applet* *NewRecord* * ', cb);
    }

    function undoRecord(cb) {
      _invokeCommandManager('*Browser Applet* *UndoRecord* * ', cb);
    }

    function writeRecord(cb) {
      _invokeCommandManager('*Browser Applet* *WriteRecord* * ', cb);
    }

    function setControlValue(name, value) {
      const control = _getControlByName(name);
      if (consts.get('SWE_CTRL_CHECKBOX') === control.uiType) {
        // convert true/false => Y/N
        // do we want to support null
        value = value ? 'Y' : 'N'; // eslint-disable-line no-param-reassign
      }
      // TODO: do we need to convert the dates?
      pm.OnControlEvent(consts.get('PHYEVENT_CONTROL_FOCUS'), control);
      const ret = pm.OnControlEvent(consts.get('PHYEVENT_CONTROL_BLUR'), control, value);
      if (!ret) {
        console.log('something went wrong'); // eslint-disable-line no-console
        // putting back the old value
      }
      return ret;
    }

    function getDynamicLOV(name) {
      const control = _getControlByName(name);
      const ps = SiebelApp.S_App.NewPropertySet();
      ps.SetProperty('SWEField', control.inputName);
      ps.SetProperty('SWEJI', false);
      const ret = applet.InvokeMethod('GetQuickPickInfo', ps);
      console.log(ret); // eslint-disable-line no-console
      return lov;
    }

    return {
      getAppletType,
      getControls,
      getRecordSet,
      nextRecord,
      nextRecordSet,
      prevRecord,
      prevRecordSet,
      positionOnRow,
      newRecord,
      undoRecord,
      writeRecord,
      setControlValue,
      getDynamicLOV,
    };
  };
}