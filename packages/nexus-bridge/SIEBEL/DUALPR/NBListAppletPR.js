/* eslint-disable prefer-rest-params, prettier/prettier */
if (typeof (window.SiebelAppFacade.NBListAppletPR) === "undefined") {

  window.SiebelJS.Namespace("SiebelAppFacade.NBListAppletPR");
  window.define("siebel/custom/NBListAppletPR", ["siebel/custom/NBDefaultListAppletPR"],
    function () {
      window.SiebelAppFacade.NBListAppletPR = (function () {

        function NBListAppletPR(pm) {
          window.SiebelAppFacade.NBListAppletPR.superclass.constructor.apply(this, arguments);
        }

        window.SiebelJS.Extend(NBListAppletPR, window.SiebelAppFacade.NBDefaultListAppletPR);

        NBListAppletPR.prototype.Init = function () {
          this.isOpenUI = true; // Change according to your requirement

          if (this.isOpenUI) {
            window.SiebelAppFacade.NBListAppletPR.superclass.Init.apply(this, arguments);
          } else {
            window.SiebelAppFacade.NBListAppletPR.superclass.NBInit.apply(this, arguments);
            this.removeHtml();
            this.initializeNexus({ convertDates: true });
          }
        }

        NBListAppletPR.prototype.ShowUI = function () {
          if (this.isOpenUI) {
            window.SiebelAppFacade.NBListAppletPR.superclass.ShowUI.apply(this, arguments);
          }
        }

        NBListAppletPR.prototype.BindData = function (bRefresh) {
          if (this.isOpenUI) {
            window.SiebelAppFacade.NBListAppletPR.superclass.BindData.apply(this, arguments);
          }
        }

        NBListAppletPR.prototype.BindEvents = function () {
          if (this.isOpenUI) {
            window.SiebelAppFacade.NBListAppletPR.superclass.BindEvents.apply(this, arguments);
          }
        }

        NBListAppletPR.prototype.EndLife = function () {
          this.destroyNexus();
          window.SiebelAppFacade.NBListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBListAppletPR;
      }()
      );
      return "SiebelAppFacade.NBListAppletPR";
    })
}
