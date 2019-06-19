if (typeof (SiebelAppFacade.AccountAttachmentListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.AccountAttachmentListAppletPR");
  define("siebel/custom/AccountAttachmentListAppletPR", ["siebel/custom/NBDefaultListAppletPR", "siebel/custom/vue.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.AccountAttachmentListAppletPR = (function () {
        var keepOUI = false;
        var pm;



        function AccountAttachmentListAppletPR(pm) {
          SiebelAppFacade.AccountAttachmentListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(AccountAttachmentListAppletPR, SiebelAppFacade.NBDefaultListAppletPR);

        AccountAttachmentListAppletPR.prototype.Init = function () {
          if (keepOUI) {
            SiebelAppFacade.AccountAttachmentListAppletPR.superclass.Init.apply(this, arguments);
          } else {
            SiebelAppFacade.AccountAttachmentListAppletPR.superclass.NBInit.apply(this, arguments);

            $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet"></link>');
            $('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/vuetify.min.css"/>');
            $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');
            pm = this.GetPM();
          }
        }

        AccountAttachmentListAppletPR.prototype.ShowUI = function () {
          if (keepOUI) {
            SiebelAppFacade.AccountAttachmentListAppletPR.superclass.ShowUI.apply(this, arguments);
          } else {
            putPlugin("s_" + this.GetPM().Get('GetFullId') + "_div");

          }
        }

        AccountAttachmentListAppletPR.prototype.BindEvents = function () {
          if (keepOUI) {
            SiebelAppFacade.AccountAttachmentListAppletPR.superclass.BindEvents.apply(this, arguments);
          }
        }


        AccountAttachmentListAppletPR.prototype.BindData = function (bRefresh) {
          if (keepOUI) {
            SiebelAppFacade.AccountAttachmentListAppletPR.superclass.BindData.apply(this, arguments);
          }
        }

        function __uploadU(event, n, r) {
          console.log('upload started....');
          if (n.files.length > 0) {
            var $element = $('#fileupload');
            var newFileAttRetValue = pm.ExecuteMethod('NewFileAttachment');
            console.log(newFileAttRetValue);
            var srnString = consts.get("SWE_PROP_SESSION_RANDOM_NUMBER") + "=" + SiebelApp.S_App.GetSRN();
            $element.fileupload("option", "remainingFilesToUpload", n.files.length);
            $element.fileupload("option", "formData", newFileAttRetValue);
            $element.fileupload("option", "url", SiebelApp.S_App.GetPageURL() + consts.get("SWE_ARG_START") + srnString);
            $element = null;
          }
        }

        function uploadDone(event, n) {
          var $element = $('#fileupload');
          console.log(n.result);
          var i = null;
          var s = 0;
          if ($element.data("blueimp-fileupload")) {
            s = $element.fileupload("option", "remainingFilesToUpload");
            $element.fileupload("option", "remainingFilesToUpload", --s);
          }
          n.dataType === "iframe " ? i = $(n.result).find("body").html() : i = n.result; // we are taking n.result
          utils.IsEmpty(i) || SiebelApp.S_App.ProcessResponse(i).done(function () {
            SiebelApp.S_App.ProcessError();
          });
          if (s <= 0) {
            $element.val("");
          }
        }

        function putPlugin(divId) {
          $('#' + divId).replaceWith("<div id='test1'>This is a upload area<input type='file' id='fileupload' name='test'></div>"); // SWE_FILE_NAME_STR
          var $element = $('#fileupload');

          $element.fileupload({
            dropZone: $("#s_" + pm.Get('GetFullId') + "_div"),
            fileInput: $element,
            forceIframeTransport: false,
            formData: {},
            multipart: true,
            replaceFileInput: false,
            paramName: 's_SweFileName', // Server relies on this name
            // scope: i
            type: "POST",
            url: SiebelApp.S_App.GetPageURL()
          });

          $element.bind("fileuploadchange", {
            ctx: this
          }, function (event, n) {
            return __uploadU.call(this, event, n, null)
          }).bind("fileuploaddrop", {
            ctx: this
          }, function (event, n) {
            return __uploadU.call(this, event, n, null)
          });
          var obj = {};
          obj.fail = function () { console.log('fail', arguments) };
          obj.done = uploadDone;
          $element.fileupload(obj);
        }

        AccountAttachmentListAppletPR.prototype.EndLife = function () {
          if (!keepOUI) {
            $("link[href*='vuetify.min.css']").remove();
            $("link[href*='https://fonts.googleapis.com/css']").remove();
            $('#vuetify-theme-stylesheet').remove();
            this.destroyNexus();
          }
          SiebelAppFacade.AccountAttachmentListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return AccountAttachmentListAppletPR;
      }()
      );
      return "SiebelAppFacade.AccountAttachmentListAppletPR";
    })
}
