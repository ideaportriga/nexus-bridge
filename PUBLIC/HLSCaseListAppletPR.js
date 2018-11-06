//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopList&name=HLSCaseListApplet&userprops=&comments=No&logging=Yes
if (typeof (SiebelAppFacade.HLSCaseListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.HLSCaseListAppletPR");
  define("siebel/custom/HLSCaseListAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.HLSCaseListAppletPR = (function () {

        function HLSCaseListAppletPR(pm) {
          SiebelAppFacade.HLSCaseListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(HLSCaseListAppletPR, SiebelAppFacade.JQGridRenderer);
        var appletName;
        var pm;

        HLSCaseListAppletPR.prototype.Init = function () {
          SiebelAppFacade.HLSCaseListAppletPR.superclass.Init.apply(this, arguments);
          SiebelJS.Log(this.GetPM().Get("GetName") + ": HLSCaseListAppletPR:      Init method reached.");

          pm = this.GetPM();
          appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
        }

        HLSCaseListAppletPR.prototype.ShowUI = function () {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": HLSCaseListAppletPR:      ShowUI method reached.");
          SiebelAppFacade.HLSCaseListAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        HLSCaseListAppletPR.prototype.BindData = function (bRefresh) {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": HLSCaseListAppletPR:      BindData method reached.");
          SiebelAppFacade.HLSCaseListAppletPR.superclass.BindData.apply(this, arguments);
        }

        HLSCaseListAppletPR.prototype.BindEvents = function () {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": HLSCaseListAppletPR:      BindEvents method reached.");
          SiebelAppFacade.HLSCaseListAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        HLSCaseListAppletPR.prototype.EndLife = function () {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": HLSCaseListAppletPR:      EndLife method reached.");
          SiebelAppFacade.HLSCaseListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return HLSCaseListAppletPR;
      }()
      );
      return "SiebelAppFacade.HLSCaseListAppletPR";
    })
}
