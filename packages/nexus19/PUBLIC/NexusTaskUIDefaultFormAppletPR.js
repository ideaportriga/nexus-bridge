if (typeof (SiebelAppFacade.NexusDefaultFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NexusDefaultFormAppletPR");
  define("siebel/custom/NexusTaskUIDefaultFormAppletPR", ["siebel/phyrenderer"],
    function () {
      SiebelAppFacade.NexusTaskUIDefaultFormAppletPR = (function () {

        function NexusTaskUIDefaultFormAppletPR(pm) {
          SiebelAppFacade.NexusTaskUIDefaultFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NexusTaskUIDefaultFormAppletPR, SiebelAppFacade.PhysicalRenderer);

        NexusTaskUIDefaultFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.NexusTaskUIDefaultFormAppletPR.superclass.Init.apply(this, arguments);

          // initialize the instance of N19 helper
          var pm = this.GetPM();
          var appletName = pm.Get('GetName');
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });

          //hide the server rendered html, better to remove, but not now
          var divId = "s_" + pm.Get('GetFullId') + "_div";
          if (document.querySelector('#' + divId + ' form')) {
            document.querySelector('#' + divId + ' form').style.display = 'none';
          }
        }

        NexusTaskUIDefaultFormAppletPR.prototype.ShowUI = function () {
          SiebelAppFacade.NexusTaskUIDefaultFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NexusTaskUIDefaultFormAppletPR.prototype.BindData = function (bRefresh) {
          SiebelAppFacade.NexusTaskUIDefaultFormAppletPR.superclass.BindData.apply(this, arguments);
        }

        NexusTaskUIDefaultFormAppletPR.prototype.BindEvents = function () {
          SiebelAppFacade.NexusTaskUIDefaultFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NexusTaskUIDefaultFormAppletPR.prototype.EndLife = function () {
          var appletName = this.GetPM().Get("GetName");
          if (SiebelAppFacade.N19 && SiebelAppFacade.N19[appletName]) {
            SiebelAppFacade.N19[appletName] = null;
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelAppFacade.NexusTaskUIDefaultFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NexusTaskUIDefaultFormAppletPR;
      }()
      );
      return "SiebelAppFacade.NexusTaskUIDefaultFormAppletPR";
    })
}
