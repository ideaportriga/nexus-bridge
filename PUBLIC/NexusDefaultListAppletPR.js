//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopList&name=NexusDefaultListApplet&userprops=&comments=No&logging=Yes
if (typeof (SiebelAppFacade.NexusDefaultListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NexusDefaultListAppletPR");
  define("siebel/custom/NexusDefaultListAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.NexusDefaultListAppletPR = (function () {

        function NexusDefaultListAppletPR(pm) {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NexusDefaultListAppletPR, SiebelAppFacade.JQGridRenderer);

        NexusDefaultListAppletPR.prototype.Init = function () {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.Init.apply(this, arguments);
          SiebelJS.Log(this.GetPM().Get("GetName") + ": NexusDefaultListAppletPR:      Init method reached.");

          var pm = this.GetPM();
          var appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
        }

        // NexusDefaultListAppletPR.prototype.preInvokeMethod = function (methodName, args, lp, returnStructure) {
        //   SiebelJS.Log(this.GetPM().Get("GetName") + ": NexusDefaultListAppletPR:      preInvokeMethod -  " + methodName);
        // }

        NexusDefaultListAppletPR.prototype.ShowUI = function () {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NexusDefaultListAppletPR.prototype.BindData = function (bRefresh) {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.BindData.apply(this, arguments);
        }

        NexusDefaultListAppletPR.prototype.BindEvents = function () {
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NexusDefaultListAppletPR.prototype.EndLife = function () {
          var appletName = this.GetPM().Get("GetName");
          if (SiebelAppFacade.N19 && SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelAppFacade.NexusDefaultListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NexusDefaultListAppletPR;
      }()
      );
      return "SiebelAppFacade.NexusDefaultListAppletPR";
    })
}
