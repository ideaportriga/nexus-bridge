//for now only for form and list applets
if (typeof (SiebelAppFacade.N19Helper) == "undefined") {
  Namespace('SiebelAppFacade.N19Helper');
  SiebelAppFacade.N19Helper = function (settings) {

    "use strict";

    var pm = settings.pm;
    var appletName = pm.Get("GetName");
    var viewName = SiebelApp.S_App.GetActiveView().GetName();
    var applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName];
    var isListApplet = typeof applet.GetListOfColumns === "function";
    var appletId = 's_' + pm.Get('GetFullId') + '_div';
    var required = []; //will be empty for list applet
    var controls = {};

    //populate required
    if (!isListApplet) {
      var appletInputs = document.getElementById(appletId).querySelectorAll('input');
      for (var i = 0; i < appletInputs.length; i++) {
        if (appletInputs[i].attributes['aria-required']) {
          required.push(appletInputs[i].attributes.name.nodeValue)
        }
      }
    }

    console.log('N19Helper Started....', appletName, isListApplet, appletId, required);
    console.log(applet);

    function _returnControls() {
      if (isListApplet) {
        return applet.GetListOfColumns();
      } else {
        return applet.GetControls();
        //the same - ? // return pm.Get('GetControls');
      }
    }

    function _isSkipControl(type) {
      //https://docs.oracle.com/cd/E74890_01/books/ConfigOpenUI/appendix_a_api002.htm
      //maybe we need to exclude more types
      return (type === consts.get('SWE_PST_BUTTON_CTRL')) ||
        (type === consts.get('SWE_CTRL_LINK')) ||
        (type === consts.get('SWE_CTRL_PLAINTEXT')) ||
        (type === 'null'); //GetUiType returns string
    }

    function _isRequired(inputName) {
        //required is empty for list applets
        return required.indexOf(inputName) > -1;
    }

    function _getStaticValues(arr) {

      var ret = [];
      for (var i = 0; i < arr.length; i++) {
        ret.push(arr[i].propArray);
      }
      return ret;
    }

    function getAppletType() {
      if (isListApplet) {
        return 'list';
      } else {
        return 'form';
      }
    }

    function getControls() {
      console.log('get controls started...')
      controls = {};
      var appletControls = _returnControls();
      for (var control in appletControls) {
        var control = appletControls[control];
        var controlUiType = control.GetUIType();
        if (_isSkipControl(controlUiType)) {
          continue;
        }
        var controlName = control.GetName();
        var controlInputName = control.GetInputName();
        var obj = {
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
        }
        //add values to be displayed in the static pick list
        if ('1' === obj.staticPick) {
          obj.staticValue = _getStaticValues(control.GetRadioGroupPropSet().childArray);
        }
        controls[controlName] = obj;
      }
      console.log('returns controls -', controls.length)
      return controls;
    }

    function getRecordSet(){
      console.log('get row set started...');
      return pm.Get("GetRecordSet");
    }

    function navigate(method) {
      if (!pm.ExecuteMethod("CanInvokeMethod", method)) {
        return false;
      } else {
        var ps = SiebelApp.S_App.NewPropertySet();
        ps.SetProperty('SWEApplet', appletName);
        ps.SetProperty('SWEView', viewName);
        var ret = applet.InvokeControlMethod(method, ps, {});
        if (ret) {
          controls = []; //it should be got the new controls
        }
        return ret;
      }
     }

    function nextRecord() {
      return navigate("GotoNextSet");
    }

    function prevRecord() {
      return navigate("GotoPreviousSet");
    }

    function newRecord() {
      //do we need to call getControls internally here ?
    }

    function undoRecord() {

    }

    function writeRecord() {

    }

    function setControlValue (name, value) {
      //check if we have control in it
    }

    return {
      getAppletType: getAppletType,
      getControls: getControls,
      getRecordSet: getRecordSet,
      nextRecord: nextRecord,
      prevRecord: prevRecord,
      newRecord: newRecord,
      undoRecord: undoRecord,
      writeRecord: writeRecord,
      setControlValue: setControlValue,
//      setRecord?
      getDynamicLOV: function() { }
    }

  };
}
