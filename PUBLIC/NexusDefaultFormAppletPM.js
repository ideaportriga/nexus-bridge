if (typeof (SiebelAppFacade.NexusDefaultFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NexusDefaultFormAppletPR");
  define("siebel/custom/NexusDefaultFormAppletPR", ["siebel/phyrenderer"],
    function () {
      SiebelAppFacade.NexusDefaultFormAppletPR = (function () {

        function NexusDefaultFormAppletPR(pm) {
          SiebelAppFacade.NexusDefaultFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NexusDefaultFormAppletPR, SiebelAppFacade.PhysicalRenderer);

        NexusDefaultFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.NexusDefaultFormAppletPR.superclass.Init.apply(this, arguments);

          // initialize the instance of N19 helper
          var pm = this.GetPM();
          var appletName = pm.Get('GetName');
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });

          //hide the server rendered html, better to remove, but not now
          divId = "s_" + pm.Get('GetFullId') + "_div";
          document.querySelector('#' + divId + ' form').style.display = 'none';
        }

        NexusDefaultFormAppletPR.prototype.ShowUI = function () {
          // SiebelAppFacade.NexusDefaultFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NexusDefaultFormAppletPR.prototype.BindData = function (bRefresh) {
          // SiebelAppFacade.NexusDefaultFormAppletPR.superclass.BindData.apply(this, arguments);
        }

        NexusDefaultFormAppletPR.prototype.BindEvents = function () {
          // SiebelAppFacade.NexusDefaultFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NexusDefaultFormAppletPR.prototype.EndLife = function () {
          var appletName = this.GetPM().Get("GetName");
          if (SiebelAppFacade.N19 && SiebelAppFacade.N19[appletName]) {
            SiebelAppFacade.N19[appletName] = null;
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelAppFacade.NexusDefaultFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NexusDefaultFormAppletPR;
      }()
      );
      return "SiebelAppFacade.NexusDefaultFormAppletPR";
    })
}
