//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopForm&name=ContactFormApplet&userprops=&comments=Yes&logging=No
if (typeof (SiebelAppFacade.NBFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NBFormAppletPR");
  define("siebel/custom/NBFormAppletPR", ["siebel/custom/nbphyrenderer"],
    function () {
      SiebelAppFacade.NBFormAppletPR = (function () {

        function NBFormAppletPR(pm) {
          SiebelAppFacade.NBFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NBFormAppletPR, SiebelAppFacade.NBPhysicalRenderer);
        var appletName;
        var pm;

        NBFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.NBFormAppletPR.superclass.Init2.apply(this, arguments);

          pm = this.GetPM();
          appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
        }

        NBFormAppletPR.prototype.ShowUI = function () {
          // SiebelAppFacade.NBFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        NBFormAppletPR.prototype.BindData = function (bRefresh) {
          // SiebelAppFacade.NBFormAppletPR.superclass.BindData.apply(this, arguments);
        }

        NBFormAppletPR.prototype.BindEvents = function () {
          // SiebelAppFacade.NBFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        NBFormAppletPR.prototype.EndLife = function () {
          if (SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelAppFacade.NBFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBFormAppletPR;
      }()
      );
      return "SiebelAppFacade.NBFormAppletPR";
    })
}
