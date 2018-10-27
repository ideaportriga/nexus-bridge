    SiebelJS.Namespace('SiebelAppFacade.ErrorObjectRenderer');

    define("siebel/errorstatusbarrenderer", ["siebel/basephyrenderer"], function () {
    SiebelAppFacade.ErrorObjectRenderer = (function () {
        var parentContainer;
        function ErrorObjectRenderer(pm) {
            SiebelAppFacade.ErrorObjectRenderer.superclass.constructor.call(this, pm);
        }

        SiebelJS.Extend(ErrorObjectRenderer, SiebelAppFacade.BasePR);


        ErrorObjectRenderer.prototype.ShowUI = function () {
            SiebelAppFacade.ErrorObjectRenderer.superclass.ShowUI.call(this);
            parentContainer = SiebelApp.S_App.IsRwd() ? "SiebAppContainer" : "_sweview";
            CreateStatusBar(this);
        };

        ErrorObjectRenderer.prototype.BindEvents = function (controls, forceStop) {
            SiebelAppFacade.ErrorObjectRenderer.superclass.BindEvents.call(this);

            $(".siebui-statusbar").bind("click", { ctx: this }, function (event) {
                $("#" + parentContainer + "_statusbar").hide();
            });

        };

        ErrorObjectRenderer.prototype.ShowError = function (errMsg) {
            if (errMsg) {
                $("#" + parentContainer + "_statusbar").text(errMsg).show();
            }
        };

        function CreateStatusBar() {
            var divErr;
              if ($("#" + parentContainer + "_statusbar").length === 0) {
                    divErr = "<div id = '" + parentContainer + "_statusbar' class ='siebui-statusbar'>" + "</div>";
                    if ($("#" + parentContainer).length !== 0) {
                        $("#" + parentContainer).append(divErr);
                }
            }            
                $("#" + parentContainer + "_statusbar").hide();
        }
        return ErrorObjectRenderer;
    })();
        return SiebelAppFacade.ErrorObjectRenderer;
    });    