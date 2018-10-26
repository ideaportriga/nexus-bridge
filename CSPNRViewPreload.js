if (typeof SiebelAppFacade.CSPNRViewPreload == "undefined") {
	SiebelJS.Namespace('SiebelAppFacade.CSPNRViewPreload');
	define("siebel/custom/CSPNRViewPreload", function () {
		SiebelApp.EventManager.addListner("preload", OnPreload, this);
		function OnPreload() {
		}
	});
}
