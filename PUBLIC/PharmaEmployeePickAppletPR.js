if (typeof (SiebelAppFacade.PharmaEmployeePickAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.PharmaEmployeePickAppletPR");
  define("siebel/custom/PharmaEmployeePickAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.PharmaEmployeePickAppletPR = (function () {

        function PharmaEmployeePickAppletPR(pm) {
          SiebelAppFacade.PharmaEmployeePickAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(PharmaEmployeePickAppletPR, SiebelAppFacade.JQGridRenderer);
        var n19helper;
        var appletName;

        PharmaEmployeePickAppletPR.prototype.Init = function () {
          SiebelAppFacade.PharmaEmployeePickAppletPR.superclass.Init.apply(this, arguments);

          var pm = this.GetPM();

          // initialize helper
          appletName = pm.Get('GetName');
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
          n19helper = SiebelAppFacade.N19[appletName];

          var divId = "s_" + pm.Get('GetFullId') + "_div";
          console.log('Full div id', divId);
        }

        PharmaEmployeePickAppletPR.prototype.ShowUI = function () {
          SiebelAppFacade.PharmaEmployeePickAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        PharmaEmployeePickAppletPR.prototype.BindData = function (bRefresh) {
          SiebelAppFacade.PharmaEmployeePickAppletPR.superclass.BindData.apply(this, arguments);
        }

        PharmaEmployeePickAppletPR.prototype.BindEvents = function () {
          SiebelAppFacade.PharmaEmployeePickAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        PharmaEmployeePickAppletPR.prototype.EndLife = function () {
          n19helper = null;
          if (SiebelAppFacade.N19 && SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          }

          SiebelAppFacade.PharmaEmployeePickAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return PharmaEmployeePickAppletPR;
      }()
      );
      return "SiebelAppFacade.PharmaEmployeePickAppletPR";
    })
}
