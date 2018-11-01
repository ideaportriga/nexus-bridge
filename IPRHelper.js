if (typeof (SiebelAppFacade.IPRHelper) == "undefined") {
  Namespace('SiebelAppFacade.IPRHelper');
  SiebelAppFacade.IPRHelper = function (settings) {
    console.log('IPR Helper Started....');
    console.log(settings);

    return {
      getControls: function(pm) {
        console.log('get controls started...')
      },
      updateControlValue: function(controlName) {
        console.log('update control value started...')
      },
      nextRecord: function(pm) {

      },
      prevRecord: function(pm) {

      },
      saveRecord: function() {

      },
      newRecord: function() {

      },
      getDynamicLOV: function() {

      }
    }

  };
}
