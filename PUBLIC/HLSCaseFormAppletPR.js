if (typeof (SiebelAppFacade.HLSCaseFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.HLSCaseFormAppletPR");
  define("siebel/custom/HLSCaseFormAppletPR", ["siebel/phyrenderer", "siebel/custom/vue.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.HLSCaseFormAppletPR = (function () {

        //for vue
        //todo: remove in EndLife
        $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet"></link>');
        $('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/vuetify.min.css"/>');
        $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');

        function HLSCaseFormAppletPR(pm) {
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(HLSCaseFormAppletPR, SiebelAppFacade.PhysicalRenderer);
        var app;
        var pm;
        var divId;
        var appletName;

        var controlInfo;
        var controlName;
        var controlCategory;
        var controlStatus;
        var controlThreatLevel;

        HLSCaseFormAppletPR.prototype.Init = function () {

          //hide the server rendered html, better to remove, but not now
          pm = this.GetPM();
          divId = "s_" + pm.Get("GetFullId") + "_div";
          document.querySelector('#' + divId + ' form').style.display = 'none';
          //document.querySelector('#' + divId + ' form').parentNode.removeChild('form');

          //todo: restore in EndLife?
          //todo: use applet.prototype.RepopulateField instead of it?
          SiebelAppFacade.N19notifyNewFieldData = SiebelApp.S_App.NotifyObject.prototype.NotifyNewFieldData;
          SiebelApp.S_App.NotifyObject.prototype.NotifyNewFieldData = function(name, value) {
            console.log('>>>>> new field data in notify object', arguments);
            if (app) {
              app.updateFieldData(name, value);
            }
            SiebelAppFacade.N19notifyNewFieldData.apply(this, arguments);
          }

          SiebelAppFacade.N19notifyNewPrimary = SiebelApp.S_App.NotifyObject.prototype.NotifyNewPrimary;
          SiebelApp.S_App.NotifyObject.prototype.NotifyNewPrimary = function() {
            console.log('>>>>> new primary in notify object', arguments);
            if (this.GetAppletRegistry()[0].GetName() === 'Contact Team Mvg Applet') {
              if (app) {
                app.updatePrimary();
              }
            }
            SiebelAppFacade.N19notifyNewPrimary.apply(this, arguments);
          }

          SiebelAppFacade.HLSCaseFormAppletPR.superclass.Init.apply(this, arguments);

          appletName = pm.Get("GetName");

          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });

          pm.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_GENERIC"), function (propSet) {
            var type = propSet.GetProperty(consts.get("SWE_PROP_NOTI_TYPE"));
            console.log('SWE_PROP_BC_NOTI_GENERIC ', type, propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'), function () {
            console.log('>>>SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW', arguments);
            if (app) {
              app.afterSelection();
            }
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_WORKSET'), function () {
            console.log('SWE_PROP_BC_NOTI_DELETE_WORKSET', arguments);
            // there is an only option FOR NOW to get a new record creation
            // need timeout to allow a new record to be created
            setTimeout(function() { // use INSERT_WS_DATA
              if (app) {
                app.afterSelection();
              }
            });
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'), function (ps) {
            console.log('SWE_PROP_BC_NOTI_STATE_CHANGED', arguments);
            if ('activeRow' === ps.GetProperty('state')) {
              console.log('>>>SWE_PROP_BC_NOTI_STATE_CHANGED', arguments);
              if (app) {
                app.afterSelection();
              }
            }
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_DATA_WS', arguments);
            var fieldName = propSet.GetProperty(consts.get("SWE_PROP_NOTI_FIELD")); // f
            if (fieldName === 'Sales Rep') {
              console.log('FIELD SALES REP UPDATED', propSet, propSet.childArray[0].GetProperty('ValueArray'));
              if (app) {
                var arr = [];
                CCFMiscUtil_StringToArray(propSet.childArray[0].GetProperty('ValueArray'), arr);
                setTimeout(function(){
                  app.updateSalesRep(arr[0]);
                });
              }
            }
          });

          pm.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_BEGIN"), function () {
            console.log('SWE_PROP_BC_NOTI_BEGIN', arguments);
          });

          pm.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_LONG_OPERATION_PROCESS"), function () {
            console.log('SWE_PROP_BC_NOTI_LONG_OPERATION_PROCESS', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NEW_ACTIVE_FIELD'), function () {
            console.log('SWE_PROP_BC_NEW_ACTIVE_FIELD', arguments);
          });

          pm.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_END"), function () {
            console.log('SWE_PROP_BC_NOTI_END', arguments);
          });

          pm.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_NEW_SELECTION"), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_SELECTION', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA'), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_DATA', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'), function () {
            console.log('SWE_PROP_BC_NOTI_DELETE_RECORD', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_PRIMARY'), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_PRIMARY', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_INSERT_WORKSET'), function () {
            //todo: get a new record here?
            console.log('SWE_PROP_BC_NOTI_INSERT_WORKSET', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_INSERT_WORKSET_FIELD_VALUES'), function () {
            //todo: get a new record here?
            console.log('SWE_PROP_BC_NOTI_INSERT_WORKSET_FIELD_VALUES', arguments);
          });


          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_EXECUTE'), function () {
            console.log('SWE_PROP_BC_NOTI_EXECUTE', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_CHANGE_SELECTION'), function () {
            console.log('SWE_PROP_BC_NOTI_CHANGE_SELECTION', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE'), function () {
            console.log('SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE', arguments);
          });


          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END_QUERY'), function () {
            console.log('SWE_PROP_BC_NOTI_END_QUERY', arguments);
          });

          pm.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_NEW_RECORD"), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD', arguments);
          });

          pm.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_NEW_RECORD_DATA"), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD_DATA', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS'), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_SCROLL_DATA'), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD_SCROLL_DATA', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_PAGE_REFRESH'), function () {
            console.log('SWE_PROP_BC_NOTI_PAGE_REFRESH', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_DATA'), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_FIELD_DATA', arguments);
          });

          pm.AddMethod("InvokeMethod", this.preInvokeMethod, {
            sequence: true,
            scope: this
          });

          this.AttachPMBinding('isControlPopupOpen', (...args) => {
            // combobox and probably pickapplets also?
            console.log('>>><<<isControlPopupOpen', args); // eslint-disable-line no-console
          });
        }

        HLSCaseFormAppletPR.prototype.UpdatePick = function() {
          console.log('update pick called'); //todo - move into N19Helper?
        }

        HLSCaseFormAppletPR.prototype.preInvokeMethod = function (methodName, args, lp, returnStructure) {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": HLSCaseFormAppletPR:      preInvokeMethod -  " + methodName);
        }

        HLSCaseFormAppletPR.prototype.ShowUI = function () {
          //SiebelAppFacade.HLSCaseFormAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        HLSCaseFormAppletPR.prototype.BindEvents = function () {
          //SiebelAppFacade.HLSCaseFormAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        HLSCaseFormAppletPR.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.HLSCaseFormAppletPR.superclass.BindData.apply(this, arguments);

          document.getElementById('_sweview').title = '';
          //$('#_swecontent').css({ 'height': 'auto' });

          //is it a good enough place to initialize VUE.JS?
          putVue(divId);
        }

        function putVue(divId) {
          var html = '\
          <div id="app">                                                                                                                                        \n\
            <v-app id="inspire">                                                                                                                                \n\
            <v-snackbar v-model="snackbar" :timeout="3000" :top="true">Record saved<v-btn color="pink" flat @click="snackbar = false">Close</v-btn></v-snackbar>\n\
            <v-container fluid>                                                                                                                                 \n\
                <v-layout row wrap>                                                                                                                             \n\
                <v-flex md12 pa-2>                                                                                                                              \n\
                  <v-alert :value="true" type="info">HLS Case Form Applet rendered by VUE.JS PR</v-alert>                                                       \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md6 pa-2>                                                                                                                               \n\
                  <v-text-field :rules="[rules.required]" v-on:input="changeName" ref="caseName" :disabled="!canUpdateName" label="Case Name" v-model="caseName" clearable v-on:keyup.esc="escapeOnName" v-on:click:clear="handleClear" counter="100"></v-text-field> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md6 pa-2>                                                                                                                               \n\
                  <v-switch v-on:change="changeInfoCheck" label="Case Name ReadOnly (configured in Siebel Tools)" v-model="infoChanged"></v-switch>             \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-select box :items="caseStatusArr" v-on:click.native="clickStatus" v-on:change="changeStatus" v-model="caseStatus" label="Status"></v-select> \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                  <v-select box :items="caseSubStatusArr" v-on:click.native="clickSubStatus" v-on:change="changeSubStatus" v-model="caseSubStatus" label="SubStatus"></v-select>  \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                  <v-autocomplete v-model="caseCategory" :items="caseCategoryArr" v-on:change="changeCategory" label="Category">                  \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md6 pa-2>                                                                                                                                                 \n\
                <v-label>Threat Level: {{this.caseThreatLevel}}</v-label><span>                                                                                                   \n\
                  <v-rating :background-color="ratingColor" :color="ratingColor" :readonly="!canUpdateThreatLevel" v-on:input="changeThreatLevel" v-model="caseThreatLevelNum" clearable length="3" label="Threat Level"></v-rating>  \n\
                </span></v-flex>                                                                                                                                \n\
                <v-flex md6 pa-2>                                                                                                                               \n\
                  <v-label>Sales Rep:</v-label>                                                                                                                 \n\
                  <v-tooltip top v-for="salesRep in caseSalesRepArr" >                                                                                          \n\
                  <v-chip slot="activator" :close="!salesRep.primary" @input="clickDeleteSalesRep(salesRep)"><v-avatar :class="{teal : !salesRep.primary}">  \n\
                  <v-icon v-if="salesRep.primary">check_circle</v-icon>{{salesRep.primary ? "" : salesRep.login[0]}}</v-avatar>{{salesRep.login}}</v-chip>      \n\
                  <span>{{salesRep.firstName + " " + salesRep.lastName}}</span></v-tooltip>                                                                     \n\
                  <v-btn flat icon v-on:click="addSalesRep" color="indigo"><v-icon>edit</v-icon></v-btn>                                                        \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md12 pa-2>                                                                                                                              \n\
                  <v-textarea v-on:change="changeDescription" rows="7" label="Description" v-model="caseDescription" counter="2000" box name="input-7-1"></v-textarea> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md12 pa-2>                                                                                                                              \n\
                  <v-divider></v-divider>                                                                                                                       \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn v-on:click="saveButtonClick" color="primary"><v-icon>save</v-icon>Save!</v-btn>                                                        \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md9 pa-2>                                                                                                                               \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-tooltip top><v-btn slot="activator" v-on:click="prevButtonClick" color="primary"><v-icon>navigate_before</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>  \n\
                </v-flex>                                                                                                                                                                         \n\
                <v-flex md1 pa-2>                                                                                                                                                                 \n\
                  <v-tooltip top><v-btn slot="activator" v-on:click="nextButtonClick" color="primary"><v-icon>navigate_next</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>    \n\
                </v-flex>                                                                                                                                                                         \n\
                <v-fab-transition>                                                                            \n\
                  <v-btn v-on:click="newButtonClick" v-show="true" color="pink" dark fixed bottom right fab>  \n\
                    <v-icon>add</v-icon>                                                                      \n\
                  </v-btn>                                                                                    \n\
                </v-fab-transition>                                                                           \n\
                </v-layout>                                                                                   \n\
              </v-container></v-app>                                                                          \n\
          </div>';

          $('#' + divId).append(html);

          app = new Vue({
            el: '#app',
            mounted: function () {
              controlCategory = pm.ExecuteMethod("GetControl", 'Category');
              var arr = controlCategory.GetRadioGroupPropSet().childArray;
              for (var i = 0; i < arr.length; i++) {
                this.caseCategoryArr.push(arr[i].propArray.DisplayName);
              }
              this.caseCategoryArr.sort();
              this.afterSelection();
              $('.application--wrap').css({ 'min-height': 'auto' });
            },
            data: {
              rules: {
                required: function (value) {
                  return !!value || 'Required.';
                }
              },
              snackbar: false,
              caseName: '',
              caseStatus: '',
              caseSubStatus: '',
              caseCategory: '',
              infoChanged: false,
              canUpdateName: true,
              canUpdateThreatLevel: true,
              caseStatusArr: [],
              caseSubStatusArr: [],
              caseCategoryArr: [],
              caseDescription: '',
              caseThreatLevelNum: 0,
              caseThreatLevel: '',
              caseSalesRep: '',
              threatLevel: ['Low', 'Medium', 'High'],
              caseSalesRepArr: []
            },
            computed: {
              ratingColor: function() {
                return this.canUpdateThreatLevel ? 'red' : 'grey';
              }
            },
            methods: {
              changeDescription(val) {
                SiebelAppFacade.N19[appletName].setControlValue('Description', val);
              },
              changeThreatLevel(val) {
                this.caseThreatLevel = val > 0 ? this.threatLevel[val-1] : '';
                SiebelAppFacade.N19[appletName].setControlValue('Threat Level', this.caseThreatLevel);
              },
              changeSubStatus: function (val) {
                SiebelAppFacade.N19[appletName].setControlValue('Sub Status', val);
              },
              changeCategory: function (val) {
                SiebelAppFacade.N19[appletName].setControlValue('Category', val);
              },
              changeName: function (value) {
                SiebelAppFacade.N19[appletName].setControlValue('Name', value);
              },
              changeInfoCheck: function (value) {
                SiebelAppFacade.N19[appletName].setControlValue('InfoChanged',  value);
                if (controlInfo.IsPostChanges()) {
                  this.canUpdateName = pm.ExecuteMethod("CanUpdate", controlName.GetName());
                  setTimeout(function () {
                    this.$refs.caseName.focus();
                  }.bind(this));
                }
              },
              changeStatus: function (value) {
                var isChanged = SiebelAppFacade.N19[appletName].setControlValue('Status',  value);
                if (isChanged && controlStatus.IsPostChanges()) {
                  console.log('change status post changes');
                  this.afterSelection();
                } else {
                  //is it the only option for rollback - todo
                  var currentRecord = pm.Get("GetRecordSet")[pm.Get("GetSelection")];
                  pm.OnControlEvent(consts.get("PHYEVENT_CONTROL_BLUR"), controlStatus, currentRecord.Status);
                  Vue.nextTick(function () {
                    this.caseStatusArr = [currentRecord.Status];
                    this.caseStatus = currentRecord.Status;
                  }.bind(this))
                }
              },
              clickSubStatus: function () {
                var arr = SiebelAppFacade.N19[appletName].getDynamicLOV('Sub Status');
                this.caseSubStatusArr = this.caseSubStatus ? [this.caseSubStatus] : [];
                for (var i = 0; i < arr.length; i++) {
                  if ((arr[i] != '') && (arr[i] != this.caseSubStatus)) {
                    this.caseSubStatusArr.push(arr[i]);
                  }
                }
              },
              clickStatus: function () {
                var arr = SiebelAppFacade.N19[appletName].getDynamicLOV('Status');
                this.caseStatusArr = [this.caseStatus];
                for (var i = 0; i < arr.length; i++) {
                  if ((arr[i] != '') && (arr[i] != this.caseStatus)) {
                    this.caseStatusArr.push(arr[i]);
                  }
                }
              },
              escapeOnName: function() {
                this.caseName = pm.Get("GetRecordSet")[pm.Get("GetSelection")].Name;
              },
              handleClear: function() { // this is needed because clearing set the model value to null
                this.caseName = '';     // maybe it is not needed if we handle it at N19
                this.changeName();
              },
              newButtonClick: function () {
                SiebelAppFacade.N19[appletName].newRecord(function() {
                  this.afterSelection();
                  this.$refs.caseName.focus();
                }.bind(this));
              },
              saveButtonClick: function () {
                SiebelAppFacade.N19[appletName].writeRecord(function() {
                  this.snackbar = true;
                }.bind(this));
              },
              nextButtonClick: function () {
                if (!pm.ExecuteMethod("CanInvokeMethod", "GotoNextSet")) {
                  alert('GotoNextSet is not allowed to invoke ');
                } else {
                  SiebelAppFacade.N19[appletName].nextRecord();
                }
              },
              prevButtonClick: function () {
                if (!pm.ExecuteMethod("CanInvokeMethod", "GotoPreviousSet")) {
                  alert('GotoPreviousSet is not allowed to invoke ');
                } else {
                  SiebelAppFacade.N19[appletName].prevRecord();
                }
              },
              getSalesRep: function(val) {
                if ((pm.Get("GetBusComp").insertPending)) {
                  if (val) {
                    if (!this.caseSalesRepArr.some(e => e.login === val)) {
                      this.caseSalesRepArr.push({
                        firstName: '',
                        lastName: '',
                        primary: false,
                        login: val
                      });
                    }
                  }
                  return;
                }

                if (SiebelApp.S_App.GetActiveBusObj().GetBusCompByName('Position')) {
                  var arr = SiebelApp.S_App.GetActiveBusObj().GetBusCompByName('Position').GetRecordSet();
                  if (arr) {
                    this.caseSalesRepArr = [];
                    for (var i = 0; i < arr.length; i++) {
                      console.log('from definition of active bus object', arr[i]);
                      var obj = {
                        firstName: arr[i]["Active First Name"],
                        lastName: arr[i]["Active Last Name"],
                        primary: arr[i]["SSA Primary Field"] == 'Y',
                        login: arr[i]["Active Login Name"]
                      }
                      this.caseSalesRepArr.push(obj);
                    }
                    return;
                  }
                }

                //we don't have an object yet
                var service = SiebelApp.S_App.GetService("N19 BS");
                if (service) {
                  var ai = {
                    async: true,
                    selfbusy: true,
                    scope: this,
                    cb: function (method, psInput, psOutput) {
                      console.log('BS output to get the sales reps...', psOutput.childArray);

                      var resultSet = psOutput.GetChildByType("ResultSet");
                      if (resultSet) {
                        this.caseSalesRepArr = [];
                        for (var i = 0; i < resultSet.GetChildCount(); i++) {
                          console.log(resultSet.GetChild(i));
                          var obj = {
                            firstName: resultSet.GetChild(i).GetProperty('First'),
                            lastName: resultSet.GetChild(i).GetProperty('Last'),
                            primary: resultSet.GetChild(i).GetProperty('Primary') === 'Y',
                            login: resultSet.GetChild(i).GetProperty('Login')
                          }
                          this.caseSalesRepArr.push(obj);
                        }
                      }
                    }
                  };
                  service.InvokeMethod("GetSalesRep", null, ai);
                }
              },
              updateFieldData(name, value) {
                console.log('updateFieldData', arguments);
                if (typeof value === 'undefined') {
                  var rec = SiebelAppFacade.N19[appletName].getRecordSet()[SiebelAppFacade.N19[appletName].getSelection()];
                  console.log(rec);
                  value = rec[name];
                  console.log(value);
                }
                switch(name) {
                  case 'Name':
                    this.caseName = value;
                    break;
                  case 'Status':
                    this.caseStatus = value;
                    this.caseStatusArr = [this.caseStatus];
                    break;
                  case 'Sub Status':
                    this.caseSubStatus = value;
                    this.caseSubStatusArr = [this.caseSubStatus];
                    break;
                }
              },
              updatePrimary() {
                console.log('<<< change case primary to <<<', this.caseSalesRep);
                for (var i = 0; i < this.caseSalesRepArr.length; i++) {
                  this.caseSalesRepArr[i].primary = this.caseSalesRepArr[i].login == this.caseSalesRep;
                }
                console.log(this.caseSalesRepArr);
              },
              updateSalesRep(val) {
                console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< update sales rep', val);
                if (val != this.caseSalesRep) {
                  this.caseSalesRep = val;
                  this.getSalesRep(val); //cycled calling of update sales rep
                }
              },
              addSalesRep() {
                console.log('addSalesRep', arguments);
                SiebelAppFacade.N19[appletName].showMvgApplet('Sales Rep');
              },
              clickDeleteSalesRep(salesRep) {
                console.log('chip input', salesRep, salesRep.login, this.caseSalesRep.length);
                var index = -1;
                for (var i = 0; i < this.caseSalesRepArr.length; i++) {
                  console.log(this.caseSalesRepArr[i].login);
                  if (this.caseSalesRepArr[i].login == salesRep.login) {
                    index = i;
                    this.caseSalesRepArr.splice(index, 1);
                    break;
                  }
                }
                if ((pm.Get("GetBusComp").insertPending)) {
                  return; //skip update
                }
                if (index > -1) {
                  var service = SiebelApp.S_App.GetService("N19 BS");
                  if (service) {
                    var psInput = SiebelApp.S_App.NewPropertySet();
                    psInput.SetProperty('Login', salesRep.login);
                    var ai = {
                      async: true,
                      selfbusy: true,
                      scope: this,
                      cb: function (method, psInput, psOutput) {
                        console.log('BS output to get the sales reps...', psOutput);
                        SiebelAppFacade.N19[appletName].NotifyNewDataWS('Sales Rep');
                      }
                    };
                    service.InvokeMethod("DeleteSalesRep", psInput, ai);
                  }
                }
              },
              afterSelection: function () {
                console.log('>>>>>>>>> AFTER SELECTION');
                controlInfo = pm.ExecuteMethod("GetControl", 'InfoChanged');
                controlName = pm.ExecuteMethod("GetControl", 'Name');
                controlStatus = pm.ExecuteMethod("GetControl", 'Status');
                controlCategory = pm.ExecuteMethod("GetControl", 'Category');
                controlThreatLevel = pm.ExecuteMethod("GetControl", 'Threat Level');

                this.canUpdateName = pm.ExecuteMethod("CanUpdate", controlName.GetName());
                this.canUpdateThreatLevel = pm.ExecuteMethod("CanUpdate", controlThreatLevel.GetName());

                var i = [pm.Get('GetSelection')];
                if (i > -1) {
                  var currentRecord = pm.Get('GetRecordSet')[i];
                  this.infoChanged = currentRecord['Info Changed Flag'] === 'Y';
                  this.caseName = currentRecord.Name;
                  this.caseStatus = currentRecord.Status;
                  this.caseSubStatus = currentRecord['Sub Status'];
                  this.caseStatusArr = [this.caseStatus];
                  this.caseSubStatusArr = [this.caseSubStatus];
                  this.caseCategory = currentRecord.Category;
                  this.caseDescription = currentRecord.Description;
                  this.caseThreatLevel = currentRecord['Threat Level'];
                  this.caseThreatLevelNum = this.threatLevel.indexOf(this.caseThreatLevel) + 1;
                  this.caseSalesRep = currentRecord['Sales Rep'];
                  console.log('before calling sales rep', this.caseSalesRep );
                  if (pm.Get("GetBusComp").insertPending) {
                    console.log('skipped calling sales rep BS because insert pending');
                    this.caseSalesRepArr = [{
                      firstName: '',
                      lastName: '',
                      primary: true,
                      login: this.caseSalesRep
                    }];
                  } else {
                    this.getSalesRep();
                  }
                } else { // no records displayed
                  this.infoChanged = false;
                  this.caseName = '';
                  this.caseStatus = '';
                  this.caseSubStatus = '';
                  this.caseStatusArr = [];
                  this.caseSubStatusArr = [];
                  this.caseCategory = '';
                  this.caseDescription = '';
                  this.caseThreatLevel = '';
                  this.caseSalesRep = '';
                  this.caseSalesRepArr = [];
                }
              }
            }
          });
        }

        HLSCaseFormAppletPR.prototype.EndLife = function () {
          if (app) {
            app.$destroy(true);
            $('#app').remove();
            app = null;
          }
          $("link[href*='vuetify.min.css']").remove();
          if (SiebelAppFacade.N19[appletName]) {
            delete SiebelAppFacade.N19[appletName];
          }
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return HLSCaseFormAppletPR;
      }()
      );
      return "SiebelAppFacade.HLSCaseFormAppletPR";
    })
}
