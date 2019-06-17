if (typeof (SiebelAppFacade.NBListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NBListAppletPR");
  define("siebel/custom/NBListAppletPR", ["siebel/custom/NBDefaultListAppletPR"],
    function () {
      SiebelAppFacade.NBListAppletPR = (function () {

        function NBListAppletPR(pm) {
          SiebelAppFacade.NBListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NBListAppletPR, SiebelAppFacade.NBDefaultListAppletPR);

        NBListAppletPR.prototype.Init = function () {
          SiebelAppFacade.NBListAppletPR.superclass.NBInit.apply(this, arguments);
          this.initializeNexus({ convertDates: true });
          this.removeHtml();
        }

        NBListAppletPR.prototype.EndLife = function () {
          this.destroyNexus();
          SiebelAppFacade.NBListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBListAppletPR;
      }()
      );
      return "SiebelAppFacade.NBListAppletPR";
    })
}
