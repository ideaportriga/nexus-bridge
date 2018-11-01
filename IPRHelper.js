if (typeof (SiebelAppFacade.N19Helper) == "undefined") {
  Namespace('SiebelAppFacade.N19Helper');
  SiebelAppFacade.N19Helper = function (settings) {
    console.log('N19Helper Started....');

    var pm = settings.pm;
    var appletName = pm.Get("GetName");
    var applet = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName];
    var isListApplet = typeof applet.GetListOfColumns === "function";

    function getControls() {
      console.log('get controls started...')
      var ret = [];
      var appletControls = pm.Get('GetControls');
      for (var control in appletControls) {
        var control = appletControls[control];
        var controlName = control.GetName();
        console.log(control);
        //todo: control value
        //todo: required
        var obj = {
          name: controlName,
          type: control.GetControlType(),
          displayName: control.GetDisplayName(),
          uiType: control.GetUIType(),
          boundedPick: control.IsBoundedPick(),
          inputName: control.GetInputName(),
          isPostChanges: control.IsPostChanges(),
          readOnly: pm.ExecuteMethod('CanUpdate', controlName)
        }
        //
        ret.push(obj);
      }
      return ret;
    }

    return {
      getControls: getControls,
      updateControlValue: function(controlName) {
        console.log('update control value started...')
      },
//      setRecord?
      nextRecord: function() { },
      prevRecord: function() { },
      saveRecord: function() { },
      newRecord: function() { },
      getDynamicLOV: function() { }
    }

  };
}
