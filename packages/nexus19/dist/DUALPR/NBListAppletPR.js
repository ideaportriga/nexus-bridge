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
          this.isOpenUI = true; // Change according to your requirement

          if (this.isOpenUI) {
            SiebelAppFacade.NBListAppletPR.superclass.Init.apply(this, arguments);
          } else {
            SiebelAppFacade.NBListAppletPR.superclass.NBInit.apply(this, arguments);
            this.removeHtml();
            this.initializeNexus({ convertDates: true });
          }
        }

        NBListAppletPR.prototype.ShowUI = function () {
          if (this.isOpenUI) {
            SiebelAppFacade.NBListAppletPR.superclass.ShowUI.apply(this, arguments);
          }
        }

        NBListAppletPR.prototype.BindData = function (bRefresh) {
          if (this.isOpenUI) {
            SiebelAppFacade.NBListAppletPR.superclass.BindData.apply(this, arguments);
          }
        }

        NBListAppletPR.prototype.BindEvents = function () {
          if (this.isOpenUI) {
            SiebelAppFacade.NBListAppletPR.superclass.BindEvents.apply(this, arguments);
          }
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
