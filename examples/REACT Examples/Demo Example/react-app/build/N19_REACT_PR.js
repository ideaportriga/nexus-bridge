if (typeof SiebelAppFacade.N19_REACT_PR === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.N19_REACT_PR")
  define("siebel/custom/react-app/N19_REACT_PR", [
    "siebel/custom/react-app/static/js/main"
  ], function () {
    SiebelAppFacade.N19_REACT_PR = (function () {
      let containerId = "react-root"

      function N19_REACT_PR() {
        SiebelAppFacade.N19_REACT_PR.superclass.constructor.apply(this, arguments)
      }

      SiebelJS.Extend(N19_REACT_PR, SiebelAppFacade.ViewPR)

      N19_REACT_PR.prototype.Init = function () {
        SiebelAppFacade.N19_REACT_PR.superclass.Init.apply(this, arguments)
      }

      N19_REACT_PR.prototype.ShowUI = function () {
        var applet = document.getElementById(this.GetPM().Get('GetFullId'))
        var rootElement = document.createElement("div")
        rootElement.id = containerId
        applet.parentElement.parentElement.appendChild(rootElement)
        N19_REACT_APP.mountComponent(containerId)
        applet.parentElement.remove();
      }

      N19_REACT_PR.prototype.EndLife = function () {
        if (document.getElementById(containerId) !== null) {
          N19_REACT_APP.unmountComponent(containerId)
          document.getElementById(containerId).remove()
        }
        SiebelAppFacade.N19_REACT_PR.superclass.EndLife.apply(this, arguments)
      }

      return N19_REACT_PR
    })()
    return "SiebelAppFacade.N19_REACT_PR"
  })
}
