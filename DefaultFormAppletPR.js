if (typeof (SiebelAppFacade.DefaultFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.DefaultFormAppletPR");
  define("siebel/custom/DefaultFormAppletPR", ["siebel/phyrenderer"],
    function () {
      SiebelAppFacade.DefaultFormAppletPR = (function () {

        function DefaultFormAppletPR(pm) {
          SiebelAppFacade.DefaultFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(DefaultFormAppletPR, SiebelAppFacade.PhysicalRenderer);
        var pm;
        var appletName;

        DefaultFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.DefaultFormAppletPR.superclass.Init.apply(this, arguments);
          pm = this.GetPM();

          this.GetPM().AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW"), function (){
            console.log('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW', arguments);
            afterSelection();
          });

        }

        DefaultFormAppletPR.prototype.ShowUI = function () {
          //SiebelAppFacade.DefaultFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        DefaultFormAppletPR.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.DefaultFormAppletPR.superclass.BindData.apply(this, arguments);

          appletName = pm.Get("GetName");
          var divId = "s_" + this.GetPM().Get("GetFullId") + "_div";
          var control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
          var controlInfo = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()['InfoChanged'];
          var canUpdateName = pm.ExecuteMethod("CanUpdate", control.GetName());
          console.log('can update', canUpdateName);

          inputReadOnly = canUpdateName? '' : 'readonly="readonly"';

          console.log(pm.Get("GetRecordSet")[pm.Get("GetSelection")]);
          var _caseNum = pm.Get("GetRecordSet")[pm.Get("GetSelection")].Name;
          var _infoChanged = pm.Get("GetRecordSet")[pm.Get("GetSelection")]['Info Changed Flag'];
          console.log(_caseNum, _infoChanged);

          var input = SiebelAppFacade.HTMLTemplateManager.GenerateMarkup({
            type: consts.get('SWE_CTRL_TEXT'),
            value: _caseNum,
            id: 'ipr-input-text',
            className: 'siebui-align-left siebui-input-align-left',
            attrs: 'title="Enter the case name" aria-label="Case Name" placeholder="<Enter case name>" ' + inputReadOnly
          });

          var checked = _infoChanged == 'Y' ? 'checked' : '';
          var checkBox = SiebelAppFacade.HTMLTemplateManager.GenerateMarkup({
            type: consts.get('SWE_CTRL_CHECKBOX'),
            id: 'ipr-input-check',
            className: '',
            attrs: checked
          });

          var button = SiebelAppFacade.HTMLTemplateManager.GenerateMarkup({
            type: consts.get('SWE_PST_BUTTON_CTRL'),
            value: '<span>Save</span>',
            className: 'appletButton',
            attrs: 'title="Click on me to save the case" aria-label="Save"'
          });

          var nextRecordButton = SiebelAppFacade.HTMLTemplateManager.GenerateMarkup({
            type: consts.get('SWE_PST_BUTTON_CTRL'),
            id: 'ipr-next-record',
            value: '<span>Next</span>',
            className: 'appletButton',
            attrs: 'title="Click on me to go to the next record" aria-label="Next"'
          });

          $('#' + divId).find('form').hide().end()
            .append('<div>' + input + '</div>')
            .append('<div>' + checkBox + '</div>')
            .append('<div>' + button + '</div>')
            .find('button').on('click', function (e) {
              //var newCaseNum = $("#ipr-input-text").val();

              SiebelApp.S_App.GetActiveView().SetActiveAppletInternal(SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName]);

              //var control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
              //pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), control);
              //pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), control, newCaseNum);

              var n = {
                scope: {
                  cb: function (){
                    console.log('response in callback from save record >>>', arguments);
                    if (arguments[3]) {
                      console.log('save was successful');
                    } else {
                      console.log('save WAS NOT successful');
                    }
                  }
                }
              }

              SiebelApp.CommandManager.GetInstance().InvokeCommand.call(SiebelApp.CommandManager.GetInstance, "*Browser Applet* *WriteRecord* * ", true, n);
            })
            .end()
            .append('<div>' + nextRecordButton + '</div>')
            .find('#ipr-next-record').on('click', function (e) {

              if (!pm.ExecuteMethod("CanInvokeMethod", "GotoNextSet")) {
                alert('Not allowed to invoke GotoNextSet');
              } else {
                //invoking the goto next set
                var ps = SiebelApp.S_App.NewPropertySet();
                ps.SetProperty('SWEApplet', 'HLS Case Form Applet');
                ps.SetProperty('SWEView', 'HLS Case List View');
                var ai = {
                  cb: afterSelection
                }
                SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].InvokeControlMethod('GotoNextSet', ps, ai)
              }

            });
          $('#ipr-input-text').on('blur', function(){
            //todo make it synchronous? or callback?
            console.log('blur');
            var newCaseNum = $("#ipr-input-text").val();
            //TODO: CHECK IF VALUE ACTUALLY WAS CHANGED
            pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), control);
            pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), control, newCaseNum);
            var isPostChanges = control.IsPostChanges();
            if (isPostChanges) {
              console.log('before OnControlEvent');
              console.log(pm.OnControlEvent('change', control, $(this).val()));
              console.log('after OnControlEvent');
            }
          });

          $('#ipr-input-check').on('change', function(){
            console.log('changed checkbox', $(this).checked);
            var newInfo = $(this).prop('checked') ? 'Y' : 'N';
            pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlInfo);
            pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlInfo, newInfo);
            // we don't need to send by ourselves?
            var isPostChanges = controlInfo.IsPostChanges();
            if (isPostChanges) {
              var control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
              if (pm.ExecuteMethod("CanUpdate", control.GetName())) {
                $('#ipr-input-text').removeAttr('readonly');
              } else {
                $('#ipr-input-text').attr('readonly', 'reaonly');
              }
              console.log('before OnControlEvent checkbox', pm.ExecuteMethod("CanUpdate", control.GetName()));
              console.log(pm.OnControlEvent('change', controlInfo, newInfo));
              control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
              console.log('after OnControlEvent checkbox', pm.ExecuteMethod("CanUpdate", control.GetName()));
            }
          });
        }

        function afterSelection() {

            $("#ipr-input-text").val(pm.Get("GetRecordSet")[pm.Get("GetSelection")].Name);
            var control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
            if (pm.ExecuteMethod("CanUpdate", control.GetName())) {
              $('#ipr-input-text').removeAttr('readonly');
            } else {
              $('#ipr-input-text').attr('readonly', 'reaonly');
            }
        }

        DefaultFormAppletPR.prototype.BindEvents = function () {
          SiebelAppFacade.DefaultFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        DefaultFormAppletPR.prototype.EndLife = function () {
          SiebelAppFacade.DefaultFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return DefaultFormAppletPR;
      }()
      );
      return "SiebelAppFacade.DefaultFormAppletPR";
    })
}
