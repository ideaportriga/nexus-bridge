if (typeof (SiebelAppFacade.ServiceRequestDetailAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ServiceRequestDetailAppletPR");
  define("siebel/custom/ServiceRequestDetailAppletPR", ["siebel/phyrenderer"],
    function () {
      SiebelAppFacade.ServiceRequestDetailAppletPR = (function () {

        function ServiceRequestDetailAppletPR(pm) {
          SiebelAppFacade.ServiceRequestDetailAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ServiceRequestDetailAppletPR, SiebelAppFacade.PhysicalRenderer);
        var viewName = 'Service Request Detail View';
        var activeViewName;
        var appletName;
        var pm;

        ServiceRequestDetailAppletPR.prototype.Init = function () {
          SiebelAppFacade.ServiceRequestDetailAppletPR.superclass.Init.apply(this, arguments);
          pm = this.GetPM();
          appletName = pm.Get("GetName");
          activeViewName = SiebelApp.S_App.GetActiveView().GetName();
          SiebelJS.Log(appletName + ": ServiceRequestDetailAppletPR:      Init method reached.");

          if (!SiebelAppFacade.N19) {
            SiebelAppFacade.N19 = {};
          }
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({pm: pm});
        }

        ServiceRequestDetailAppletPR.prototype.ShowUI = function () {
          SiebelJS.Log(appletName + ": ServiceRequestDetailAppletPR:      ShowUI method reached.");
          if (viewName !== activeViewName) {
            SiebelAppFacade.ServiceRequestDetailAppletPR.superclass.ShowUI.apply(this, arguments);
            return;
          }
          var divId = "s_" + pm.Get("GetFullId") + "_div";
          $('#' + divId).hide();
        }

        ServiceRequestDetailAppletPR.prototype.BindData = function (bRefresh) {
          SiebelJS.Log(appletName + ": ServiceRequestDetailAppletPR:      BindData method reached.");
          if (viewName !== activeViewName) {
            SiebelAppFacade.ServiceRequestDetailAppletPR.superclass.BindData.apply(this, arguments);
            return;
          }
        }

        ServiceRequestDetailAppletPR.prototype.BindEvents = function () {
          SiebelJS.Log(appletName + ": ServiceRequestDetailAppletPR:      BindEvents method reached.");
          if (viewName !== activeViewName) {
            SiebelAppFacade.ServiceRequestDetailAppletPR.superclass.BindEvents.apply(this, arguments);
            return;
          }
        }

        ServiceRequestDetailAppletPR.prototype.EndLife = function () {
          SiebelJS.Log(appletName + ": ServiceRequestDetailAppletPR:      EndLife method reached.");
          SiebelAppFacade.ServiceRequestDetailAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return ServiceRequestDetailAppletPR;
      }()
      );
      return "SiebelAppFacade.ServiceRequestDetailAppletPR";
    })
}
