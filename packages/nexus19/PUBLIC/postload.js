if (typeof SiebelAppFacade.Postload == "undefined") {
  Namespace("SiebelAppFacade.Postload");

  (function() {
    SiebelApp.EventManager.addListner("postload", OnPostload, this);
    function OnPostload() {
      if (!SiebelAppFacade.downloadFile) {
        SiebelAppFacade.downloadFile = true;
        SiebelApp.S_App.DownloadFile = DownloadFile;
      }
    }
  })();
}

function DownloadFile(psInput) {
  console.log(">>>>>>> Custom DownloadFile started...");
  var url = psInput.GetProperty("URL"); // /start.swe?_SA=t&SWECmd=GetFile&_SB=respCtx_710&SWEC=83&SRN=
  var urlArr = url.split("?");
  var urlBegin = SiebelApp.S_App.GetPageURL() + "?";
  var urlParameters = urlArr[1];
  var downloadFunc = function() {
    if (urlBegin && urlParameters) {
      var formContent = "";
      var arrParams = urlParameters.split("&");
      for (var i = 0; i < arrParams.length; i++) {
        var s = arrParams[i].split("=");
        if (s.length >= 2) {
          if (s[0] === consts.get("SWE_PROP_SESSION_RANDOM_NUMBER")) {
            s[1] = SiebelApp.S_App.GetSRN();
          }
          formContent +=
            '<input type="hidden" name="' + s[0] + '" value="' + s[1] + '" />';
        }
      }
      jQuery(
        '<form id="form1" action="' +
          urlBegin +
          '" method="post" target="_blank">' +
          formContent +
          "</form>"
      )
        .appendTo("body")
        .submit()
        .remove();
    }
  };
  downloadFunc();
}
