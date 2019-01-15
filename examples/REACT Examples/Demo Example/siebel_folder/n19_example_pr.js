if (typeof (SiebelAppFacade.n19_example_pr) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.n19_example_pr");
  define("siebel/custom/example_react/n19_example_pr", [
    "siebel/phyrenderer",
    "siebel/custom/example_react/react_dist/main"
  ],
    function (_, ReactAPI) {
      SiebelAppFacade.n19_example_pr = (function () {
        var reactComponent, containerId = 'react_sample';

        function n19_example_pr(pm) {
          SiebelAppFacade.n19_example_pr.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(n19_example_pr, SiebelAppFacade.PhysicalRenderer);

        n19_example_pr.prototype.Init = function () {
          console.log(ReactAPI);
          SiebelAppFacade.n19_example_pr.superclass.Init.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods
        }

        n19_example_pr.prototype.ShowUI = function () {
          if (SiebelApp.S_App.GetActiveView().GetName() === "Account List View") { //Loading our applet only on List view
            addContainer(this.GetPM(), containerId);
            reactComponent = SiebReact.createExample(containerId, this.GetPM());
          } else {
            SiebelAppFacade.n19_example_pr.superclass.ShowUI.apply(this, arguments); // Draws UI, drawing our custom applet only if on List view
          }
        }

        n19_example_pr.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.n19_example_pr.superclass.BindData.apply(this, arguments);
        }

        n19_example_pr.prototype.BindEvents = function () {
          //SiebelAppFacade.n19_example_pr.superclass.BindEvents.apply(this, arguments);
        }

        n19_example_pr.prototype.EndLife = function () {
          //Cleanup before destroying applet object
          if (reactComponent) {
            SiebReact.unmountComponent(containerId);
            reactComponent = null;
          }

          SiebelAppFacade.n19_example_pr.superclass.EndLife.apply(this, arguments); //Siebel applet cleanup
        }

        return n19_example_pr;
      }()
      );
      return "SiebelAppFacade.n19_example_pr";
    })
}

function addContainer(pm, vueId) {
  const siebeAppletId = pm.Get('GetFullId');
  const $applet = window.$(`#${siebeAppletId}`);
  const $header = window.$(`#s_${siebeAppletId}_div`);
  $header.hide();
  $applet.prepend(`<div id='${vueId}'></div>`);
}