if (typeof (SiebelAppFacade.n19_example_pm) === "undefined") {
    SiebelJS.Namespace("SiebelAppFacade.n19_example_pm");
    define("siebel/custom/example/n19_example_pm", ["siebel/pmodel"],
        function () {
            SiebelAppFacade.n19_example_pm = (function () {
                function n19_example_pm(pm) {
                    SiebelAppFacade.n19_example_pm.superclass.constructor.apply(this, arguments);
                }

                SiebelJS.Extend(n19_example_pm, SiebelAppFacade.PresentationModel);

                n19_example_pm.prototype.Init = function () {
                    SiebelAppFacade.n19_example_pm.superclass.Init.apply(this, arguments);
                }

                n19_example_pm.prototype.Setup = function (propSet) {
                    SiebelAppFacade.n19_example_pm.superclass.Setup.apply(this, arguments);
                }

                return n19_example_pm;
            }()
            );
            return "SiebelAppFacade.n19_example_pm";
        })
}