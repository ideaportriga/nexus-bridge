if (typeof (SiebelAppFacade.ContactTeamMvgAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ContactTeamMvgAppletPR");
  define("siebel/custom/ContactTeamMvgAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.ContactTeamMvgAppletPR = (function () {

        function ContactTeamMvgAppletPR(pm) {
          SiebelAppFacade.ContactTeamMvgAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ContactTeamMvgAppletPR, SiebelAppFacade.JQGridRenderer);
        var appletName;
        var pm;

        ContactTeamMvgAppletPR.prototype.Init = function () {
          SiebelAppFacade.ContactTeamMvgAppletPR.superclass.Init.apply(this, arguments);
          SiebelJS.Log(this.GetPM().Get("GetName") + ": ContactTeamMvgAppletPR:      Init method reached.");

          pm = this.GetPM();
          appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
        }

        ContactTeamMvgAppletPR.prototype.ShowUI = function () {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": ContactTeamMvgAppletPR:      ShowUI method reached.");
          SiebelAppFacade.ContactTeamMvgAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        ContactTeamMvgAppletPR.prototype.BindData = function (bRefresh) {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": ContactTeamMvgAppletPR:      BindData method reached.");
          SiebelAppFacade.ContactTeamMvgAppletPR.superclass.BindData.apply(this, arguments);
        }

        ContactTeamMvgAppletPR.prototype.BindEvents = function () {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": ContactTeamMvgAppletPR:      BindEvents method reached.");
          SiebelAppFacade.ContactTeamMvgAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        ContactTeamMvgAppletPR.prototype.EndLife = function () {
          if (SiebelAppFacade.N19 && SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelJS.Log(this.GetPM().Get("GetName") + ": ContactTeamMvgAppletPR:      EndLife method reached.");
          SiebelAppFacade.ContactTeamMvgAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return ContactTeamMvgAppletPR;
      }()
      );
      return "SiebelAppFacade.ContactTeamMvgAppletPR";
    })
}
