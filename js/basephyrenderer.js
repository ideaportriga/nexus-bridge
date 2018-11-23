if (typeof(SiebelAppFacade.BasePR) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.BasePR");
  define("siebel/basephyrenderer", [], function() {
      SiebelAppFacade.BasePR = (function() {
          function a(c) {
              var b = c;
              this.GetPM = function() {
                  return b
              };
              SiebelApp.S_App.PluginBuilder.DecorateCapability(this);
              this.Init();
              this._BasePR_EndLife = function() {
                  b = null
              }
          }
          a.prototype = {
              Init: function() {},
              ShowUI: function() {},
              BindData: function() {},
              BindEvents: function() {},
              AttachPMBinding: function(b, c, d) {
                  if (this.GetPM()) {
                      this.GetPM().AttachPMBinding(b, c, d || {
                          scope: this
                      })
                  }
              },
              EndLife: function() {
                  this._BasePR_EndLife();
                  SiebelApp.S_App.PluginBuilder.DeleteCapability(this)
              }
          };
          return a
      }());
      SiebelAppFacade.BasePhysicalRenderer = SiebelAppFacade.BasePR;
      return SiebelAppFacade.BasePR
  })
};
