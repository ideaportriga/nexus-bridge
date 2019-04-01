if (typeof SiebelAppFacade.N19_REACT_PR === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.N19_REACT_PR")
  define("siebel/custom/react-app/N19_REACT_PR", [
    "siebel/custom/react-app/build/static/js/main"
  ], function() {
    SiebelAppFacade.N19_REACT_PR = (function() {
      let containerId = "react-root"

      function N19_REACT_PR() {
        SiebelAppFacade.N19_REACT_PR.superclass.Init.apply(this, arguments)
      }

      SiebelJS.Extend(N19_REACT_PR, SiebelAppFacade.ViewPR)

      N19_REACT_PR.prototype.Init = function() {
        SiebelAppFacade.N19_REACT_PR.superclass.Init.apply(this, arguments)
      }

      N19_REACT_PR.prototype.ShowUI = function() {
        var rootContainer = document.getElementById("_sweview")
        rootContainer.firstElementChild.style.display = "none"
        rootContainer.title = ""

        var rootElement = document.createElement("div")
        rootElement.id = containerId
        rootContainer.appendChild(rootElement)
        SiebReact.mountComponent(containerId)

        SiebelAppFacade.N19_REACT_PR.superclass.ShowUI.apply(this, arguments)
      }

      N19_REACT_PR.prototype.BindData = function() {
        SiebelAppFacade.N19_REACT_PR.superclass.BindData.apply(this, arguments)
      }

      N19_REACT_PR.prototype.BindEvents = function() {
        SiebelAppFacade.N19_REACT_PR.superclass.BindEvents.apply(this, arguments)
      }

      N19_REACT_PR.prototype.EndLife = function() {
        if (document.getElementById(containerId) !== null) {
          SiebReact.unmountComponent(containerId)
          document.getElementById(containerId).remove()
        }
        var rootContainer = document.getElementById("_sweview")
        rootContainer.firstElementChild.style.display = ""

        SiebelAppFacade.N19_REACT_PR.superclass.EndLife.apply(this, arguments)
      }

      return N19_REACT_PR
    })()
    return "SiebelAppFacade.N19_REACT_PR"
  })
}
