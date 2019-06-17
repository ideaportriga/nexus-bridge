if (typeof (SiebelAppFacade.HLSCaseFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.HLSCaseFormAppletPR");
  define("siebel/custom/HLSCaseFormAppletPR", ["siebel/custom/NBDefaultFormAppletPR", "siebel/custom/vue.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.HLSCaseFormAppletPR = (function () {

        function HLSCaseFormAppletPR(pm) {
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(HLSCaseFormAppletPR, SiebelAppFacade.NBDefaultFormAppletPR);
        var app;
        var pm;
        var n19helper;
        var skipVue = true;

        HLSCaseFormAppletPR.prototype.Init = function () {
          var viewName = SiebelApp.S_App.GetActiveView().GetName();
          skipVue = viewName.indexOf('List View') === -1;
          if (skipVue) {
            SiebelAppFacade.HLSCaseFormAppletPR.superclass.Init.apply(this, arguments);
            return;
          }
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.NBInit.apply(this, arguments);

          document.addEventListener('UpdateMVG', function (event) {
            if (app) {
              setTimeout(() => {
                app.getSalesRep();
              });
            }
          });

          pm = this.GetPM();

          // notifications replacement?
          // pm.AddMethod("UpdateStateChange", function(...args) {
          //   console.log('Method UpdateStateChange.....', args);
          // }, { sequence:false, override:false, scope: this });
          // pm.AddMethod("InvokeStateChange", function(...args) {
          //   console.log('Method InvokeStateChange.....', args);
          // }, { sequence:false, override:false, scope: this });
          // pm.AddMethod("FieldChange", function(...args) {
          //   console.log('Method FieldChange.....', args);
          // }, { sequence:false, override:false, scope: this });
          // pm.AttachPMBinding('UpdateStateChange', function(...args) {
          //   console.log('Bind UpdateStateChange.....', args);
          // });
          // pm.AttachPMBinding('InvokeStateChange', function(...args) {
          //   console.log('Bind InvokeStateChange.....', args);
          // });
          // pm.AttachPMBinding('FieldChange', function(...args) {
          //   console.log('Bind FieldChange.....', args);
          // });

          n19helper = this.initializeNexus({convertDates: true});

          $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet"></link>');
          $('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/vuetify.min.css"/>');
          $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');

          pm.AddMethod('InvokeMethod', function (method) {
            console.log(`>>> InvokeMethod ${method}, sequence true`, arguments);
          }, { sequence: true, scope: this });

          pm.AddMethod('InvokeMethod', function (method) {
            console.log(`>>> InvokeMethod ${method}, sequence false`, arguments);
          }, { sequence: false, scope: this });

          pm.AttachPostProxyExecuteBinding('EditField', function (method, psInput) {
            if (app) { // this was a show popup
              if (psInput.GetProperty('SWEField') === n19helper.getControls()['Sales Rep'].inputName) { // this is sales rep
                let applet = SiebelApp.S_App.GetActiveView().GetApplet('Contact Team Mvg Applet');
                if (applet) {
                  app.addPmHandlerForPopup(applet.GetPModel());
                } else {
                  alert('Contact Team Mvg Applet IS NOT FOUND');
                }
              }
            }
          });

          // SiebelApp.S_App.GetPopupPM().AddMethod('OnLoadPopupContent', (...args) => {
          //   console.log('OnLoadPopupContent ADD METHOD PR', args);
          // }, { sequence: false });

          // SiebelApp.S_App.GetPopupPM().AttachPMBinding('OnLoadPopupContent', (...args) => {
          //   console.log('OnLoadPopupContent ATTACH PR', args);
          // });

          pm.AttachPostProxyExecuteBinding('ALL', function (method) {
            console.log('>>>>>> AttachPostProxyExecuteBinding', method, arguments);
            // AttachPostProxyExecuteBinding is not called for EditPopup, it is called for EditField
          });

          pm.AttachPreProxyExecuteBinding('ALL', function (method) {
            console.log('>>>>>> AttachPreProxyExecuteBinding', method, arguments);
          });

          // for commit pending indicator
          document.getElementById("s_" + pm.Get('GetFullId') + "_div").classList.add('siebui-applet', 'siebui-active');

          //todo: maybe use applet.prototype.RepopulateField instead of it?
          // good to know that...
          //   when we modified immediate post change field, and made the undo record,
          //   notify new field data is not invoked
          //   when for the same field and immediate post change is unchecked, this procedure will be invoked
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

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_GENERIC'), function (propSet) {
            var type = propSet.GetProperty(consts.get('SWE_PROP_NOTI_TYPE'));
            if ('ClosePopup' === type) {
              SiebelAppFacade.N19Helper.ReInitPopup()
            }
            console.log('SWE_PROP_BC_NOTI_GENERIC ', type, propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_NOTI_SELECTED'), function (propSet) {
            console.log('>>>SWE_PROP_NOTI_SELECTED', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW'), function (propSet) {
            console.log('>>>SWE_PROP_BC_NOTI_NEW_ACTIVE_ROW', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_STATE_CHANGED'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_STATE_CHANGED', propSet, propSet.GetProperty('state'));
            if ('cp' === propSet.GetProperty('state')) { //commit pending?
            }
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_LIST'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_FIELD_LIST', propSet, propSet.GetProperty('state'));
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA_WS'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_DATA_WS', propSet, propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD')));
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN'), function (propSet) {
            console.groupCollapsed(`NOTIFY ${propSet.GetProperty(consts.get('SWE_PROP_BC_OPERATION'))} ${propSet.GetProperty(consts.get("SWE_PROP_BC"))}`);
            console.log('SWE_PROP_BC_NOTI_BEGIN', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_LONG_OPERATION_PROCESS'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_LONG_OPERATION_PROCESS', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NEW_ACTIVE_FIELD'), function (propSet) {
            console.log('SWE_PROP_BC_NEW_ACTIVE_FIELD', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_END', propSet);
            console.groupEnd();
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_SELECTION'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_SELECTION', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_DATA'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_DATA', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_RECORD'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_DELETE_RECORD', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_DELETE_WORKSET'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_DELETE_WORKSET', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_PRIMARY'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_PRIMARY', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_INSERT_WORKSET'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_INSERT_WORKSET', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_INSERT_WORKSET_FIELD_VALUES'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_INSERT_WORKSET_FIELD_VALUES', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_EXECUTE'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_EXECUTE', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_CHANGE_SELECTION'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_CHANGE_SELECTION', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_SELECTION_MODE_CHANGE', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_BEGIN_QUERY'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_BEGIN_QUERY', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_QUERYSPEC'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_QUERYSPEC', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_FIELD_QUERYSPEC', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_END_QUERY'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_END_QUERY', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_DATA'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD_DATA', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD_DATA_WS', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_RECORD_SCROLL_DATA'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_RECORD_SCROLL_DATA', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_PAGE_REFRESH'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_PAGE_REFRESH', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_NEW_FIELD_DATA'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_NEW_FIELD_DATA', propSet, propSet.GetProperty(consts.get('SWE_PROP_NOTI_FIELD')));
          });

          pm.AttachNotificationHandler(consts.get('SWE_PROP_BC_NOTI_SCROLL_AMOUNT'), function (propSet) {
            console.log('SWE_PROP_BC_NOTI_SCROLL_AMOUNT', propSet);
          });

          pm.AttachNotificationHandler(consts.get('SWE_NOTIFY_PAGE_REFRESH'), function (propSet) {
            console.log('SWE_NOTIFY_PAGE_REFRESH', propSet);
          });
        }

        HLSCaseFormAppletPR.prototype.preInvokeMethod = function (method, args, lp, returnStructure) {
          SiebelJS.Log(`${this.GetPM().Get('GetName')} preInvokeMethod - ${methodName}`);
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
            console.log('BindData called.....');
            return;
          }

          document.getElementById('_sweview').title = '';
          putVue(pm.Get('GetFullId'));
        }

        function putVue(divId) {
          var html = '\
          <style>[v-cloak]{display:none;}</style> \n\
          <div v-cloak id="vue_sample">                                                                                                                                 \n\
            <v-app id="inspire">                                                                                                                                \n\
            <v-snackbar v-model="snackBar" :timeout="3000" :top="true" :color="snackBarColor">{{snackBarText}}<v-btn :color="snackBarButtonColor" flat @click="snackBar = false">Close</v-btn></v-snackbar>\n\
            <v-container fluid>                                                                                                                                 \n\
                <v-layout row wrap>                                                                                                                             \n\
                <v-flex md12 pa-2>                                                                                                                              \n\
                  <v-alert :value="true" type="info">HLS Case Form Applet rendered by VUE.JS PR</v-alert>                                                       \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-text-field prepend-icon="play_arrow" @click:prepend="doDrillDown" :rules="controls.Name.required ? [\'Required\'] : []" v-on:input="changeValue(\'Name\')" ref="caseName" :readonly="controls.Name.readonly" :label="controls.Name.label" v-model="controls.Name.value" clearable v-on:keyup.27="escapeOnControl(\'Name\')" v-on:click:clear="handleClear(\'Name\')" :counter="controls.Name.maxSize"></v-text-field> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-switch v-on:change="changeValue(\'InfoChanged\')" :label="controls.InfoChanged.label" v-model="controls.InfoChanged.value" :disabled="controls.InfoChanged.readonly"></v-switch> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                <v-label>Threat Level: {{this.controls[\'Threat Level\'].value}}</v-label><span>                                                                                  \n\
                  <v-rating :background-color="ratingColor" :color="ratingColor" :readonly="controls[\'Threat Level\'].readonly" v-on:input="changeThreatLevel" v-model="caseThreatLevelNum" length="3" label="Threat Level" clearable></v-rating>  \n\
                </span></v-flex>                                                                                                                                \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-select :attach=true :rules="controls.Status.required ? [\'Required\'] : []" box :items="caseStatusArr" v-on:click.native="clickStatus" v-on:change="changeValue(\'Status\')" v-model="controls.Status.value" :label="controls.Status.label" :disbaled="controls.Status.readonly"></v-select> \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                  <v-select :attach=true :rules="controls[\'Sub Status\'].required ? [\'Required\'] : []" box :disabled="controls[\'Sub Status\'].readonly" :items="caseSubStatusArr" v-on:click.native="clickSubStatus" v-on:change="changeValue(\'Sub Status\')" v-model="controls[\'Sub Status\'].value" :label="controls[\'Sub Status\'].label" clearable v-on:keyup.27="escapeOnControl(\'Sub Status\')"></v-select>  \n\
                </v-flex>                                                                                                                                                         \n\
                <v-flex md4 pa-2>                                                                                                                                                 \n\
                  <v-autocomplete :attach=true :rules="controls.Category.required ? [\'Required\'] : []" v-model="controls.Category.value" :disabled="controls.Category.readonly" :items="caseCategoryArr" v-on:change="changeValue(\'Category\')" :label="controls.Category.label" clearable v-on:keyup.27="escapeOnControl(\'Category\')"> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-label>Sales Rep:</v-label>                                                                                                                 \n\
                  <v-tooltip :key="salesRep.id" :attach=true top v-for="salesRep in caseSalesRepArr" >                                                          \n\
                  <v-chip slot="activator" :close="salesRep.id!=caseSalesRepPrimary" @input="clickDeleteSalesRep(salesRep)"><v-avatar :class="{teal : salesRep.id!=caseSalesRepPrimary}">   \n\
                  <v-icon v-if="salesRep.id==caseSalesRepPrimary">check_circle</v-icon>{{salesRep.id==caseSalesRepPrimary ? "" : salesRep.login[0]}}</v-avatar>{{salesRep.login}}</v-chip>  \n\
                  <span>{{salesRep.firstName + " " + salesRep.lastName}}</span></v-tooltip>                                                                     \n\
                  <v-btn flat icon v-on:click="showMvgApplet" color="indigo"><v-icon>edit</v-icon></v-btn>                                                      \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-text-field append-icon="report" @click:append="openPickApplet" :rules="controls[\'Audit Employee Last Name\'].required ? [\'Required\'] : []" v-on:input="changeValue(\'Audit Employee Last Name\')" :disabled="controls[\'Audit Employee Last Name\'].readonly" :label="controls[\'Audit Employee Last Name\'].label" v-model="controls[\'Audit Employee Last Name\'].value" clearable v-on:keyup.27="escapeOnControl(\'Audit Employee Last Name\')" v-on:click:clear="handleClear(\'Audit Employee Last Name\')" :counter="controls[\'Audit Employee Last Name\'].maxSize"></v-text-field> \n\
                </v-flex>                                                                                                                                       \n\
                <v-flex md4 pa-2>                                                                                                                               \n\
                  <v-autocomplete :attach=true                                                              \n\
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
                </v-flex>                                                                                   \n\
                <v-flex md4 pa-2>                                                                           \n\
                  <v-text-field :rules="controls.SubjectPhone.required ? [\'Required\'] : []" v-on:input="changeValue(\'SubjectPhone\')" :disabled="controls.SubjectPhone.readonly" :label="controls.SubjectPhone.label" v-model="controls.SubjectPhone.value" clearable v-on:keyup.27="escapeOnControl(\'SubjectPhone\')" v-on:click:clear="handleClear(\'SubjectPhone\')" :counter="controls.SubjectPhone.maxSize"></v-text-field> \n\
                </v-flex>                                                                                   \n\
                <v-flex md4 pa-2>                                                                           \n\
                </v-flex>                                                                                   \n\
                <v-flex md4 pa-2>                                                                           \n\
                </v-flex>                                                                                   \n\
                <v-flex md4 pa-2>                                                                           \n\
                  <v-textarea v-on:change="changeValue(\'Description\')" rows="12" :disabled="controls.Description.readonly" :label="controls.Description.label" v-model="controls.Description.value" :counter="controls.Description.maxSize" box name="input-7-1"></v-textarea> \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md4 pa-2>                                                                                                                              \n\
                  <div class="text-xs-center">                                                                                                                 \n\
                    <v-date-picker :title-date-format="titleDateFormat" :weekday-format="weekdayFormat"                                                        \n\
                    :header-date-format="headerDateFormat" :first-day-of-week="firstDayOfWeek" v-on:input="changeCreatedDate"                                  \n\
                    v-model="date" landscape :disabled="controls[\'Created Date\'].readonly"></v-date-picker>                                                  \n\
                  </div>                                                                                                                                       \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md4 pa-2>                                                                                                                              \n\
                  <div class="text-xs-center">                                                                                                                 \n\
                    <v-time-picker v-on:input="changeCreatedDate" v-model="time" landscape :format="timeFormat" :disabled="controls[\'Created Date\'].readonly"></v-time-picker>                                                             \n\
                  </div>                                                                                                                                       \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md12 pa-2>                                                                                                                             \n\
                  <v-divider></v-divider>                                                                                                                      \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-btn :disabled="!methods.WriteRecord" block v-on:click="saveButtonClick" color="primary"><v-icon>save</v-icon>Save!</v-btn>                \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-btn :disabled="!methods.DeleteRecord" block v-on:click="deleteButtonClick" color="primary"><v-icon>delete</v-icon>Delete!</v-btn>         \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-btn block v-on:click="testButtonClick" color="primary"><v-icon>pan_tool</v-icon>Pick!</v-btn>                                             \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-btn block v-on:click="testButtonClickShuttle" color="primary"><v-icon>pan_tool</v-icon>Shuttle!</v-btn>                                   \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-btn block v-on:click="testButtonClickShuttle2" color="primary"><v-icon>pan_tool</v-icon>Shuttle2!</v-btn>                                 \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-btn block v-on:click="testButtonClickShuttle3" color="primary"><v-icon>pan_tool</v-icon>Shuttle3!</v-btn>                                 \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-btn block v-on:click="testBS" color="primary"><v-icon>pan_tool</v-icon>BS!</v-btn>                                                        \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md2 pa-2>                                                                                                                              \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-btn block v-on:click="gotoButtonClick" color="primary"><v-icon>language</v-icon>Goto!</v-btn>                                             \n\
                </v-flex>                                                                                                                                      \n\
                <v-flex md1 pa-2>                                                                                                                              \n\
                  <v-tooltip :attach=true top><v-btn :disabled="!methods.GotoPreviousSet" block slot="activator" v-on:click="prevButtonClick" color="primary"><v-icon>navigate_before</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>  \n\
                </v-flex>                                                                                                                                                                         \n\
                <v-flex md1 pa-2>                                                                                                                                                                 \n\
                  <v-tooltip :attach=true top><v-btn :disabled="!methods.GotoNextSet" block slot="activator" v-on:click="nextButtonClick" color="primary"><v-icon>navigate_next</v-icon></v-btn><span>Go to the next record</span></v-tooltip>    \n\
                </v-flex>                                                                                     \n\
                <v-fab-transition>                                                                            \n\
                  <v-btn v-on:click="newButtonClick" v-show="true" color="pink" dark fixed bottom right fab>  \n\
                    <v-icon>add</v-icon>                                                                      \n\
                  </v-btn>                                                                                    \n\
                </v-fab-transition>                                                                           \n\
                </v-layout>                                                                                   \n\
              </v-container></v-app>                                                                          \n\
          </div>';

          $('#' + divId).replaceWith(html);

          app = new Vue({
            el: '#vue_sample',
            mounted: function () {
              // handle when shuttle is openned on the list applet
              var pmListApplet = SiebelApp.S_App.GetActiveView().GetApplet('HLS Case List Applet').GetPModel();
              pmListApplet.AttachPostProxyExecuteBinding("EditField", function (method) {
                let applet = SiebelApp.S_App.GetActiveView().GetApplet('Contact Team Mvg Applet');
                if (applet) {
                  applet.GetPModel().AttachPostProxyExecuteBinding("ALL", function (method) {
                    if (("AddRecords" === method) || ("AddAllRecords" === method) || ("DeleteRecords" === method)) {
                      var event = new Event("UpdateMVG");
                      document.dispatchEvent(event);
                    }
                  });
                }
              });

              this.fieldToControlsMap = n19helper._getFieldToControlMap(this.controls);
              this.caseCategoryArr = n19helper.getStaticLOV('Category');
              this.firstDayOfWeek = n19helper.localeData.firstDayOfWeek;
              this.timeFormat = n19helper.localeData.is24hoursFormat ? '24hr' : 'ampm';
              this.afterSelection();
              this.subscribeId = n19helper.subscribe(this.afterSelection);
              $('.application--wrap').css({ 'min-height': 'auto' });
            },
            beforeDestroyed() {
              n19helper.unsubscribe(this.subscribeId);
            },
            data: {
              firstDayOfWeek: 0,
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
                'Created Date': {},
                SubjectPhone: {},
              },
              methods: {
                GotoPreviousSet: false,
                GotoNextSet: false,
                WriteRecord: false,
                DeleteRecord: false
              },
              date: null,
              time: null,
              timeFormat: 'ampm',
              caseThreatLevelNum: 0,
              snackBar: false,
              snackBarColor: '',
              snackBarText: '',
              snackBarButtonColor: '',
              caseStatusArr: [],
              caseSubStatusArr: [],
              caseCategoryArr: [],
              caseThreatLevelArr: ['Low', 'Medium', 'High'],
              caseSalesRepArr: [],
              caseSalesRepPrimary: '',
              isLoading: false,
              entries: [],
              search: null,
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
              titleDateFormat(date) {
                const value = new Date(date);
                const day = value.getDate();
                const month = n19helper.localeData.shortMonths[value.getMonth()];
                const weekDay = n19helper.localeData.weekDays3[value.getDay()];
                return `${weekDay}, ${month} ${day}`;
              },
              headerDateFormat(date) {
                const arr = date.split('-');
                return `${n19helper.localeData.months[Number(arr[1]) - 1]}, ${arr[0]}`;
              },
              weekdayFormat(date) {
                const weekDay = new Date(date).getDay();
                return n19helper.localeData.weekDays3[weekDay];
              },
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
                if (!this.pickApplet) {
                  alert('I should not get here');
                  await this.focusAuditEmployee();
                }
                var arr = this.pickApplet.getRecordSet();
                for (var i = 0; i < arr.length; i += 1) {
                  var temp = arr[i]['First Name'] + ' ' + arr[i]['Last Name'];
                  if (temp === val) {
                    this.pickApplet.positionOnRow(i);
                    this.pickApplet.pickRecord();
                    this.pickApplet = null;
                    this.focusAuditEmployee(); // no need to await
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
                if (Object.keys(obj).length !== 3) {
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
                }
              },
              testShuttleOpened(obj) {
                if (obj.appletName != 'Contact Team Mvg Applet') {
                  alert('Contact Team Mvg Applet is not created');
                }
                if (Object.keys(obj).length !== 5) {
                  alert('Returned object length has not expected value - ' + Object.keys(obj).length);
                }
              },
              getControlForOpenPopup() {
                if (n19helper.n19popupController.popupAppletN19) {
                  // check if it was not closed accidentally
                  const appletName = n19helper.n19popupController.popupAppletN19.appletName;
                  const applet = SiebelApp.S_App.GetActiveView().GetApplet(appletName);
                  if (applet) {
                    return applet.GetPopupControl();
                  }
                }
                return '';
              },
              addPmHandlerForPopup(pm) {
                pm.AttachPostProxyExecuteBinding("ALL", function (method) {
                  // console.log('post  >>> ', appletName, arguments);
                  if (("AddRecords" === method) || ("AddAllRecords" === method) || ("DeleteRecords" === method)) {
                    var event = new Event("UpdateMVG");
                    document.dispatchEvent(event);
                  }
                });
              },
              async testButtonClickShuttle() {
                var controlName = this.getControlForOpenPopup();
                if ('Sales Rep' !== controlName) {
                  var obj = await n19helper.showMvgApplet('Sales Rep', true);
                  this.testShuttleOpened(obj);
                  var mvg = obj.popupAppletN19;
                  // this.addPmHandlerForPopup(mvg.pm);
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
              },
              async testButtonClickShuttle2() {
                var controlName = this.getControlForOpenPopup();
                if ('Sales Rep' !== controlName) {
                  var obj = await n19helper.showMvgApplet('Sales Rep', true);
                  this.testShuttleOpened(obj);
                  var mvg = obj.popupAppletN19;
                  // this.addPmHandlerForPopup(mvg.pm);
                  var assoc = obj.assocAppletN19;
                } else {
                  var mvg = n19helper.n19popupController.popupAppletN19;
                  var assoc = n19helper.n19popupController.assocAppletN19;
                }
                var arr = ['7SIA-5DZZ2', '1SIA-3D3R', '1SIA-50JE'];
                var found = assoc.queryByIdSync(arr);
                if (found !== arr.length) {
                  alert(`The amount of found records(${found}) does not match to input array length(${arr.length})`);
                } else {
                  mvg.addAllRecords();
                }
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
                this.pickApplet = null;
                if (!n19helper.showPickApplet('Audit Employee Last Name')) {
                  alert('openPickApplet(returned value is false)')
                }
              },
              showMvgApplet() {
                var obj = n19helper.showMvgApplet('Sales Rep');
                if (!obj) {
                  alert('showMvgApplet(returned value is false)')
                }
              },
              doDrillDown() {
                  n19helper.drilldown('Name');
              },
              changeValue(name) {
                var isChanged = n19helper._setControlValue(name, this.controls[name].value);
                if (!isChanged) { // the value is not set
                  var fieldName = n19helper._getFieldNameForControl(name);
                  var currentValue = n19helper.getCurrentRecord()[fieldName];
                  this.controls[name].value = '';
                  setTimeout(function () { //todo: use next tick?
                    this.controls[name].value = currentValue;
                  }.bind(this))
                }
              },
              changeCreatedDate() {
                const date = new Date(this.date + ' ' + this.time);
                this.controls['Created Date'].value = date;
                this.changeValue('Created Date');

              },
              changeThreatLevel(val) {
                // n19helper.setControlValue('Threat Level', val > 0 ? this.caseThreatLevelArr[val - 1] : '');
                this.controls['Threat Level'].value = val > 0 ? this.caseThreatLevelArr[val - 1] : '';
                this.changeValue('Threat Level');
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
              escapeOnControl: function (name) {
                this.controls[name].value = n19helper.getCurrentRecord()[this.controls[name].fieldName];
                this.changeValue(name);
              },
              handleClear: function (name) { // this is needed because clearing set the model value to null
                this.controls[name].value = '';     // maybe it is not needed if we handle it inside N19
                this.changeValue(name);
              },
              newButtonClick: function () {
                n19helper.newRecord(() => setTimeout(() => this.$refs.caseName.focus()));
              },
              deleteButtonClick: function () {
                n19helper.deleteRecordSync();
              },
              gotoButtonClick: function () {
                n19helper.gotoView('PUB GOV Case Activity Plans View', 'HLS Case Form Applet');
              },
              saveButtonClick: function () {
                n19helper.writeRecord().then(() => {
                  this.snackBarColor = 'success';
                  this.snackBarText = 'Record Saved Successfully';
                  this.snackBarButtonColor = 'pink';
                  this.snackBar = true;
                }).catch(() => {
                  this.snackBarColor = 'error';
                  this.snackBarText = 'FAILED TO SAVE';
                  this.snackBarButtonColor = 'black';
                  this.snackBar = true;
                });
              },
              nextButtonClick: function () {
                n19helper.nextRecord();
              },
              prevButtonClick: function () {
                n19helper.prevRecord();
              },
              updateFieldData(name, value) {
                // When Primary is updated it sends SSA Primary Field?
                var control = this.fieldToControlsMap[name];
                if (control) {
                  if (typeof value === 'undefined') {
                    // do we need to do something when it is undefined?
                    value = (n19helper.getCurrentRecord() || {})[name];
                  }
                  if (value) {
                    value = n19helper._getJSValue(value, control);
                    if (value == this.controls[control.name].value) {
                      return;
                    }
                    this.controls[control.name].value = value;
                    if ('Threat Level' === name) {
                      this.caseThreatLevelNum = this.caseThreatLevelArr.indexOf(value) + 1;
                    } else if ('Created Date' === name) {
                      var arr = this.controls[control.name].value.toLocaleString('sv-SV').split(' ');
                      this.date = arr[0];
                      this.time = arr[1].substr(0, 8);
                    } else if ('Status' === name) {
                      this.caseStatusArr = [value];
                    } else if ('Sub Status' === name) {
                      this.caseSubStatusArr = [value];
                    }
                  }
                }
              },
              updatePrimary() {
                console.log('<<<<<<<<< change case primary <<<', this.caseSalesRepArr, this.caseSalesRepPrimary);
                if (SiebelApp.S_App.GetActiveView().GetApplet('Contact Team Mvg Applet')) {
                  // in demo primary could be changed only in the applet!
                  var arr = SiebelApp.S_App.GetActiveView().GetApplet('Contact Team Mvg Applet').GetPModel().Get('GetRawRecordSet');
                  for (var i = 0; i < arr.length; i++) {
                    if (arr[i]['SSA Primary Field'] == 'Y') {
                      this.caseSalesRepPrimary = arr[i].Id;
                      return;
                    }
                  }
                }
              },
              getSalesRep: async function () {
                console.log('<<< get sales rep <<<', this.caseSalesRepArr, this.caseSalesRepPrimary);
                let ret = await n19helper.getMVF(
                  [this.controls.id],
                  {
                    'Sales Rep': ['Active Login Name', 'Active First Name', 'Active Last Name']
                  },
                  true
                );
                if (ret[this.controls.id]) {
                  this.caseSalesRepArr = [];
                  ret[this.controls.id]["Sales Rep"].forEach((salesRep) => {
                    this.caseSalesRepArr.push({
                      firstName: salesRep['Active First Name'],
                      lastName: salesRep['Active Last Name'],
                      login: salesRep['Active Login Name'],
                      id: salesRep.Id
                    });
                    if (salesRep['SSA Primary Field']) {
                      this.caseSalesRepPrimary = salesRep.Id;
                    }
                  });
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
                const controlName = this.getControlForOpenPopup();
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
                // this.controls = n19helper.getCurrentRecordModel(this.controls).controls;
                const id = this.controls.id || '';
                n19helper.getCurrentRecordModel(this.controls, this.methods);

                if (this.controls['Created Date'].value) {
                  var arr = this.controls['Created Date'].value.toLocaleString('sv-SV').split(' ');
                  this.date = arr[0];
                  this.time = arr[1].substr(0, 8);
                } else {
                  this.date = null;
                  this.time = null;
                }

                this.caseThreatLevelNum = this.caseThreatLevelArr.indexOf(this.controls['Threat Level'].value) + 1;
                this.caseStatusArr = [this.controls.Status.value];
                this.caseSubStatusArr = [this.controls['Sub Status'].value];
                if (this.controls.id) {
                  if (id !== this.controls.id) { // get the sales rep only row is changed? how to do it better
                    this.getSalesRep();
                  }
                } else {
                  this.caseSalesRepArr = [];
                  this.caseSalesRepPrimary = '';
                }
              }
            }
          });
        }

        HLSCaseFormAppletPR.prototype.EndLife = function () {
          if (SiebelAppFacade.N19notifyNewFieldData) {
            SiebelApp.S_App.NotifyObject.prototype.NotifyNewFieldData = SiebelAppFacade.N19notifyNewFieldData;
            SiebelAppFacade.N19notifyNewFieldData = null;
          }
          if (SiebelAppFacade.N19notifyNewPrimary) {
            SiebelApp.S_App.NotifyObject.prototype.NotifyNewPrimary = SiebelAppFacade.N19notifyNewPrimary;
            SiebelAppFacade.N19notifyNewPrimary = null;
          }

          if (app) {
            app.$destroy(true);
            $('#vue_sample').remove();
            app = null;
          }
          $("link[href*='vuetify.min.css']").remove();
          $("link[href*='https://fonts.googleapis.com/css']").remove();
          $('#vuetify-theme-stylesheet').remove();

          this.destroyNexus();
          n19helper = null;
          SiebelAppFacade.HLSCaseFormAppletPR.superclass.EndLife.apply(this, arguments);
        }
        return HLSCaseFormAppletPR;
      }()
      );
      return "SiebelAppFacade.HLSCaseFormAppletPR";
    })
}
