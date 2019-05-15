//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopList&name=ContactListApplet&userprops=&comments=Yes&logging=No
if (typeof (SiebelAppFacade.NBListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NBListAppletPR");
  define("siebel/custom/NBListAppletPR", ["siebel/custom/nbjqgridrenderer"],
    function () {
      SiebelAppFacade.NBListAppletPR = (function () {

        function NBListAppletPR(pm) {
          SiebelAppFacade.NBListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NBListAppletPR, SiebelAppFacade.NBJQGridRenderer);
        var appletName;
        var pm;

        NBListAppletPR.prototype.Init = function () {
          SiebelAppFacade.NBListAppletPR.superclass.Init.apply(this, arguments);

          pm = this.GetPM();
          appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
        }

        NBListAppletPR.prototype.ShowUI = function () {
          // SiebelAppFacade.NBListAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NBListAppletPR.prototype.BindData = function (bRefresh) {
          // SiebelAppFacade.NBListAppletPR.superclass.BindData.apply(this, arguments);
        }

        NBListAppletPR.prototype.BindEvents = function () {
          // SiebelAppFacade.NBListAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NBListAppletPR.prototype.EndLife = function () {
          if (SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelAppFacade.NBListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBListAppletPR;
      }()
      );
      return "SiebelAppFacade.NBListAppletPR";
    })
}
