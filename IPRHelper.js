if (typeof (SiebelAppFacade.IPRHelper) == "undefined") {
  Namespace('SiebelAppFacade.IPRHelper');
  SiebelAppFacade.IPRHelper = function () {
    console.log('IPR Helper Started....')
    return {
      a: function() {alert('b')}
    }

  }();
}
