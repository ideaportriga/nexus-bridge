if (typeof (SiebelAppFacade.DefaultViewPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.DefaultViewPR");
  define("siebel/custom/DefaultViewPR", ["siebel/viewpr"],
    function () {
      SiebelAppFacade.DefaultViewPR = (function () {

        function DefaultViewPR(pm) {
          SiebelAppFacade.DefaultViewPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(DefaultViewPR, SiebelAppFacade.ViewPR);

        DefaultViewPR.prototype.Init = function () { }

        DefaultViewPR.prototype.ShowUI = function () { }

        DefaultViewPR.prototype.BindData = function () { }

        DefaultViewPR.prototype.BindEvents = function () { }

        DefaultViewPR.prototype.EndLife = function () {
          SiebelAppFacade.DefaultViewPR.superclass.EndLife.apply(this, arguments);
        }

        return DefaultViewPR;
      }()
      );
      return "SiebelAppFacade.DefaultViewPR";
    })
}
