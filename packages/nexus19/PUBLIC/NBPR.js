
var NBPR = (function () {

  function initializeNexus(options) {
    var pm = this.GetPM();
    var appletName = pm.Get('GetName');
    SiebelAppFacade.NB = SiebelAppFacade.NB || {};
    SiebelAppFacade.NB[appletName] =
      new SiebelAppFacade.N19Helper(Object.assign({pm: pm}, options));
    return SiebelAppFacade.NB[appletName];
  }

  function destroyNexus() {
    var appletName = this.GetPM().Get('GetName');
    if (SiebelAppFacade.NB && SiebelAppFacade.NB[appletName]) {
      SiebelAppFacade.NB[appletName] = null;
      delete SiebelAppFacade.NB[appletName];
    }
  }

  function removeHtml() {
    var divId = "s_" + this.GetPM().Get('GetFullId') + "_div";
    var el = document.querySelector('#' + divId + ' > *');
    el.parentNode.removeChild(el);
  }

  function setControlValue(control, value) {
    var pm = this.GetPM();
    var obj = pm.Get('n19internal');
    obj[control.GetName()] = value;
    pm.AddProperty('n19internal', obj)
  }

  function getPhysicalControlValue (control) {
    var pm = this.GetPM();
    pm.AddProperty('PhysicalCtrlVal', '');
    if (control) {
      var val = pm.Get('n19internal')[control.GetName()];
      pm.AddProperty('PhysicalCtrlVal', val);
    }
  }

  function init () {
    var pm = this.GetPM();
    pm.AddProperty('n19internal', {});
    pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), function(){
      var obj = {};
      var selection = pm.Get('GetSelection');
      if (selection > -1) {
        var controls = pm.Get('GetControls');
        var recordSet = pm.Get('GetRecordSet')[selection];
        Object.keys(controls).forEach(function(controlName) {
          //TODO: should we use formatted field value?
          var fieldName = controls[controlName].GetFieldName();
          if ('' !== fieldName) {
            obj[controlName] = recordSet[fieldName];
          }
        });
      }
      pm.AddProperty('n19internal', obj);
    });
    this.AttachPMBinding("FieldChange", setControlValue);
    this.AttachPMBinding("GetPhysicalControlValue", getPhysicalControlValue);
  }

  return {
    initializeNexus: initializeNexus,
    destroyNexus: destroyNexus,
    removeHtml: removeHtml,
    setControlValue: setControlValue,
    getPhysicalControlValue: getPhysicalControlValue,
    init: init
  };
}());
