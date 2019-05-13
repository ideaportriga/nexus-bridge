typeof SiebelAppFacade.IPRBasePR == "undefined" && (SiebelJS.Namespace("SiebelAppFacade.IPRBasePR"),
define("siebel/iprbasephyrenderer", [], function() {
    return SiebelAppFacade.IPRBasePR = function() {
        function e(e) {
            var t = e;
            this.GetPM = function() {
                return t
            }
            ,
            SiebelApp.S_App.PluginBuilder.DecorateCapability(this),
            this.Init(),
            t.DecorateEventHandlers(),
            this._BasePR_EndLife = function() {
                t = null
            }
        }
        return e.prototype = {
            Init: function() {},
            ShowUI: function() {},
            BindData: function() {},
            BindEvents: function() {},
            AttachPMBinding: function(e, t, n) {
                this.GetPM() && this.GetPM().AttachPMBinding(e, t, n || {
                    scope: this
                })
            },
            EndLife: function() {
                this._BasePR_EndLife(),
                SiebelApp.S_App.PluginBuilder.DeleteCapability(this)
            },
            CacheState: function(e, t) {
                this.GetPM().ExecuteMethod("UpdateUIState", e, t)
            }
        },
        e
    }(),
    SiebelAppFacade.IPRBasePhysicalRenderer = SiebelAppFacade.IPRBasePR,
    SiebelAppFacade.IPRBasePR
}))