//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopForm&name=DefaultFormApplet&userprops=&comments=No&logging=Yes
if (typeof (SiebelAppFacade.DefaultFormAppletPR) === "undefined")
{

  SiebelJS.Namespace("SiebelAppFacade.DefaultFormAppletPR");
  define("siebel/custom/DefaultFormAppletPR", ["siebel/phyrenderer"],
    function ()
    {
      SiebelAppFacade.DefaultFormAppletPR = (function ()
      {

        function DefaultFormAppletPR(pm)
        {
          SiebelAppFacade.DefaultFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(DefaultFormAppletPR, SiebelAppFacade.PhysicalRenderer);

        DefaultFormAppletPR.prototype.Init = function ()
        {
          SiebelAppFacade.DefaultFormAppletPR.superclass.Init.apply(this, arguments);
        }

        DefaultFormAppletPR.prototype.ShowUI = function ()
        {
          //SiebelAppFacade.DefaultFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        DefaultFormAppletPR.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.DefaultFormAppletPR.superclass.BindData.apply(this, arguments);
          var pm = this.GetPM();
          var divId = "s_" + this.GetPM().Get("GetFullId") + "_div";
          var appletName = pm.Get("GetName");

          var i = pm.Get("GetSelection");
          var _case = pm.Get("GetRecordSet")[i];
          var _caseNum = _case.Name;

          var input = SiebelAppFacade.HTMLTemplateManager.GenerateMarkup({
            type: consts.get('SWE_CTRL_TEXT'),
            value: _caseNum,
            id: 'ipr-input-text',
            className: 'siebui-align-left siebui-input-align-left',
            attrs: 'title="Enter the case name" aria-label="Case Name" placeholder="<Enter case name>"'
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
            .append('<div>' + button + '</div>')
            .find('button').on('click', function (e) {
              var newCaseNum = $("#ipr-input-text").val();

              SiebelApp.S_App.GetActiveView().SetActiveAppletInternal(SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName]);

              var control = SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetControls()["Name"];
              pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), control);
              pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), control, newCaseNum);

              var n = {
                scope: {
                  cb: function (){
                    console.log('response', arguments);
                  }
                }
              }

              SiebelApp.CommandManager.GetInstance().InvokeCommand.call(SiebelApp.CommandManager.GetInstance, "*Browser Applet* *WriteRecord* * ", true, n);
            })
            .end()
            .append('<div>' + nextRecordButton + '</div>')
            .find('#ipr-next-record').on('click', function (e) {
              var i = pm.Get("GetSelection") + 1;
              SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].GetBusComp().SetSelection(i);
              $("#ipr-input-text").val(pm.Get("GetRecordSet")[i].Name);
            });
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
