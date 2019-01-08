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
        var divId;
        var n19helper;
        var skipVue = true;
        var appletName;

        HLSCaseFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.Init.apply(this, arguments);

          document.addEventListener('UpdateMVG', function(event) {
            if (app) {
              app.getSalesRep();
            }
          });

          var pm = this.GetPM();

          // initialize helper
          appletName = pm.Get('GetName');
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
          n19helper = SiebelAppFacade.N19[appletName];

          var viewName = SiebelApp.S_App.GetActiveView().GetName();
          skipVue = viewName.indexOf('List View') === -1;
          if (skipVue) {
            return;
          }

          // todo: remove in EndLife
          $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet"></link>');
          $('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/vuetify.min.css"/>');
          $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');

          pm.AddMethod('InvokeMethod', function (method) {
            console.log('>>> InvokeMethod sequence true', method, arguments);
          }, { sequence: true, scope: this });

          pm.AddMethod('InvokeMethod', function (method) {
            console.log('>>> InvokeMethod sequence false', method, arguments);
          }, { sequence: false, scope: this });

          pm.AttachPostProxyExecuteBinding("ALL", function (method) {
            console.log('>>> AttachPostProxyExecuteBinding', method, arguments);
          });

          //hide the server rendered html, better to remove, but not now
          divId = "s_" + pm.Get('GetFullId') + "_div";
          document.querySelector('#' + divId + ' form').style.display = 'none';
          //document.querySelector('#' + divId + ' form').parentNode.removeChild('form');

          // for commit pending indicator
          document.getElementById(divId).classList.add('siebui-applet', 'siebui-active');

          //todo: maybe use applet.prototype.RepopulateField instead of it?
          SiebelAppFacade.N19notifyNewFieldData = SiebelApp.S_App.NotifyObject.prototype.NotifyNewFieldData;
          SiebelApp.S_App.NotifyObject.prototype.NotifyNewFieldData = function (name, value) {
            SiebelAppFacade.N19notifyNewFieldData.apply(this, arguments);
            if (app) {
              app.updateFieldData(name, value);
            }
          }

          SiebelAppFacade.N19notifyNewPrimary = SiebelApp.S_App.NotifyObject.prototype.NotifyNewPrimary;
          SiebelApp.S_App.NotifyObject.prototype.NotifyNewPrimary = function () {
            SiebelAppFacade.N19notifyNewPrimary.apply(this, arguments);
            if (this.GetAppletRegistry()[0].GetName() === 'Contact Team Mvg Applet') { // todo: change it
              if (app) {
                app.updatePrimary();
              }
            }
          }

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

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'), function (ps) {
            console.log('SWE_PROP_BC_NOTI_STATE_CHANGED', arguments, ps.GetProperty('state'));
            // do we need 'activeRow'?
            if ('activeRow' === ps.GetProperty('state')) {
              console.log('>>>SWE_PROP_BC_NOTI_STATE_CHANGED', arguments);
              if (app) {
                app.afterSelection();
              }
            }
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_DATA_WS', arguments);
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

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'), function (propSet) {
            var bSetup = propSet.GetProperty('bSetup');
            console.log('SWE_PROP_BC_NOTI_DELETE_RECORD', arguments, bSetup);
            // in demo called twice, first time bSetup is "true", second time is "false"
            if (bSetup === "false") {
              if (app) {
                app.afterSelection();
              }
            }
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_PRIMARY'), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_PRIMARY', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_INSERT_WORKSET'), function () {
            console.log('SWE_PROP_BC_NOTI_INSERT_WORKSET', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_INSERT_WORKSET_FIELD_VALUES'), function () {
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

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN_QUERY'), function () {
            console.log('SWE_PROP_BC_NOTI_BEGIN_QUERY', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_QUERYSPEC'), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_QUERYSPEC', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC'), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC', arguments);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END_QUERY'), function () {
            console.log('SWE_PROP_BC_NOTI_END_QUERY', arguments);
          });

          pm.AttachNotificationHandler(consts.get("SWE_PROP_BC_NOTI_NEW_RECORD"), function () {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD', arguments);
            if (app) {
              app.afterSelection();
            }
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
        }

        HLSCaseFormAppletPR.prototype.preInvokeMethod = function (methodName, args, lp, returnStructure) {
          SiebelJS.Log(this.GetPM().Get("GetName") + ": HLSCaseFormAppletPR:      preInvokeMethod -  " + methodName);
        }

        HLSCaseFormAppletPR.prototype.ShowUI = function () {
          if (skipVue) {
            SiebelAppFacade.HLSCaseFormAppletPR.superclass.ShowUI.apply(this, arguments);
          }
        }

        HLSCaseFormAppletPR.prototype.BindEvents = function () {
          if (skipVue) {
            SiebelAppFacade.HLSCaseFormAppletPR.superclass.BindEvents.apply(this, arguments);
          }
        }

        HLSCaseFormAppletPR.prototype.BindData = function (bRefresh) {
          if (skipVue) {
            SiebelAppFacade.HLSCaseFormAppletPR.superclass.BindData.apply(this, arguments);
            return;
          }

          document.getElementById('_sweview').title = '';
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
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-text-field prepend-icon="play_arrow" @click:prepend="doDrillDown" :rules="controls.Name.required ? [\'Required\'] : []" v-on:input="changeValue(\'Name\')" ref="caseName" :disabled="controls.Name.readonly" :label="controls.Name.label" v-model="controls.Name.value" clearable v-on:keyup.esc="escapeOnName" v-on:click:clear="handleClear(\'Name\')" :counter="controls.Name.maxSize"></v-text-field> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-switch v-on:change="changeValue(\'InfoChanged\')" :label="controls.InfoChanged.label" v-model="controls.InfoChanged.value" :disabled="controls.InfoChanged.readonly"></v-switch> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                <v-label>Threat Level: {{this.controls[\'Threat Level\'].value}}</v-label><span>                                                                                  \n\
                  <v-rating :background-color="ratingColor" :color="ratingColor" :readonly="controls[\'Threat Level\'].readonly" v-on:input="changeThreatLevel" v-model="caseThreatLevelNum" clearable length="3" label="Threat Level"></v-rating>  \n\
                </span></v-flex>                                                                                                                                \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-select :rules="controls.Status.required ? [\'Required\'] : []" box :items="caseStatusArr" v-on:click.native="clickStatus" v-on:change="changeValue(\'Status\')" v-model="controls.Status.value" :label="controls.Status.label" :disbaled="controls.Status.readonly"></v-select> \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                  <v-select :rules="controls[\'Sub Status\'].required ? [\'Required\'] : []" box :disabled="controls[\'Sub Status\'].readonly" :items="caseSubStatusArr" v-on:click.native="clickSubStatus" v-on:change="changeValue(\'Sub Status\')" v-model="controls[\'Sub Status\'].value" :label="controls[\'Sub Status\'].label"></v-select>  \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                  <v-autocomplete :rules="controls.Category.required ? [\'Required\'] : []" v-model="controls.Category.value" :disabled="controls.Category.readonly" :items="caseCategoryArr" v-on:change="changeValue(\'Category\')" :label="controls.Category.label"> \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-label>Sales Rep:</v-label>                                                                                                                 \n\
                  <v-tooltip top v-for="salesRep in caseSalesRepArr" >                                                                                          \n\
                  <v-chip slot="activator" :close="salesRep.id!=caseSalesRepPrimary" @input="clickDeleteSalesRep(salesRep)"><v-avatar :class="{teal : salesRep.id!=caseSalesRepPrimary}">   \n\
                  <v-icon v-if="salesRep.id==caseSalesRepPrimary">check_circle</v-icon>{{salesRep.id==caseSalesRepPrimary ? "" : salesRep.login[0]}}</v-avatar>{{salesRep.login}}</v-chip>  \n\
                  <span>{{salesRep.firstName + " " + salesRep.lastName}}</span></v-tooltip>                                                                     \n\
                  <v-btn flat icon v-on:click="showMvgApplet" color="indigo"><v-icon>edit</v-icon></v-btn>                                                      \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-text-field append-icon="report" @click:append="openPickApplet" :rules="controls[\'Audit Employee Last Name\'].required ? [\'Required\'] : []" v-on:input="changeValue(\'Audit Employee Last Name\')" :disabled="controls[\'Audit Employee Last Name\'].readonly" :label="controls[\'Audit Employee Last Name\'].label" v-model="controls[\'Audit Employee Last Name\'].value" clearable v-on:keyup.esc="escapeOnName" v-on:click:clear="handleClear(\'Audit Employee Last Name\')" :counter="controls[\'Audit Employee Last Name\'].maxSize"></v-text-field> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-autocomplete                                                                           \n\
                    placeholder="Start typing to Search"                                                    \n\
                    @blur="blurAuditEmployee"                                                               \n\
                    @focus="focusAuditEmployee"                                                             \n\
                    @input="inputAuditEmployee"                                                             \n\
                    @change="changeAuditEmployee"                                                           \n\
                    :disabled="controls[\'Audit Employee Full Name\'].readonly"                             \n\
                    :label="controls[\'Audit Employee Full Name\'].label"                                   \n\
                    v-model="controls[\'Audit Employee Full Name\'].value"                                  \n\
                    :counter="controls[\'Audit Employee Full Name\'].maxSize"                               \n\
                    :items="items"                                                                          \n\
                    hide-no-data                                                                            \n\
                    hide-selected                                                                           \n\
                    :loading="isLoading"                                                                    \n\
                    :search-input.sync="search">                                                            \n\
                    </v-autocomplete>                                                                       \n\
                    <v-divider></v-divider>                                                                 \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md12 pa-2>                                                                                                                              \n\
                  <v-textarea v-on:change="changeValue(\'Description\')" rows="7" :disabled="controls.Description.readonly" :label="controls.Description.label" v-model="controls.Description.value" :counter="controls.Description.maxSize" box name="input-7-1"></v-textarea> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md12 pa-2>                                                                                                                              \n\
                  <v-divider></v-divider>                                                                                                                       \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn block v-on:click="saveButtonClick" color="primary"><v-icon>save</v-icon>Save!</v-btn>                                                  \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn block v-on:click="deleteButtonClick" color="primary"><v-icon>delete</v-icon>Delete!</v-btn>                                            \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn block v-on:click="testButtonClick" color="primary"><v-icon>pan_tool</v-icon>Pick!</v-btn>                                              \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn block v-on:click="testButtonClickShuttle" color="primary"><v-icon>pan_tool</v-icon>Shuttle!</v-btn>                                    \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn block v-on:click="testButtonClickShuttle2" color="primary"><v-icon>pan_tool</v-icon>Shuttle2!</v-btn>                                  \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn block v-on:click="testButtonClickShuttle3" color="primary"><v-icon>pan_tool</v-icon>Shuttle3!</v-btn>                                  \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn block v-on:click="testBS" color="primary"><v-icon>pan_tool</v-icon>BS!</v-btn>                                                         \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md2 pa-2>                                                                                                                               \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-btn block v-on:click="gotoButtonClick" color="primary"><v-icon>language</v-icon>Goto!</v-btn>                                              \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md1 pa-2>                                                                                                                               \n\
                  <v-tooltip top><v-btn block slot="activator" v-on:click="prevButtonClick" color="primary"><v-icon>navigate_before</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>  \n\
                </v-flex>                                                                                                                                                                         \n\
                <v-flex md1 pa-2>                                                                                                                                                                 \n\
                  <v-tooltip top><v-btn block slot="activator" v-on:click="nextButtonClick" color="primary"><v-icon>navigate_next</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>    \n\
                </v-flex>                                                                                     \n\
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
              this.fieldToControlsMap = n19helper._getFieldToControlMap(this.controls);
              this.afterSelection();
              $('.application--wrap').css({ 'min-height': 'auto' });
            },
            data: {
              controls: {
                Name: {},
                Status: {},
                'Sub Status': {},
                InfoChanged: {},
                Description: {},
                Category: {},
                'Threat Level': {},
                'Sales Rep': {},
                'Audit Employee Last Name': {},
                'Audit Employee Full Name': {},
              },
              caseThreatLevelNum: 0,
              snackbar: false,
              caseStatusArr: [],
              caseSubStatusArr: [],
              caseCategoryArr: [],
              caseThreatLevelArr: ['Low', 'Medium', 'High'],
              caseSalesRepArr: [],
              caseSalesRepPrimary: '',
              isLoading: false,
              entries: [],
              search: null
            },
            computed: {
              ratingColor: function () {
                return this.controls['Threat Level'].readonly ? 'grey' : 'red';
              },
              items: function () {
                var arr = this.entries.map(el => el['First Name'] + ' ' + el['Last Name']);
                arr.push(this.controls['Audit Employee Full Name'].value);
                return arr;
              }
            },
            watch: {
              search(val) {
                console.log('!!!SEARCH', val);

                if ((this.isLoading) || (!this.pickApplet)) {
                  return;
                }
                this.isLoading = true;
                const query = `~LIKE *${val}* OR [First Name] ~LIKE *${val}*`;
                this.pickApplet.query({ 'Last Name': query })
                  .then(res => {
                    console.log(res);
                    this.entries = this.pickApplet.getRecordSet();
                  })
                  .catch(err => {
                    console.log(err);
                  })
                  .finally(() => (this.isLoading = false));
              }
            },
            methods: {
              async focusAuditEmployee() {
                console.log('!!!FOCUS', arguments);
                if (!this.pickApplet) {
                  const ret = await n19helper.showPickApplet('Audit Employee Last Name', true, null);
                  this.pickApplet = ret.popupAppletN19;
                  console.log(this.pickApplet.getRecordSet());
                  this.entries = this.pickApplet.getRecordSet();
                }
              },
              blurAuditEmployee() {
                console.log('!!!BLUR', arguments);
              },
              inputAuditEmployee() {
                console.log('!!!INPUT', arguments);
              },
              async changeAuditEmployee(val) {
                console.log('!!!CHANGE', arguments);
                var arr = this.pickApplet.getRecordSet();
                for (var i = 0; i < arr.length; i += 1) {
                  var temp = arr[i]['First Name'] + ' ' + arr[i]['Last Name'];
                  if (temp === val) {
                    this.pickApplet.positionOnRow(i);
                    this.pickApplet.pickRecord();
                    this.pickApplet = null;
                    return;
                  }
                }
              },
              async testButtonClick() {
                this.pickApplet = null;
                var obj = await n19helper.showPickApplet('Audit Employee Last Name', true, null);
                if (obj.appletName != 'Pharma Employee Pick Applet') {
                  alert('Pharma Employee Pick Applet is not created');
                }
                if (Object.keys(obj).length !== 2) {
                  alert('obj length has not expected value - ' + Object.keys(obj).length);
                }
                var length = obj.popupAppletN19.getRecordSet().length;
                if (length !== 10) {
                  alert('The recordset length is not 10 as expected - ' + length);
                }
                var found = await obj.popupAppletN19.query({ 'Last Name': 'Abel' })
                if (found !== 1) {
                  alert('Ary on Sample DB? The recordset length is not 1 as expected - ' + found);
                } else {
                  obj.popupAppletN19.pickRecord();
                  alert('PASSED');
                }
              },
              testShuttleOpened(obj) {
                if (obj.appletName != 'Contact Team Mvg Applet') {
                  alert('Contact Team Mvg Applet is not created');
                }
                if (Object.keys(obj).length !== 3) {
                  alert('Returned object length has not expected value - ' + Object.keys(SiebelAppFacade.N19).length);
                }
              },
              getControlForOpenPopup() {
                var controlName = '';
                if (n19helper.n19popupController.popupAppletN19) {
                  var controlName = n19helper.n19popupController.popupAppletN19.applet.GetPopupControl();
                }
                return controlName;
              },
              async testButtonClickShuttle() {
                var controlName = this.getControlForOpenPopup();
                if ('Sales Rep' !== controlName) {
                  var obj = await n19helper.showMvgApplet('Sales Rep', true);
                  this.testShuttleOpened(obj);
                  var mvg = obj.popupAppletN19;
                } else {
                  var mvg = n19helper.n19popupController.popupAppletN19;
                }
                var isRecord = mvg._firstRecord();
                while (isRecord) {
                  var controls = { 'SSA Primary Field': {} };
                  mvg.getCurrentRecordModel(controls);
                  var value = controls['SSA Primary Field'].value;
                  if (value) {
                    var isRecord = mvg.nextRecord();
                  } else {
                    mvg.deleteRecords();
                    isRecord = mvg._firstRecord();
                  }
                }
                alert('Finished');
              },
              async testButtonClickShuttle2() {
                var controlName = this.getControlForOpenPopup();
                if ('Sales Rep' !== controlName) {
                  var obj = await n19helper.showMvgApplet('Sales Rep', true);
                  this.testShuttleOpened(obj);
                  var mvg = obj.popupAppletN19;
                  var assoc = obj.assocAppletN19;
                } else {
                  var mvg = n19helper.n19popupController.popupAppletN19;
                  var assoc = n19helper.n19popupController.assocAppletN19;
                }
                var arr = ['7SIA-5DZZ2', '1SIA-3D3R', '1SIA-50JE'];
                for (var i = 0; i < arr.length; i++) {
                  var found = await assoc.queryById(arr[i]);
                  if (found === 1) {
                    mvg.addRecords();
                  } else {
                    alert('The record is not found - ' + arr[i] + '. Are you on Sample DB?');
                  }
                }
                alert('Finished');
              },
              async testButtonClickShuttle3() {
                var controlName = this.getControlForOpenPopup();
                if ('Sales Rep' !== controlName) {
                  var obj = await n19helper.showMvgApplet('Sales Rep', true);
                  this.testShuttleOpened(obj);
                  var mvg = obj.popupAppletN19;
                } else {
                  var mvg = n19helper.n19popupController.popupAppletN19;
                }
                var isRecord = mvg._firstRecord();
                var id;
                while (isRecord) {
                  var controls = { 'SSA Primary Field': {}, 'Active Login Name': {} };
                  mvg.getCurrentRecordModel(controls);
                  var value = controls['SSA Primary Field'].value;
                  if (value) {
                    alert('Found primary - ' + controls['Active Login Name'].value)
                  } else {
                    id = controls.id;
                  }
                  isRecord = mvg.nextRecord();
                }
                if (id) {
                  var found = await mvg.queryById(id);
                  if (found === 1) {
                    mvg.setControlValue('SSA Primary Field', true);
                    await mvg.writeRecord();
                    await mvg.query({});
                    alert('Finished');
                  } else {
                    alert('Query by Id did not work - ' + found + '/' + id);
                  }
                }
              },
              async testBS() {
                const ret = await n19helper.getMVF(
                  n19helper.getRawRecordSet().map(el => el.Id),
                  {
                    Organization: ['Organization', 'Organization Id'],
                    'Sales Rep': ['Active Login Name', 'First Name', 'Last Name'],
                    'Benefit Plan': []
                  });
                console.log(ret);
              },
              openPickApplet() {
                SiebelAppFacade.N19Helper.ReInitPopup();
                this.pickApplet = null;
                if (!n19helper.showPickApplet('Audit Employee Last Name')) {
                  alert('openPickApplet(returned value is false)')
                }
              },
              showMvgApplet() {
                SiebelAppFacade.N19Helper.ReInitPopup();
                if (!n19helper.showMvgApplet('Sales Rep')) {
                  alert('showMvgApplet(returned value is false)')
                }
              },
              doDrillDown() {
                if (SiebelAppFacade.N19['HLS Case List Applet']) {
                  SiebelAppFacade.N19['HLS Case List Applet'].drilldown('Name');
                }
              },
              changeValue(name) {
                var isChanged = n19helper.setControlValue(name, this.controls[name].value);
                if (isChanged && this.controls[name].isPostChanges) {
                  this.afterSelection();
                };
                if (!isChanged) {
                  var currentValue = n19helper.getCurrentRecord()[name];
                  this.controls[name].value = '';
                  setTimeout(function () { //todo: use next tick
                    this.controls[name].value = currentValue;
                  }.bind(this))
                }
              },
              changeThreatLevel(val) {
                n19helper.setControlValue('Threat Level', val > 0 ? this.caseThreatLevelArr[val - 1] : '');
              },
              clickSubStatus: function () {
                var arr = n19helper.getDynamicLOV('Sub Status');
                this.caseSubStatusArr = this.controls['Sub Status'].value ? [this.controls['Sub Status'].value] : [];
                for (var i = 0; i < arr.length; i++) {
                  if ((arr[i] != '') && (arr[i] != this.controls['Sub Status'].value)) {
                    this.caseSubStatusArr.push(arr[i]);
                  }
                }
              },
              clickStatus: function () {
                var arr = n19helper.getDynamicLOV('Status');
                this.caseStatusArr = [this.controls.Status.value];
                for (var i = 0; i < arr.length; i++) {
                  if ((arr[i] != '') && (arr[i] != this.controls.Status.value)) {
                    this.caseStatusArr.push(arr[i]);
                  }
                }
              },
              escapeOnName: function () {
                this.controls.Name.value = n19helper.getCurrentRecord().Name;
                this.changeValue('Name');
              },
              handleClear: function (name) { // this is needed because clearing set the model value to null
                this.controls[name].value = '';     // maybe it is not needed if we handle it inside N19
                this.changeValue(name);
              },
              newButtonClick: function () {
                n19helper.newRecord(function () {
                  setTimeout(function () {
                    this.$refs.caseName.focus();
                  }.bind(this));
                }.bind(this));
              },
              deleteButtonClick: function () {
                n19helper.deleteRecordSync();
              },
              gotoButtonClick: function () {
                n19helper.gotoView('PUB GOV Case Activity Plans View', 'HLS Case Form Applet');
              },
              saveButtonClick: function () {
                n19helper.writeRecord(function () {
                  this.snackbar = true;
                  this.afterSelection();
                }.bind(this));
              },
              nextButtonClick: function () {
                if (!n19helper.canInvokeMethod("GotoNextSet")) {
                  alert('GotoNextSet is not allowed to invoke');
                } else {
                  n19helper.nextRecord();
                }
              },
              prevButtonClick: function () {
                if (!n19helper.canInvokeMethod("GotoPreviousSet")) {
                  alert('GotoPreviousSet is not allowed to invoke');
                } else {
                  n19helper.prevRecord();
                }
              },
              updateFieldData(name, value) {
                // When Primary is updated it sends SSA Primary Field?
                console.log('updateFieldData', arguments);
                if (typeof value === 'undefined') {
                  // do we need to do something when it is undefined?
                  value = n19helper.getCurrentRecord()[name];
                }
                var control = this.fieldToControlsMap[name];

                if (control && value) {
                  value = n19helper._getControlValue(control.uiType, value);
                  if ('Threat Level' === name) {
                    this.caseThreatLevelNum = this.caseThreatLevelArr.indexOf(value) + 1;
                  }
                  if (value == this.controls[control.name].value) {
                    return;
                  }
                  this.controls[control.name].value = value;
                  if ('Status' === name) {
                    this.caseStatusArr = [value];
                  } else if ('Sub Status' === name) {
                    this.caseSubStatusArr = [value];
                  }
                  if (control.isPostChanges) {
                    Vue.nextTick(function () {
                      this.afterSelection();
                    }.bind(this));
                  }
                }
              },
              updatePrimary() {
                console.log('<<<<<<<<< change case primary <<<', this.caseSalesRepArr, this.caseSalesRepPrimary);
                if (SiebelApp.S_App.GetActiveView().GetAppletMap()['Contact Team Mvg Applet']) {
                  // in demo primary could be changed only in the applet!
                  var arr = SiebelApp.S_App.GetActiveView().GetAppletMap()['Contact Team Mvg Applet'].GetPModel().Get('GetRawRecordSet');
                  for (var i = 0; i < arr.length; i++) {
                    if (arr[i]['SSA Primary Field'] == 'Y') {
                      this.caseSalesRepPrimary = arr[i].Id;
                      return;
                    }
                  }
                }
              },
              getSalesRep: async function () {
                console.log('<<<<<<<<< get sales rep primary <<<', this.caseSalesRepArr, this.caseSalesRepPrimary);

                // MVG applet exists
                if (SiebelApp.S_App.GetActiveView().GetAppletMap()['Contact Team Mvg Applet']) {
                  var arr = SiebelApp.S_App.GetActiveView().GetAppletMap()['Contact Team Mvg Applet'].GetPModel().Get('GetRawRecordSet');
                  this.caseSalesRepArr = [];
                  for (var i = 0; i < arr.length; i++) {
                    this.caseSalesRepArr.push({
                      firstName: arr[i]["Active First Name"],
                      lastName: arr[i]["Active Last Name"],
                      login: arr[i]["Active Login Name"],
                      id: arr[i].Id
                    });
                    if (arr[i]['SSA Primary Field'] == 'Y') {
                      this.caseSalesRepPrimary = arr[i].Id;
                    }
                  }
                  this.caseSalesRepArr.sort(function (a, b) {
                    return (a.login > b.login) ? -1 : 1;
                  });
                  return;
                }

                //we don't have an applet, query the server
                let ret = await n19helper.getMVF(
                  [this.controls.id],
                  {
                    'Sales Rep': ['Active Login Name', 'Active First Name', 'Active Last Name']
                  },
                  true
                );
                if (ret[this.controls.id]) { // something returned
                  ret = ret[this.controls.id]["Sales Rep"];
                  console.log('BS output to get the sales reps...', ret);
                  this.caseSalesRepArr = [];
                  for (var i = 0; i < ret.length; i++) {
                    var obj = {
                      firstName: ret[i]['Active First Name'],
                      lastName: ret[i]['Active Last Name'],
                      login: ret[i]['Active Login Name'],
                      id: ret[i].Id
                    }
                    this.caseSalesRepArr.push(obj);
                    if (ret[i]['SSA Primary Field']) {
                      this.caseSalesRepPrimary = ret[i].Id;
                    }
                  }
                  this.caseSalesRepArr.sort(function (a, b) {
                    return (a.login > b.login) ? -1 : 1;
                  });
                }
              },
              deleteSalesRep(helper, id) {
                var isRecord = helper._firstRecord();
                while (isRecord) {
                  var obj = helper.getCurrentRecord(true);
                  var recId = obj.Id;
                  if (recId === id) {
                    helper.deleteRecords();
                    return;
                  } else {
                    isRecord = helper.nextRecord();
                  }
                }
              },
              clickDeleteSalesRep(salesRep) {
                console.log('>>> clickDeleteSalesRep input', salesRep, salesRep.login, this.caseSalesRepArr);
                if (n19helper.n19popupController.popupAppletN19) {
                  var controlName = n19helper.n19popupController.popupAppletN19.applet.GetPopupControl();
                }
                if ('Sales Rep' !== controlName) {
                  var ret = n19helper.showMvgApplet('Sales Rep', true, function (obj) {
                    this.deleteSalesRep(obj.popupAppletN19, salesRep.id);
                  }.bind(this));
                  if (!ret) {
                    alert('(clickDeleteSalesRep)retured value is false')
                  }
                } else {
                  this.deleteSalesRep(n19helper.n19popupController.popupAppletN19, salesRep.id);
                }
              },
              afterSelection: function () {
                console.log('>>>>>>>>>>>>>>>>>>> AFTER SELECTION STARTED....');
                n19helper.getCurrentRecordModel(this.controls);

                if (0 === this.caseCategoryArr.length) {
                  this.caseCategoryArr = n19helper.getStaticLOV('Category');
                }

                this.caseThreatLevelNum = this.caseThreatLevelArr.indexOf(this.controls['Threat Level'].value) + 1;
                this.caseStatusArr = [this.controls.Status.value];
                this.caseSubStatusArr = [this.controls['Sub Status'].value];
                this.getSalesRep();
              }
            }
          });
        }
        HLSCaseFormAppletPR.prototype.EndLife = function () {
          SiebelApp.S_App.NotifyObject.prototype.NotifyNewFieldData = SiebelAppFacade.N19notifyNewFieldData;
          SiebelApp.S_App.NotifyObject.prototype.NotifyNewPrimary = SiebelAppFacade.N19notifyNewPrimary;

          if (app) {
            app.$destroy(true);
            $('#app').remove();
            app = null;
          }
          $("link[href*='vuetify.min.css']").remove();
          n19helper = null;
          if (SiebelAppFacade.N19 && SiebelAppFacade.N19[appletName]) {
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
