if (typeof (SiebelAppFacade.IPRHelper) == "undefined") {
  Namespace('SiebelAppFacade.IPRHelper');
  SiebelAppFacade.IPRHelper = function () {
    console.log('IPR Helper Started....')
    return {
      getControls: function() {
        console.log('get controls started...')
      }
    }

  }();
}
