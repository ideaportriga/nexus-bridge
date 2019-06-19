if (typeof SiebelAppFacade.N19_REACT_PR === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.N19_REACT_PR")
  define("siebel/custom/react-app/N19_REACT_PR", [
    "siebel/custom/NBDefaultFormAppletPR",
    "siebel/custom/react-app/static/js/main"
  ], function() {
    SiebelAppFacade.N19_REACT_PR = (function() {
      let containerId = "react-root"

      function N19_REACT_PR() {
        SiebelAppFacade.N19_REACT_PR.superclass.constructor.apply(this, arguments)
      }

      SiebelJS.Extend(N19_REACT_PR, SiebelAppFacade.NBDefaultFormAppletPR)

      N19_REACT_PR.prototype.Init = function() {
        SiebelAppFacade.N19_REACT_PR.superclass.NBInit.apply(this, arguments)
      }

      N19_REACT_PR.prototype.ShowUI = function() {
        var applet=document.getElementById(this.GetPM().Get('GetFullId'))
        var rootElement = document.createElement("div")
        rootElement.id = containerId
        applet.parentElement.parentElement.appendChild(rootElement)
        SiebReact.mountComponent(containerId)
        applet.parentElement.remove();
        // SiebelAppFacade.N19_REACT_PR.superclass.ShowUI.apply(this, arguments)
      }

      N19_REACT_PR.prototype.BindData = function() {
        // SiebelAppFacade.N19_REACT_PR.superclass.BindData.apply(this, arguments)
      }

      N19_REACT_PR.prototype.BindEvents = function() {
        // SiebelAppFacade.N19_REACT_PR.superclass.BindEvents.apply(this, arguments)
      }

      N19_REACT_PR.prototype.EndLife = function() {
        if (document.getElementById(containerId) !== null) {
          SiebReact.unmountComponent(containerId)
          document.getElementById(containerId).remove()
        }
        SiebelAppFacade.N19_REACT_PR.superclass.EndLife.apply(this, arguments)
      }

      return N19_REACT_PR
    })()
    return "SiebelAppFacade.N19_REACT_PR"
  })
}
