if (typeof SiebelAppFacade.N19_reactdemo_PR === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.N19_reactdemo_PR");
  define("siebel/custom/N19_reactdemo_PR", [
    "siebel/phyrenderer",
    "siebel/custom/N19_reactdemo_PR/build/static/js/main"
  ], function() {
    SiebelAppFacade.N19_reactdemo_PR = (function() {
      let containerId = "react_sample";

      function N19_reactdemo_PR(pm) {
        SiebelAppFacade.N19_reactdemo_PR.superclass.constructor.apply(
          this,
          arguments
        );
      }

      SiebelJS.Extend(N19_reactdemo_PR, SiebelAppFacade.PhysicalRenderer);

      N19_reactdemo_PR.prototype.Init = function() {
        SiebelAppFacade.N19_reactdemo_PR.superclass.Init.apply(this, arguments); // Executing vanilla bindings, required to use SiebelApp/pm methods
        $("head").append(
          '<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"></meta>'
        );

        // we will use simplified BC, therefore safer to disable the new record creation
        this.GetPM().AddMethod(
          "CanInvokeMethod",
          function(method, returnStructure) {
            if ("NewRecord" === method) {
              returnStructure["CancelOperation"] = true;
              returnStructure["ReturnValue"] = "";
            }
          },
          { sequence: true, scope: this }
        );
      };

      N19_reactdemo_PR.prototype.ShowUI = function() {
        addContainer(this.GetPM(), containerId);
        if (window.SiebReact) {
          SiebReact.mountComponent(containerId, this.GetPM().Get("GetName"));
        }
        // SiebelAppFacade.N19_reactdemo_PR.superclass.ShowUI.apply(this, arguments); // Draws UI, drawing our custom applet only if on List view
      };

      N19_reactdemo_PR.prototype.BindData = function(bRefresh) {
        // SiebelAppFacade.N19_reactdemo_PR.superclass.BindData.apply(this, arguments);
      };

      N19_reactdemo_PR.prototype.BindEvents = function() {
        // SiebelAppFacade.N19_reactdemo_PR.superclass.BindEvents.apply(this, arguments);
      };

      N19_reactdemo_PR.prototype.EndLife = function() {
        // cleanup before destroying applet object
        if (window.SiebReact) {
          SiebReact.unmountComponent(containerId);
        }
        removeContainer(this.GetPM(), containerId);
        $("link[href*='https://fonts.googleapis.com/icon']").remove();

        SiebelAppFacade.N19_reactdemo_PR.superclass.EndLife.apply(
          this,
          arguments
        ); // Siebel applet cleanup
      };

      return N19_reactdemo_PR;
    })();
    return "SiebelAppFacade.N19_reactdemo_PR";
  });
}

function addContainer(pm, appId) {
  const siebeAppletId = pm.Get("GetFullId");
  const $applet = $("#" + siebeAppletId);
  const $header = $("#s_" + siebeAppletId + "_div");
  $header.hide();
  $applet.prepend("<div id='" + appId + "'></div>");
}

function removeContainer(pm, appId) {
  const siebeAppletId = pm.Get("GetFullId");
  const $header = $("#s_" + siebeAppletId + "_div");
  $header.show();
  $("#" + appId).remove();
}
