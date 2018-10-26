if (typeof SiebelAppFacade.CSPNRViewPostload == "undefined") {
  SiebelJS.Namespace('SiebelAppFacade.CSPNRViewPostload');
	define("siebel/custom/CSPNRViewPreload", function () {
		SiebelApp.EventManager.addListner("postload", OnPreload, this);
		function OnPreload() {
		}
	});
}
