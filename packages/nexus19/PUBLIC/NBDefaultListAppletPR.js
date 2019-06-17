if (typeof (SiebelAppFacade.NBDefaultListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NBDefaultListAppletPR");
  define("siebel/custom/NBDefaultListAppletPR", ["siebel/jqgridrenderer", "siebel/custom/NBPR"],
    function () {
      SiebelAppFacade.NBDefaultListAppletPR = (function () {

        function NBDefaultListAppletPR(pm) {
          SiebelAppFacade.NBDefaultListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NBDefaultListAppletPR, SiebelAppFacade.JQGridRenderer);

        NBDefaultListAppletPR.prototype.destroyNexus = NBPR.destroyNexus;

        NBDefaultListAppletPR.prototype.initializeNexus = NBPR.initializeNexus;

        NBDefaultListAppletPR.prototype.removeHtml = NBPR.removeHtml;

        NBDefaultListAppletPR.prototype.NBInit = NBPR.init;

        NBDefaultListAppletPR.prototype.Init = function () {
          SiebelAppFacade.NBDefaultListAppletPR.superclass.Init.apply(this, arguments);
        }

        NBDefaultListAppletPR.prototype.ShowUI = function () { }

        NBDefaultListAppletPR.prototype.BindData = function (bRefresh) { }

        NBDefaultListAppletPR.prototype.BindEvents = function () { }

        NBDefaultListAppletPR.prototype.EndLife = function () {
          SiebelAppFacade.NBDefaultListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBDefaultListAppletPR;
      }()
      );
      return "SiebelAppFacade.NBDefaultListAppletPR";
    })
}
