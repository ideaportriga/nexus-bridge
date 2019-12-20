/* eslint-disable prefer-rest-params, prettier/prettier */
/* global NBPR */
if (typeof (window.SiebelAppFacade.NBDefaultFormAppletPR) === "undefined") {

  window.SiebelJS.Namespace("SiebelAppFacade.NBDefaultFormAppletPR");
  window.define("siebel/custom/NBDefaultFormAppletPR", ["siebel/phyrenderer", "siebel/custom/NBPR"],
    function () {
      window.SiebelAppFacade.NBDefaultFormAppletPR = (function () {

        function NBDefaultFormAppletPR(pm) {
          window.SiebelAppFacade.NBDefaultFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        window.SiebelJS.Extend(NBDefaultFormAppletPR, window.SiebelAppFacade.PhysicalRenderer);

        NBDefaultFormAppletPR.prototype.destroyNexus = NBPR.destroyNexus;

        NBDefaultFormAppletPR.prototype.initializeNexus = NBPR.initializeNexus;

        NBDefaultFormAppletPR.prototype.removeHtml = NBPR.removeHtml;

        NBDefaultFormAppletPR.prototype.NBSetControlValue = NBPR.setControlValue;

        NBDefaultFormAppletPR.prototype.NBGetPhysicalControlValue = NBPR.getPhysicalControlValue;

        NBDefaultFormAppletPR.prototype.NBInit = NBPR.init;

        NBDefaultFormAppletPR.prototype.Init = function () {
          window.SiebelAppFacade.NBDefaultFormAppletPR.superclass.Init.apply(this, arguments);
        }

        NBDefaultFormAppletPR.prototype.ShowUI = function () {
          window.SiebelAppFacade.NBDefaultFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NBDefaultFormAppletPR.prototype.BindData = function (bRefresh) {
          window.SiebelAppFacade.NBDefaultFormAppletPR.superclass.BindData.apply(this, arguments);
        }

        NBDefaultFormAppletPR.prototype.BindEvents = function () {
          window.SiebelAppFacade.NBDefaultFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NBDefaultFormAppletPR.prototype.EndLife = function () {
          window.SiebelAppFacade.NBDefaultFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBDefaultFormAppletPR;
      }()
      );
      return "SiebelAppFacade.NBDefaultFormAppletPR";
    })
}
