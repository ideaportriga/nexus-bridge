if (typeof (SiebelAppFacade.NBAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NBAppletPR");
  define("siebel/custom/NBAppletPR", ["siebel/custom/NBDefaultAppletPR"],
    function () {
      SiebelAppFacade.NBAppletPR = (function () {

        function NBAppletPR(pm) {
          SiebelAppFacade.NBAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NBAppletPR, SiebelAppFacade.NBDefaultAppletPR);

        NBAppletPR.prototype.Init = function () {
          SiebelAppFacade.NBAppletPR.superclass.Init.apply(this, arguments);
          this.initializeNexus({ convertDates: true }); // should be before removing to read the required fields
          this.removeHtml();
        }

        NBAppletPR.prototype.EndLife = function () {
          this.destroyNexus();
          SiebelAppFacade.NBAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBAppletPR;
      }()
      );
      return "SiebelAppFacade.NBAppletPR";
    })
}
