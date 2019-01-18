if (typeof (SiebelAppFacade.N19_reactdemo_PR) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.N19_reactdemo_PR");
  define("siebel/custom/N19_reactdemo_PR", ["siebel/phyrenderer", "siebel/custom/react_dist/main"],
    function () {
      SiebelAppFacade.N19_reactdemo_PR = (function () {
        let reactComponent;
        let containerId = 'react_sample';

        function N19_reactdemo_PR(pm) {
          SiebelAppFacade.N19_reactdemo_PR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(N19_reactdemo_PR, SiebelAppFacade.PhysicalRenderer);

        N19_reactdemo_PR.prototype.Init = function () {
          SiebelAppFacade.N19_reactdemo_PR.superclass.Init.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods
          $('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">');
          $('head').append('<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"></meta>');
        }

        N19_reactdemo_PR.prototype.ShowUI = function () {
          addContainer(this.GetPM(), containerId);
          reactComponent = SiebReact.createExample(containerId, this.GetPM());
          // SiebelAppFacade.N19_reactdemo_PR.superclass.ShowUI.apply(this, arguments); // Draws UI, drawing our custom applet only if on List view
        }

        N19_reactdemo_PR.prototype.BindData = function (bRefresh) {
          // SiebelAppFacade.N19_reactdemo_PR.superclass.BindData.apply(this, arguments);
        }

        N19_reactdemo_PR.prototype.BindEvents = function () {
          // SiebelAppFacade.N19_reactdemo_PR.superclass.BindEvents.apply(this, arguments);
        }

        N19_reactdemo_PR.prototype.EndLife = function () {
          // leanup before destroying applet object
          if (reactComponent) {
            SiebReact.unmountComponent(containerId);
            delete window.SiebReact;
            reactComponent = null;
          }
          $("link[href*='https://fonts.googleapis.com/icon']").remove();

          SiebelAppFacade.N19_reactdemo_PR.superclass.EndLife.apply(this, arguments); //Siebel applet cleanup
        }

        return N19_reactdemo_PR;
      }()
      );
      return "SiebelAppFacade.N19_reactdemo_PR";
    })
}

function addContainer(pm, vueId) {
  const siebeAppletId = pm.Get('GetFullId');
  const $applet = $("#" + siebeAppletId);
  const $header = $("#s_" + siebeAppletId + "_div");
  $header.hide();
  $applet.prepend("<div id='" + vueId + "'></div>");
}
