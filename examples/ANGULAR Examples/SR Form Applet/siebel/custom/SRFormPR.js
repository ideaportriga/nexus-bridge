if (typeof (SiebelAppFacade.SRFormPR) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.SRFormPR");
    define("siebel/custom/SRFormPR", [
      "siebel/phyrenderer",
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

            SiebelJS.Extend(SRFormPR, SiebelAppFacade.PhysicalRenderer);

            SRFormPR.prototype.Init = function () {
                //Executing vanilla bindings, required to use SiebelApp/pm methods
                SiebelAppFacade.SRFormPR.superclass.Init.apply(this, arguments);
            }

            SRFormPR.prototype.ShowUI = function () {
                addContainer(this.GetPM(), containerId);
                SiebelNG.createExample(containerId, this.GetPM());
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
  
function addContainer(pm, containerId) {
    const siebeAppletId = pm.Get('GetFullId');
    const $applet = window.$(`#${siebeAppletId}`);
    const $header = window.$(`#s_${siebeAppletId}_div`);
    $header.hide();
    $applet.prepend(`<div id='${containerId}'></div>`);
}