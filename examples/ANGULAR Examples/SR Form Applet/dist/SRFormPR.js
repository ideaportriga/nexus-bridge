if (typeof (SiebelAppFacade.SRFormPR) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.SRFormPR");
  define("siebel/custom/SRFormPR", [
    "siebel/custom/NBDefaultFormAppletPR",
    "siebel/custom/runtime",
    "siebel/custom/polyfills",
    "siebel/custom/styles",
    "siebel/custom/vendor",
    "siebel/custom/main"
  ],
    function () {
      SiebelAppFacade.SRFormPR = (function () {
        var containerId = 'angular_example';

        function SRFormPR() {
          SiebelAppFacade.SRFormPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(SRFormPR, SiebelAppFacade.NBDefaultFormAppletPR);

        SRFormPR.prototype.Init = function () {
          //Executing vanilla bindings, required to use SiebelApp/pm methods
          SiebelAppFacade.SRFormPR.superclass.NBInit.apply(this, arguments);
        }

        SRFormPR.prototype.ShowUI = function () {
          var appletId = this.GetPM().Get('GetFullId');
          var $applet = window.$('#'+ appletId);
          $applet.before("<div id=" + containerId + "></div>");
          SiebelNG.createExample(containerId, this.GetPM());
          $applet.remove();
        }

        SRFormPR.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.SRFormPR.superclass.BindData.apply(this, arguments);
        }

        SRFormPR.prototype.BindEvents = function () {
          //SiebelAppFacade.SRFormPR.superclass.BindEvents.apply(this, arguments);
        }

        SRFormPR.prototype.EndLife = function () {
          //Cleanup before destroying applet object
          SiebelNG.unmountComponent(containerId);
          SiebelAppFacade.SRFormPR.superclass.EndLife.apply(this, arguments); //Siebel applet cleanup
        }

        return SRFormPR;
      }());
      return "SiebelAppFacade.SRFormPR";
    })
}
