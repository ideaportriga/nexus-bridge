if (typeof (SiebelAppFacade.HLSCaseFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.HLSCaseFormAppletPR");
  define("siebel/custom/HLSCaseFormAppletPR", ["siebel/phyrenderer", "siebel/custom/vue.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.HLSCaseFormAppletPR = (function () {

        function HLSCaseFormAppletPR(pm) {
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(HLSCaseFormAppletPR, SiebelAppFacade.PhysicalRenderer);
        var app;
        var pm;
        var appletName;
        var viewName;
        var controlInfo;
        var controlName;
        var controlCategory;
        var controlStatus;
        var controlSubStatus;
        var controlDescription;

        HLSCaseFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.Init.apply(this, arguments);
          pm = this.GetPM();
          appletName = pm.Get("GetName");
          viewName = SiebelApp.S_App.GetActiveView().GetName();

          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });

          this.GetPM().AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_GENERIC"), function (propSet) {
            var type = propSet.GetProperty(consts.get("SWE_PROP_NOTI_TYPE"));
            if (type === "GetQuickPickInfo") {
              var arr = [];
              CCFMiscUtil_StringToArray(propSet.GetProperty(consts.get("SWE_PROP_ARGS_ARRAY")), arr);
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
            console.log('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW');
            if (app) {
              app.afterSelection();
            }
          });

          this.GetPM().AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_DELETE_WORKSET"), function () {
            console.log('SWE_PROP_BC_NOTI_DELETE_WORKSET');
            if (app) {
              app.afterSelection();
            }
          });
          this.GetPM().AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_STATE_CHANGED"), function () {
            console.log('SWE_PROP_BC_NOTI_STATE_CHANGED');
          });

        }

        HLSCaseFormAppletPR.prototype.ShowUI = function () {
          //    SiebelAppFacade.HLSCaseFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        HLSCaseFormAppletPR.prototype.BindEvents = function () {
          //      SiebelAppFacade.HLSCaseFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        HLSCaseFormAppletPR.prototype.BindData = function (bRefresh) {
          //        SiebelAppFacade.HLSCaseFormAppletPR.superclass.BindData.apply(this, arguments);
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
            <v-app id="inspire"><v-container fluid>                                                                                                                                             \n\
                <v-layout row wrap>                                                                                                                             \n\
                <v-flex md12 pa-2>                                                                                                                              \n\
                  <v-alert :value="true" type="info">HLS Case Form Applet rendered by VUE.JS PR</v-alert>                                                    \n\
                </v-flex>                                                                      \n\
                <v-flex md6 pa-2>                                   \n\
                  <v-text-field :rules="[rules.required]" v-on:input="changeName" ref="caseName" :disabled="caseNameRO" label="Case Name" v-model="caseName" clearable counter="100"></v-text-field>                             \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md6 pa-2>                                                                                                                               \n\
                  <v-switch v-on:change="changeInfoCheck" label="Case Name ReadOnly (configured in Siebel Tools)" v-model="infoChanged"></v-switch>             \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-select @input="inputStatus" box :items="caseStatusArr" v-on:click.native="clickStatus" v-on:change="changeStatus" v-model="caseStatus" label="Status"></v-select>                 \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                  <v-select box :items="caseSubStatusArr" v-on:click.native="clickSubStatus" v-on:change="changeSubStatus" v-model="caseSubStatus" label="SubStatus"></v-select>  \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>  \n\
                  <v-autocomplete v-model="caseCategory" v-on:click.native="fixPosition" :items="caseCategoryArr" v-on:change="changeCategory" label="Category"> \n\
                </v-flex>    \n\
                <v-flex md12 pa-2>  \n\
                  <v-textarea rows="7" label="Description" v-model="caseDescription" counter="2000" box name="input-7-1"></v-textarea> \n\
                </v-flex>    \n\
                <v-flex md12 pa-2>                                                                                                                              \n\
                  <v-divider></v-divider>                                                                                                                                                  \n\
                </v-flex>                                                                                                                              \n\
                <v-flex md1 pa-2>                                                                                                                                                    \n\
                    <v-btn v-on:click="saveButtonClick" color="primary"><v-icon>save</v-icon>Save!</v-btn>                                                                                           \n\
                </v-flex>                                                                                                                                                       \n\
                <v-flex md9 pa-2>                                                                                                                                                    \n\
                </v-flex>                                                                                                                                                    \n\
                <v-flex md1 pa-2>                                                                                                                                                    \n\
                  <v-tooltip top><v-btn slot="activator" v-on:click="prevButtonClick" color="primary"><v-icon>navigate_before</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>                                                                                       \n\
                </v-flex>                                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                                                    \n\
                <v-tooltip top><v-btn slot="activator" v-on:click="nextButtonClick" color="primary"><v-icon>navigate_next</v-icon></v-btn><span>Go to the previous record</span></v-tooltip> \n\
                </v-flex>                                                                                                                                                       \n\
                <v-fab-transition> \n\
                  <v-btn v-on:click="newButtonClick" v-show="true" color="pink" dark fixed bottom right fab> \n\
                    <v-icon>add</v-icon> \n\
                  </v-btn> \n\
                </v-fab-transition> \n\
                </v-layout>                                                                                                                                                     \n\
              </v-container></v-app>                                                                                                                                                            \n\
          </div>';

          $('#' + divId).append(html);

          app = new Vue({
            el: '#app',
            created: function () {
              console.log('VUE created');
            },
            mounted: function () {
              console.log('VUE mounted');
              controlCategory = pm.ExecuteMethod("GetControl", 'Category');
              var arr = controlCategory.GetRadioGroupPropSet().childArray;
              for (var i = 0; i < arr.length; i++) {
                this.caseCategoryArr.push(arr[i].propArray.DisplayName);
              }
              this.caseCategoryArr.sort();
              this.afterSelection();
              $('.application--wrap').css({ 'min-height': 'auto' });
              //$('#_swecontent').css({'height': 'auto'});

            },
            data: {
              rules: {
                required: function (value) {
                  return !!value || 'Required.';
                }
              },

              caseName: '',
              caseStatus: '',
              caseSubStatus: '',
              caseCategory: '',
              infoChanged: false,
              canUpdateName: true,
              caseStatusArr: [],
              caseSubStatusArr: [],
              caseCategoryArr: [],
              caseDescription: ''
            },
            computed: {
              caseNameRO: function () {
                return !this.canUpdateName;
              }
            },
            methods: {
              fixPosition() {
                //shame - just for demo
                var i = Math.round($('.v-select__slot')[0].getBoundingClientRect().top);
                setTimeout(function () {
                  var j = i + 0 + 'px';
                  $('.v-menu__content').css('top', j);
                }, 10);
              },
              inputStatus: function () {
                console.log('inputStatus', arguments, this.caseStatus);
              },
              populateStatusArray: function (arr) {
                this.caseStatusArr = [this.caseStatus];
                for (var i = 0; i < arr.length; i++) {
                  if ((arr[i] != '') && (arr[i] != this.caseStatus)) {
                    this.caseStatusArr.push(arr[i]);
                  }
                }
              },
              populateSubStatusArray: function (arr) {
                this.caseSubStatusArr = this.caseSubStatus ? [this.caseSubStatus] : [];
                for (var i = 0; i < arr.length; i++) {
                  if ((arr[i] != '') && (arr[i] != this.caseSubStatus)) {
                    this.caseSubStatusArr.push(arr[i]);
                  }
                }
              },
              clickSubStatus: function () {
                console.log('clickSubStatus', arguments);
                //controlSubStatus = pm.ExecuteMethod("GetControl", 'Sub Status');
                var ps = SiebelApp.S_App.NewPropertySet();
                ps.SetProperty('SWEField', controlSubStatus.GetInputName());
                ps.SetProperty('SWEJI', false);
                controlSubStatus.GetApplet().InvokeMethod('GetQuickPickInfo', ps);
                //console.log(pm.OnControlEvent('invoke_combo', controlStatus));
                //shame
                this.fixPosition();
              },
              clickStatus: function () { //TODO: WHAT IS THE BEST EVENT FOR IT
                console.log('clickStatus', arguments);
                //controlStatus = pm.ExecuteMethod("GetControl", 'Status');
                var ps = SiebelApp.S_App.NewPropertySet();
                ps.SetProperty('SWEField', controlStatus.GetInputName());
                ps.SetProperty('SWEJI', false);
                controlStatus.GetApplet().InvokeMethod('GetQuickPickInfo', ps);
                //shame
                this.fixPosition();
              },
              changeControl: function (control, value) {
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), control);
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), control, value);
              },
              changeStatus: function (value) {
                //could the input parameters to be sent from the control
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlStatus);
                var isChanged = pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlStatus, value);
                if (isChanged) {
                  if (controlStatus.IsPostChanges()) {
                    console.log('change status post changes');
                    this.afterSelection();
                  }
                } else {
                  //is it the only option?
                  var currentRecord = pm.Get("GetRecordSet")[pm.Get("GetSelection")];
                  pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlStatus, currentRecord.Status);
                  Vue.nextTick(function () {
                    //console.log('vue next tick')
                    this.caseStatusArr = [currentRecord.Status];
                    //this.caseStatusArr.push(currentRecord.Status);
                    this.caseStatus = currentRecord.Status;
                  }.bind(this))
                }
              },
              changeSubStatus: function (value) {
                this.changeControl(controlSubStatus, value);
              },
              changeCategory: function (value) {
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlCategory);
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlCategory, value);
              },
              changeName: function () {
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlName);
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlName, this.caseName);
              },
              changeInfoCheck: function () {
                var newInfo = this.infoChanged ? 'Y' : 'N';
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_FOCUS"), controlInfo);
                pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlInfo, newInfo);
                if (controlInfo.IsPostChanges()) {
                  this.canUpdateName = pm.ExecuteMethod("CanUpdate", controlName.GetName());
                  setTimeout(function () {
                    this.$refs.caseName.focus();
                  }.bind(this));
                }
              },
              newButtonClick: function () {
                //SiebelApp.S_App.GetActiveView().SetActiveAppletInternal(SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName]);
                var ai = {
                  scope: {
                    cb: function () {
                      console.log('response in callback from new record >>>', arguments);
                      if (arguments[3]) {
                        console.log('new record was successful');
                        //this.afterSelection();
                      } else {
                        console.log('new record WAS NOT successful');
                      }
                    }.bind(this)
                  }
                }
                SiebelApp.CommandManager.GetInstance().InvokeCommand.call(SiebelApp.CommandManager.GetInstance, "*Browser Applet* *NewRecord* * ", true, ai);

                setTimeout(function () {
                  this.$refs.caseName.focus();
                }.bind(this));
              },
              saveButtonClick: function () {
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
              nextButtonClick: function () {
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
              prevButtonClick: function () {
                if (!pm.ExecuteMethod("CanInvokeMethod", "GotoPreviousSet")) {
                  alert('GotoPreviousSet is not allowed to invoke ');
                } else {
                  var ps = SiebelApp.S_App.NewPropertySet();
                  ps.SetProperty('SWEApplet', appletName);
                  ps.SetProperty('SWEView', viewName);
                  SiebelApp.S_App.GetActiveView().GetAppletMap()[appletName].InvokeControlMethod('GotoPreviousSet', ps, {});
                }
              },
              afterSelection: function () {
                controlInfo = pm.ExecuteMethod("GetControl", 'InfoChanged');
                controlName = pm.ExecuteMethod("GetControl", 'Name');
                controlStatus = pm.ExecuteMethod("GetControl", 'Status');
                controlSubStatus = pm.ExecuteMethod("GetControl", 'Sub Status');
                controlCategory = pm.ExecuteMethod("GetControl", 'Category');
                controlDescription = pm.ExecuteMethod("GetControl", 'Description');

                this.canUpdateName = pm.ExecuteMethod("CanUpdate", controlName.GetName());
                var currentRecord = pm.Get("GetRecordSet")[pm.Get("GetSelection")];
                this.infoChanged = currentRecord['Info Changed Flag'] === 'Y';
                this.caseName = currentRecord.Name;
                this.caseStatus = currentRecord.Status;
                this.caseSubStatus = currentRecord['Sub Status'];
                this.caseStatusArr = [this.caseStatus];
                this.caseSubStatusArr = [this.caseSubStatus];
                this.caseCategory = currentRecord.Category;
                this.caseDescription = currentRecord.Description;

                //pm.OnControlEvent('invoke_combo', controlStatus);
              }
            }
          });
        }

        HLSCaseFormAppletPR.prototype.EndLife = function () {
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return HLSCaseFormAppletPR;
      }()
      );
      return "SiebelAppFacade.HLSCaseFormAppletPR";
    })
}
