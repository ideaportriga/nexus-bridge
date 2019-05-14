//Regenerate using:http://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopList&name=ContactListApplet&userprops=&comments=Yes&logging=No
if (typeof (SiebelAppFacade.ContactListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ContactListAppletPR");
  define("siebel/custom/ContactListAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.ContactListAppletPR = (function () {

        function ContactListAppletPR(pm) {
          SiebelAppFacade.ContactListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ContactListAppletPR, SiebelAppFacade.JQGridRenderer);
        var appletName;
        var pm;
        var viewName;

        ContactListAppletPR.prototype.Init = function () {
          viewName = SiebelApp.S_App.GetActiveView().GetName();
          // if ('Visible Contact List View' !== viewName) {
            SiebelAppFacade.ContactListAppletPR.superclass.Init.apply(this, arguments);
          // }

          pm = this.GetPM();
          appletName = pm.Get("GetName");
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });

        }

        ContactListAppletPR.prototype.ShowUI = function () {
          // if ('Visible Contact List View' !== viewName) {
            SiebelAppFacade.ContactListAppletPR.superclass.ShowUI.apply(this, arguments);
          // }
        }

        ContactListAppletPR.prototype.BindData = function (bRefresh) {
          // if ('Visible Contact List View' !== viewName) {
            SiebelAppFacade.ContactListAppletPR.superclass.BindData.apply(this, arguments);
          //}
        }

        ContactListAppletPR.prototype.BindEvents = function () {
          // if ('Visible Contact List View' !== viewName) {
            SiebelAppFacade.ContactListAppletPR.superclass.BindEvents.apply(this, arguments);
          // }
        }

        ContactListAppletPR.prototype.EndLife = function () {
          // EndLife is where we perform any required cleanup.
          // Add code here that should happen before default processing
          // if (SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          // }

          // if ('Visible Contact List View' !== viewName) {
            SiebelAppFacade.ContactListAppletPR.superclass.EndLife.apply(this, arguments);
          // }
        }

        return ContactListAppletPR;
      }()
      );
      return "SiebelAppFacade.ContactListAppletPR";
    })
}
