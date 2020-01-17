/* eslint-disable prefer-rest-params, prettier/prettier */
/* global NBPR */
if (typeof (window.SiebelAppFacade.NBDefaultListAppletPR) === "undefined") {

  window.SiebelJS.Namespace("SiebelAppFacade.NBDefaultListAppletPR");
  window.define("siebel/custom/NBDefaultListAppletPR", ["siebel/jqgridrenderer", "siebel/custom/NBPR"],
    function () {
      window.SiebelAppFacade.NBDefaultListAppletPR = (function () {

        function NBDefaultListAppletPR(pm) {
          window.SiebelAppFacade.NBDefaultListAppletPR.superclass.constructor.apply(this, arguments);
        }

        window.SiebelJS.Extend(NBDefaultListAppletPR, window.SiebelAppFacade.JQGridRenderer);

        NBDefaultListAppletPR.prototype.destroyNexus = NBPR.destroyNexus;

        NBDefaultListAppletPR.prototype.initializeNexus = NBPR.initializeNexus;

        NBDefaultListAppletPR.prototype.removeHtml = NBPR.removeHtml;

        // NBDefaultListAppletPR.prototype.setControlValue = NBPR.setControlValue;

        // NBDefaultListAppletPR.prototype.getPhysicalControlValue = NBPR.getPhysicalControlValue;

        NBDefaultListAppletPR.prototype.NBInit = NBPR.init;

        NBDefaultListAppletPR.prototype.Init = function () {
          window.SiebelAppFacade.NBDefaultListAppletPR.superclass.Init.apply(this, arguments);
        }

        NBDefaultListAppletPR.prototype.ShowUI = function () {
          window.SiebelAppFacade.NBDefaultListAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NBDefaultListAppletPR.prototype.BindData = function (bRefresh) {
          window.SiebelAppFacade.NBDefaultListAppletPR.superclass.BindData.apply(this, arguments);
        }

        NBDefaultListAppletPR.prototype.BindEvents = function () {
          window.SiebelAppFacade.NBDefaultListAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NBDefaultListAppletPR.prototype.EndLife = function () {
          window.SiebelAppFacade.NBDefaultListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBDefaultListAppletPR;
      }()
      );
      return "SiebelAppFacade.NBDefaultListAppletPR";
    })
}
