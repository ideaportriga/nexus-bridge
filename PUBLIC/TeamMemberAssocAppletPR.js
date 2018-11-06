if (typeof (SiebelAppFacade.TeamMemberAssocAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.TeamMemberAssocAppletPR");
  define("siebel/custom/TeamMemberAssocAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.TeamMemberAssocAppletPR = (function () {

        function TeamMemberAssocAppletPR(pm) {
          SiebelAppFacade.TeamMemberAssocAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(TeamMemberAssocAppletPR, SiebelAppFacade.JQGridRenderer);
        var appletName;
        var pm;

        TeamMemberAssocAppletPR.prototype.Init = function () {
          SiebelAppFacade.TeamMemberAssocAppletPR.superclass.Init.apply(this, arguments);
          SiebelJS.Log(this.GetPM().Get("GetName") + ": TeamMemberAssocAppletPR:      Init method reached.");

          pm = this.GetPM();
          appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
        }

        TeamMemberAssocAppletPR.prototype.ShowUI = function () {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": TeamMemberAssocAppletPR:      ShowUI method reached.");
          SiebelAppFacade.TeamMemberAssocAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        TeamMemberAssocAppletPR.prototype.BindData = function (bRefresh) {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": TeamMemberAssocAppletPR:      BindData method reached.");
          SiebelAppFacade.TeamMemberAssocAppletPR.superclass.BindData.apply(this, arguments);
        }

        TeamMemberAssocAppletPR.prototype.BindEvents = function () {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": TeamMemberAssocAppletPR:      BindEvents method reached.");
          SiebelAppFacade.TeamMemberAssocAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        TeamMemberAssocAppletPR.prototype.EndLife = function () {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": TeamMemberAssocAppletPR:      EndLife method reached.");
          SiebelAppFacade.TeamMemberAssocAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return TeamMemberAssocAppletPR;
      }()
      );
      return "SiebelAppFacade.TeamMemberAssocAppletPR";
    })
}
