if (typeof (SiebelAppFacade.NBFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NBFormAppletPR");
  define("siebel/custom/NBFormAppletPR", ["siebel/custom/NBDefaultFormAppletPR"],
    function () {
      SiebelAppFacade.NBFormAppletPR = (function () {

        function NBFormAppletPR(pm) {
          SiebelAppFacade.NBFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NBFormAppletPR, SiebelAppFacade.NBDefaultFormAppletPR);

        NBFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.NBFormAppletPR.superclass.NBInit.apply(this, arguments);
          this.initializeNexus({ convertDates: true }); // should be before removing to read the required fields
          this.removeHtml();
        }

        NBFormAppletPR.prototype.ShowUI = function () { }

        NBFormAppletPR.prototype.BindData = function (bRefresh) { }

        NBFormAppletPR.prototype.BindEvents = function () { }

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
