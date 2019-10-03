if (typeof (SiebelAppFacade.AccountAttachmentListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.AccountAttachmentListAppletPR");
  define("siebel/custom/AccountAttachmentListAppletPR", ["siebel/custom/NBDefaultAppletPR", "siebel/custom/vue.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.AccountAttachmentListAppletPR = (function () {
        var _pm;

        function AccountAttachmentListAppletPR(pm) {
          SiebelAppFacade.AccountAttachmentListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(AccountAttachmentListAppletPR, SiebelAppFacade.NBDefaultAppletPR);

        AccountAttachmentListAppletPR.prototype.Init = function () {
          SiebelAppFacade.AccountAttachmentListAppletPR.superclass.Init.apply(this, arguments);

          $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet"></link>');
          $('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/vuetify.min.css"/>');
          $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');
          _pm = this.GetPM();
        }

        AccountAttachmentListAppletPR.prototype.ShowUI = function () {
          var divId = "s_" + this.GetPM().Get('GetFullId') + "_div";
          $('#' + divId).replaceWith("<div id='app'>This is upload area<input type='file' id='fileupload' name='test'></div>"); // SWE_FILE_NAME_STR
          putVue();
        }

        function putVue() {
          new Vue({
            el: '#app',
            mounted() {
              this.initializePlugin();
            },
            methods: {
              initializePlugin() {
                var $element = $('#fileupload');
                var vm = this;

                $element.fileupload({
                  dropZone: $("#s_" + _pm.Get('GetFullId') + "_div"),
                  fileInput: $element,
                  forceIframeTransport: false,
                  formData: {},
                  multipart: true,
                  replaceFileInput: false,
                  paramName: 's_SweFileName', // Server relies on this name
                  // scope: i
                  type: "POST",
                  url: SiebelApp.S_App.GetPageURL(),
                  fail: function () {
                    console.log('upload fail...', arguments);
                  },
                  done: this.uploadDone
                }).bind("fileuploadchange", { ctx: this }, function (event, data) {
                  return vm.upload.call(null, event, data);
                }).bind("fileuploaddrop", { ctx: this }, function (event, data) {
                  return vm.upload.call(null, event, data);
                });
              },
              uploadDone(event, data) {
                var $element = $('#fileupload');
                var result = data.result;
                var remainingFiles = 0;
                console.log('upload done...', result);

                if ($element.data("blueimp-fileupload")) {
                  remainingFiles = $element.fileupload("option", "remainingFilesToUpload");
                  $element.fileupload("option", "remainingFilesToUpload", --remainingFiles);
                }
                if (!utils.IsEmpty(result)) {
                  SiebelApp.S_App.ProcessResponse(result).done(function () {
                    SiebelApp.S_App.ProcessError();
                    _pm.ExecuteMethod('InvokeMethod', 'WriteRecord');
                    console.log(_pm.Get('GetRecordSet'));
                  });
                }
                if (remainingFiles <= 0) {
                  $element.val("");
                }
              },
              upload(event, data) {
                console.log('upload started....');
                if (data.files.length > 0) {
                  var $element = $('#fileupload');
                  var newFileAttRetValue = _pm.ExecuteMethod('NewFileAttachment');
                  console.log(_pm);
                  console.log(newFileAttRetValue);
                  var srnString = consts.get("SWE_PROP_SESSION_RANDOM_NUMBER") + "=" + SiebelApp.S_App.GetSRN();
                  $element.fileupload("option", "remainingFilesToUpload", data.files.length);
                  $element.fileupload("option", "formData", newFileAttRetValue);
                  $element.fileupload("option", "url", SiebelApp.S_App.GetPageURL() + consts.get("SWE_ARG_START") + srnString);
                }
              }
            }
          });
        }

        AccountAttachmentListAppletPR.prototype.EndLife = function () {
          $("link[href*='vuetify.min.css']").remove();
          $("link[href*='https://fonts.googleapis.com/css']").remove();
          $('#vuetify-theme-stylesheet').remove();
          SiebelAppFacade.AccountAttachmentListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return AccountAttachmentListAppletPR;
      }()
      );
      return "SiebelAppFacade.AccountAttachmentListAppletPR";
    })
}
