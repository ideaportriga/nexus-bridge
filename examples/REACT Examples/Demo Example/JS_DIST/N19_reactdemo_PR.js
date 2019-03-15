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
        var rootContainer = document.getElementById("_sweview");
        rootContainer.firstElementChild.style.display = "none";
        rootContainer.title = "";

        if (window.SiebReact) {
          var rootElement = document.createElement("div");
          rootElement.id = containerId;
          rootContainer.appendChild(rootElement);
          SiebReact.mountComponent(containerId);
        }
        // SiebelAppFacade.N19_reactdemo_PR.superclass.ShowUI.apply(this, arguments);
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
          document.getElementById(containerId).remove();
          var rootContainer = document.getElementById("_sweview");
          rootContainer.firstElementChild.style.display = "";
        }

        SiebelAppFacade.N19_reactdemo_PR.superclass.EndLife.apply(
          this,
          arguments
        );
      };

      return N19_reactdemo_PR;
    })();
    return "SiebelAppFacade.N19_reactdemo_PR";
  });
}
