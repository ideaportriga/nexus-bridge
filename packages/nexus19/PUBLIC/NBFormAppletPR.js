if (typeof (SiebelAppFacade.NBFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NBDefaultFormAppletPR");
  define("siebel/custom/NBFormAppletPR", ["siebel/custom/NBDefaultFormAppletPR"],
    function () {
      SiebelAppFacade.NBFormAppletPR = (function () {

        function NBFormAppletPR(pm) {
          SiebelAppFacade.NBFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NBFormAppletPR, SiebelAppFacade.NBDefaultFormAppletPR);

        NBFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.NBFormAppletPR.superclass.NBInit.apply(this, arguments);
          this.removeHtml();
          this.initializeNexus({convertDates: true});
        }

        NBFormAppletPR.prototype.ShowUI = function () {
          // SiebelAppFacade.NBFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NBFormAppletPR.prototype.BindData = function (bRefresh) {
          // SiebelAppFacade.NBFormAppletPR.superclass.BindData.apply(this, arguments);
        }

        NBFormAppletPR.prototype.BindEvents = function () {
          // SiebelAppFacade.NBFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NBFormAppletPR.prototype.EndLife = function () {
          this.destroyNexus();
          SiebelAppFacade.NBFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBFormAppletPR;
      }()
      );
      return "SiebelAppFacade.NBFormAppletPR";
    })
}
