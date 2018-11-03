if (typeof(SiebelAppFacade.ServiceRequestListAppletPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.ServiceRequestListAppletPR");
 define("siebel/custom/ServiceRequestListAppletPR", ["siebel/jqgridrenderer"],
  function () {
   SiebelAppFacade.ServiceRequestListAppletPR = (function () {

    function ServiceRequestListAppletPR(pm) {
     SiebelAppFacade.ServiceRequestListAppletPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(ServiceRequestListAppletPR, SiebelAppFacade.JQGridRenderer);
    var appletName;
    var pm;

    ServiceRequestListAppletPR.prototype.Init = function () {
     SiebelAppFacade.ServiceRequestListAppletPR.superclass.Init.apply(this, arguments);
     pm = this.GetPM();
     appletName = pm.Get("GetName");
     SiebelJS.Log(appletName + ": ServiceRequestDetailAppletPR:      Init method reached.");

     if (!SiebelAppFacade.N19) {
       SiebelAppFacade.N19 = {};
     }
     SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({pm: pm});
    }

    ServiceRequestListAppletPR.prototype.ShowUI = function () {
     SiebelJS.Log(this.GetPM().Get("GetName")+": ServiceRequestListAppletPR:      ShowUI method reached.");
     SiebelAppFacade.ServiceRequestListAppletPR.superclass.ShowUI.apply(this, arguments);
    }

    ServiceRequestListAppletPR.prototype.BindData = function (bRefresh) {
     SiebelJS.Log(this.GetPM().Get("GetName")+": ServiceRequestListAppletPR:      BindData method reached.");
     SiebelAppFacade.ServiceRequestListAppletPR.superclass.BindData.apply(this, arguments);
    }

    ServiceRequestListAppletPR.prototype.BindEvents = function () {
     SiebelJS.Log(this.GetPM().Get("GetName")+": ServiceRequestListAppletPR:      BindEvents method reached.");
     SiebelAppFacade.ServiceRequestListAppletPR.superclass.BindEvents.apply(this, arguments);
    }

    ServiceRequestListAppletPR.prototype.EndLife = function () {
     SiebelJS.Log(this.GetPM().Get("GetName")+": ServiceRequestListAppletPR:      EndLife method reached.");
     SiebelAppFacade.ServiceRequestListAppletPR.superclass.EndLife.apply(this, arguments);
    }

    return ServiceRequestListAppletPR;
   }()
  );
  return "SiebelAppFacade.ServiceRequestListAppletPR";
 })
}
