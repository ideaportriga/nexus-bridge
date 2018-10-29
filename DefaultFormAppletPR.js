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
          appletName = pm.Get("GetName");

          this.GetPM().AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW"), function () {
            afterSelection();
          });
        }

        DefaultFormAppletPR.prototype.ShowUI = function () {
          //SiebelAppFacade.DefaultFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        DefaultFormAppletPR.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.DefaultFormAppletPR.superclass.BindData.apply(this, arguments);

          var divId = "s_" + this.GetPM().Get("GetFullId") + "_div";
          var control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
          var controlInfo = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()['InfoChanged'];
          var canUpdateName = pm.ExecuteMethod("CanUpdate", control.GetName());

          inputReadOnly = canUpdateName ? '' : 'readonly="readonly"';

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
            .append('<div>' + input + checkBox + '</div>' + button)
            .find('button').on('click', function (e) {
              //Save the record
              SiebelApp.S_App.GetActiveView().SetActiveAppletInternal(SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName]);
              var ai = {
                scope: {
                  cb: function () {
                    console.log('response in callback from save record >>>', arguments);
                    if (arguments[3]) {
                      console.log('save was successful');
                    } else {
                      console.log('save WAS NOT successful');
                    }
                  }
                }
              }
              SiebelApp.CommandManager.GetInstance().InvokeCommand.call(SiebelApp.CommandManager.GetInstance, "*Browser Applet* *WriteRecord* * ", true, ai);
            })
            .end()
            .append(nextRecordButton)
            .find('#ipr-next-record').on('click', function (e) {
              //go to the next record
              if (!pm.ExecuteMethod("CanInvokeMethod", "GotoNextSet")) {
                alert('GotoNextSet is not allowed to invoke ');
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
            }
          );

          $('#ipr-input-text').on('blur', function () {
            var newCaseNum = $(this).val();
            //TODO: CHECK IF VALUE ACTUALLY WAS CHANGED
            pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), control);
            pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), control, newCaseNum);
            if (control.IsPostChanges()) {
              //recalculate model
            }
          });

          $('#ipr-input-check').on('change', function () {
            console.log('changed checkbox', $(this).checked);
            var newInfo = $(this).prop('checked') ? 'Y' : 'N';
            pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlInfo);
            pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlInfo, newInfo);
            if (controlInfo.IsPostChanges()) {
              var control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
              if (pm.ExecuteMethod("CanUpdate", control.GetName())) {
                $('#ipr-input-text').removeAttr('readonly');
              } else {
                $('#ipr-input-text').attr('readonly', 'reaonly');
              }
            }
          });
        }

        function afterSelection() {
          var el = $("#ipr-input-text");
          el.val(pm.Get("GetRecordSet")[pm.Get("GetSelection")].Name);
          var control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
          if (pm.ExecuteMethod("CanUpdate", control.GetName())) {
            el.removeAttr('readonly');
          } else {
            el.attr('readonly', 'reaonly');
          }
          var _infoChanged = pm.Get("GetRecordSet")[pm.Get("GetSelection")]['Info Changed Flag'];
          $("#ipr-input-check").prop('checked', _infoChanged == 'Y' ? true : false)
        }

        DefaultFormAppletPR.prototype.BindEvents = function () {
          //SiebelAppFacade.DefaultFormAppletPR.superclass.BindEvents.apply(this, arguments);
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
