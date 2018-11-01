if (typeof (SiebelAppFacade.DefaultFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.DefaultFormAppletPR");
  define("siebel/custom/DefaultFormAppletPR", ["siebel/phyrenderer", "siebel/custom/vue.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.DefaultFormAppletPR = (function () {

        function DefaultFormAppletPR(pm) {
          SiebelAppFacade.DefaultFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(DefaultFormAppletPR, SiebelAppFacade.PhysicalRenderer);
        var app;
        var pm;
        var appletName;
        var viewName;
        var controlInfo;
        var controlName;
        var controlCategory;
        var controlStatus;
        var controlSubStatus;

        DefaultFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.DefaultFormAppletPR.superclass.Init.apply(this, arguments);
          pm = this.GetPM();
          appletName = pm.Get("GetName");
          viewName = SiebelApp.S_App.GetActiveView().GetName();

          this.GetPM().AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_GENERIC"), function (propSet){
            var type = propSet.GetProperty(consts.get("SWE_PROP_NOTI_TYPE"));
            if (type === "GetQuickPickInfo"){
              var arr = [];
              CCFMiscUtil_StringToArray (propSet.GetProperty(consts.get("SWE_PROP_ARGS_ARRAY")), arr);
              console.log(arr);
              if (app) {
                if (viewName == arr[1] && appletName == arr[2]) {
                  if (controlStatus.GetInputName() == arr[3]) {
                    app.populateStatusArray(arr.splice(5));
                  } else if (controlSubStatus.GetInputName() == arr[3]) {
                    app.populateSubStatusArray(arr.splice(5));
                  }
                }
              }
            }
          });

          this.GetPM().AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW"), function () {
            if (app) {
              app.afterSelection();
            }
          });

          SiebelAppFacade.obj1 = new SiebelAppFacade.IPRHelper({pm: pm});
        }

        DefaultFormAppletPR.prototype.ShowUI = function () {
      //    SiebelAppFacade.DefaultFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        DefaultFormAppletPR.prototype.BindEvents = function () {
    //      SiebelAppFacade.DefaultFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        DefaultFormAppletPR.prototype.BindData = function (bRefresh) {
  //        SiebelAppFacade.DefaultFormAppletPR.superclass.BindData.apply(this, arguments);
//return;

          var divId = "s_" + this.GetPM().Get("GetFullId") + "_div";

          //hide server rendered html
          $('#' + divId).find('form').hide();

          //is it a good enough place to initialize VUE.JS
          putVue(divId);
        }

        function putVue(divId) {
          $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet"></link>');
          $('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/vuetify.min.css"/>');
          $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');
          var html = '\
          <div id="app">                                                                                                                                        \n\
            <v-app>                                                                                                                                             \n\
              <v-flex>                                                                                                                                          \n\
                <v-layout row wrap>                                                                                                                             \n\
                <v-flex md6>                                                                                                                                    \n\
                  <v-text-field v-on:input="changeName" :readonly="caseNameRO" label="Case Name" v-model="caseName"></v-text-field>                             \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md6>                                                                                                                                             \n\
                  <v-checkbox v-on:change="changeInfoCheck" label="Info Changed" v-model="infoChanged"></v-checkbox>                                                     \n\
                </v-flex>                                                                                                                                                \n\
                <v-flex md6>                                                                                                                                             \n\
                  <v-select :items="caseStatusArr" v-on:click.native="clickStatus" v-on:change="changeStatus" v-model="caseStatus" label="Status"></v-select>            \n\
                </v-flex>                                                                                                                                                \n\
                <v-flex md6>                                                                                                                                             \n\
                  <v-select :items="caseSubStatusArr" v-on:click.native="clickSubStatus" v-on:change="changeSubStatus" v-model="caseSubStatus" label="SubStatus"></v-select>    \n\
                </v-flex>                                                                                                                                                       \n\
                <v-flex md12>                                                                                                                                                   \n\
                  <v-select :items="caseCategoryArr" v-on:change="changeCategory" v-model="caseCategory" label="Category"></v-select>                                           \n\
                </v-flex>                                                                                                                                                       \n\
                <v-flex md4>                                                                                                                                                    \n\
                    <v-btn v-on:click="saveButtonClick" color="primary">Save!</v-btn>                                                                                           \n\
                </v-flex>                                                                                                                                                       \n\
                <v-flex md4>                                                                                                                                                    \n\
                    <v-btn v-on:click="nextButtonClick" color="primary">Next!</v-btn>                                                                                           \n\
                </v-flex>                                                                                                                                                       \n\
                <v-flex md4>                                                                                                                                                    \n\
                    <v-btn v-on:click="newButtonClick" color="primary">New!</v-btn>                                                                                             \n\
                </v-flex>                                                                                                                                                       \n\
                </v-layout>                                                                                                                                                     \n\
              </v-flex>                                                                                                                                                         \n\
            </v-app>                                                                                                                                                            \n\
          </div>';

          $('#' + divId).append(html);

          app = new Vue({
            el: '#app',
            created: function() {
              console.log('VUE created');
            },
            mounted: function() {
              console.log('VUE mounted');
              controlCategory = pm.ExecuteMethod("GetControl", 'Category');
              var arr = controlCategory.GetRadioGroupPropSet().childArray;
              for (var i=0; i < arr.length; i++) {
                this.caseCategoryArr.push(arr[i].propArray.DisplayName);
              }
              this.afterSelection();
            },
            data: {
              caseName: '',
              caseStatus: '',
              caseSubStatus: '',
              caseCategory: '',
              infoChanged: false,
              canUpdateName: true,
              caseStatusArr: [],
              caseSubStatusArr: [],
              caseCategoryArr: []
            },
            computed: {
              caseNameRO: function () {
                return !this.canUpdateName;
              }
            },
            methods: {
              populateStatusArray: function(arr) {
                this.caseStatusArr = [this.caseStatus];
                for (var i = 0; i < arr.length; i++) {
                  if ((arr[i] != '') && (arr[i] != this.caseStatus)) {
                    this.caseStatusArr.push(arr[i]);
                  }
                }
              },
              populateSubStatusArray: function(arr) {
                this.caseSubStatusArr = this.caseSubStatus ? [this.caseSubStatus] : [];
                for (var i = 0; i < arr.length; i++) {
                  if ((arr[i] != '') && (arr[i] != this.caseSubStatus)) {
                    this.caseSubStatusArr.push(arr[i]);
                  }
                }
              },
              clickSubStatus: function() {
                console.log('clickSubStatus', arguments);
                //controlSubStatus = pm.ExecuteMethod("GetControl", 'Sub Status');
                var ps = SiebelApp.S_App.NewPropertySet();
                ps.SetProperty('SWEField', controlSubStatus.GetInputName());
                ps.SetProperty('SWEJI', false);
                controlSubStatus.GetApplet().InvokeMethod('GetQuickPickInfo', ps);
                //console.log(pm.OnControlEvent('invoke_combo', controlStatus));
              },
              clickStatus: function() { //TODO: WHAT IS THE BEST EVENT FOR IT
                console.log('clickStatus', arguments);
                //controlStatus = pm.ExecuteMethod("GetControl", 'Status');
                var ps = SiebelApp.S_App.NewPropertySet();
                ps.SetProperty('SWEField', controlStatus.GetInputName());
                ps.SetProperty('SWEJI', false);
                controlStatus.GetApplet().InvokeMethod('GetQuickPickInfo', ps);
                //console.log(pm.OnControlEvent('invoke_combo', controlStatus));
              },
              changeControl: function(control, value) {
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), control);
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), control, value);
              },
              changeStatus: function(value) {
                //could the input parameters to be sent from the control
                this.changeControl(controlStatus, value);
                if (controlStatus.IsPostChanges()) {
                  console.log('TODO: change status post changes');
                  this.afterSelection(); //?????????????????????
                }
              },
              changeSubStatus: function(value) {
                this.changeControl(controlSubStatus, value);
              },
              changeCategory: function(value) {
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlCategory);
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlCategory, value);
              },
              changeName: function() {
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlName);
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlName, this.caseName);
              },
              changeInfoCheck: function() {
                var newInfo = this.infoChanged ? 'Y' : 'N';
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlInfo);
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlInfo, newInfo);
                if (controlInfo.IsPostChanges()) {
                  this.canUpdateName = pm.ExecuteMethod("CanUpdate", controlName.GetName());
                }

              },
              newButtonClick: function() {
                SiebelApp.S_App.GetActiveView().SetActiveAppletInternal(SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName]);
                var ai = {
                  scope: {
                    cb: function () {
                      console.log('response in callback from new record >>>', arguments);
                      if (arguments[3]) {
                        console.log('new record was successful');
                        this.afterSelection();
                      } else {
                        console.log('new record WAS NOT successful');
                      }
                    }.bind(this)
                  }
                }
                SiebelApp.CommandManager.GetInstance().InvokeCommand.call(SiebelApp.CommandManager.GetInstance, "*Browser Applet* *NewRecord* * ", true, ai);
              },
              saveButtonClick: function() {
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
              },
              nextButtonClick: function() {
                if (!pm.ExecuteMethod("CanInvokeMethod", "GotoNextSet")) {
                  alert('GotoNextSet is not allowed to invoke ');
                } else {
                  //invoking the goto next set
                  var ps = SiebelApp.S_App.NewPropertySet();
                  ps.SetProperty('SWEApplet', appletName);
                  ps.SetProperty('SWEView', viewName);
                  SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].InvokeControlMethod('GotoNextSet', ps, {});
                }
              },
              afterSelection: function() {
                controlInfo = pm.ExecuteMethod("GetControl", 'InfoChanged');
                controlName = pm.ExecuteMethod("GetControl", 'Name');
                controlStatus = pm.ExecuteMethod("GetControl", 'Status');
                controlSubStatus = pm.ExecuteMethod("GetControl", 'Sub Status');
                controlCategory = pm.ExecuteMethod("GetControl", 'Category');

                this.canUpdateName = pm.ExecuteMethod("CanUpdate", controlName.GetName());
                var currentRecord = pm.Get("GetRecordSet")[pm.Get("GetSelection")];
                this.infoChanged = currentRecord['Info Changed Flag'] === 'Y';
                this.caseName = currentRecord.Name;
                this.caseStatus = currentRecord.Status;
                this.caseSubStatus = currentRecord['Sub Status'];
                console.log('after selection', this.caseSubStatus);
                this.caseStatusArr.push(this.caseStatus);
                this.caseSubStatusArr.push(this.caseSubStatus);
                this.caseCategory = currentRecord.Category;
                //pm.OnControlEvent('invoke_combo', controlStatus);
              }
            }
          });
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
