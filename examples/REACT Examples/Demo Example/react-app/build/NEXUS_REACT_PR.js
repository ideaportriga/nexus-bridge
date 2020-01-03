if (typeof SiebelAppFacade.NEXUS_REACT_PR === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.NEXUS_REACT_PR")
  define("siebel/custom/react-app/NEXUS_REACT_PR", [
    "siebel/custom/react-app/static/js/main"
  ], function () {
    SiebelAppFacade.NEXUS_REACT_PR = (function () {
      let containerId = "react-root"

      function NEXUS_REACT_PR() {
        SiebelAppFacade.NEXUS_REACT_PR.superclass.constructor.apply(this, arguments)
      }

      SiebelJS.Extend(NEXUS_REACT_PR, SiebelAppFacade.ViewPR)

      NEXUS_REACT_PR.prototype.Init = function () {
        SiebelAppFacade.NEXUS_REACT_PR.superclass.Init.apply(this, arguments)
      }

      NEXUS_REACT_PR.prototype.ShowUI = function () {
        var applet = document.getElementById(this.GetPM().Get('GetFullId'))
        var rootElement = document.createElement("div")
        rootElement.id = containerId
        applet.parentElement.parentElement.appendChild(rootElement)
        NEXUS_REACT_APP.mountComponent(containerId)
        applet.parentElement.hidden = "true";
      }

      NEXUS_REACT_PR.prototype.EndLife = function () {
        if (document.getElementById(containerId) !== null) {
          NEXUS_REACT_APP.unmountComponent(containerId)
          document.getElementById(containerId).remove()
        }
        SiebelAppFacade.NEXUS_REACT_PR.superclass.EndLife.apply(this, arguments)
      }

      return NEXUS_REACT_PR
    })()
    return "SiebelAppFacade.NEXUS_REACT_PR"
  })
}
