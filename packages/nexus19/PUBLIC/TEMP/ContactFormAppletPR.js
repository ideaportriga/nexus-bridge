//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopForm&name=ContactFormApplet&userprops=&comments=Yes&logging=No
if (typeof (SiebelAppFacade.ContactFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ContactFormAppletPR");
  define("siebel/custom/ContactFormAppletPR", ["siebel/custom/iprphyrenderer"],
    function () {
      SiebelAppFacade.ContactFormAppletPR = (function () {

        function ContactFormAppletPR(pm) {
          SiebelAppFacade.ContactFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ContactFormAppletPR, SiebelAppFacade.IPRPhysicalRenderer);
        var appletName;
        var pm;
        var viewName;

        ContactFormAppletPR.prototype.Init = function () {
          viewName = SiebelApp.S_App.GetActiveView().GetName();

          // if ('Visible Contact List View' !== viewName) {
          SiebelAppFacade.ContactFormAppletPR.superclass.Init.apply(this, arguments);
          // }

          pm = this.GetPM();
          appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });

        }

        ContactFormAppletPR.prototype.ShowUI = function () {
          if ('Visible Contact List View' !== viewName) {
            SiebelAppFacade.ContactFormAppletPR.superclass.ShowUI.apply(this, arguments);
          }
        }

        ContactFormAppletPR.prototype.BindData = function (bRefresh) {
          if ('Visible Contact List View' !== viewName) {
            SiebelAppFacade.ContactFormAppletPR.superclass.BindData.apply(this, arguments);
          }
        }

        ContactFormAppletPR.prototype.BindEvents = function () {
          if ('Visible Contact List View' !== viewName) {
            SiebelAppFacade.ContactFormAppletPR.superclass.BindEvents.apply(this, arguments);
          }
        }

        ContactFormAppletPR.prototype.EndLife = function () {
          if (SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelAppFacade.ContactFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return ContactFormAppletPR;
      }()
      );
      return "SiebelAppFacade.ContactFormAppletPR";
    })
}
