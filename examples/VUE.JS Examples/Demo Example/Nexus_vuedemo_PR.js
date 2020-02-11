/* ************************************* DISCLAIMER ********************************************************
  This is not an implementation example, but an example how we can build UI on top Siebel API,
  therefore no webpack is used here and no code separation in multiple files, since it requires more setup.
  And also ES6 avoidance so get IE11 supported.

  This was created and tested on 16.19 ENU, so there might be issues on another locales/versions.
*/

if (typeof (SiebelAppFacade.Nexus_vuedemo_PR) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.Nexus_vuedemo_PR");
  define("siebel/custom/Nexus_vuedemo_PR", ["siebel/custom/NBDefaultAppletPR", "siebel/custom/vue.js", "siebel/custom/polyfill.min.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.Nexus_vuedemo_PR = (function () {
        let vueObj;

        function Nexus_vuedemo_PR(pm) {
          SiebelAppFacade.Nexus_vuedemo_PR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(Nexus_vuedemo_PR, SiebelAppFacade.NBDefaultAppletPR);

        Nexus_vuedemo_PR.prototype.Init = function () {
          importCss();
          SiebelAppFacade.Nexus_vuedemo_PR.superclass.Init.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods

          // we will use simplified BC, therefore safer to disable the new record creation
          this.GetPM().AddMethod("CanInvokeMethod", function (method, returnStructure) {
            if (("NewRecord" === method) || ("RefineQuery" === method)) {
              returnStructure["CancelOperation"] = true;
              returnStructure["ReturnValue"] = "";
            }
          }, { sequence: true, scope: this });

          vueObj = mountVueSample("vue_sample", this.GetPM());
        }

        Nexus_vuedemo_PR.prototype.EndLife = function () {
          //Cleanup before destroying applet object
          if (vueObj) {
            vueObj.$destroy();
            vueObj = null;
            $('vue_sample').remove();
          }
          $("link[href*='vuetify.min.css']").remove();
          $("link[href*='https://fonts.googleapis.com/css']").remove();
          $('#vuetify-theme-stylesheet').remove();

          SiebelAppFacade.Nexus_vuedemo_PR.superclass.EndLife.apply(this, arguments); //Siebel applet cleanup
        }
        return Nexus_vuedemo_PR;
      }()
      );
      return "SiebelAppFacade.Nexus_vuedemo_PR";
    })
}

function importCss() {
  $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet"></link>');
  $('head').append('<link type="text/css" rel="stylesheet" href="files/custom/vuetify.min.css"/>');
  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');
}

function addContainer(pm, vueId) {
  const siebeAppletId = pm.Get('GetFullId');
  const $applet = $("#" + siebeAppletId);
  const $header = $("#s_" + siebeAppletId + "_div");
  $header.remove();
  $applet.prepend("<div id='" + vueId + "'></div>");
}

function mountVueSample(elementId, pm) {
  var nexus = new SiebelAppFacade.NexusBridge({ pm: pm });
  addContainer(pm, elementId);

  return new Vue({
    el: '#' + elementId,
    template: compiledTemplate,
    data: {
      nexus: nexus,
      snackBar: false,
      snackBarColor: '',
      snackBarText: '',
      snackBarButtonColor: '',
      controls: {
        'Name': {},
        'AccountStatus': {},
        'AccountTypeCode': {},
        'Fund Eligible Flag': {},
        'Type': {}
      },
      methods: {
        GotoPreviousSet: false,
        GotoNextSet: false,
        WriteRecord: false,
        NewQuery: false
      },
      'accountStatusList': [],
      'accountTypeCodeList': [],
      'accountTypeList': []
    },
    mounted: function () {
      this.selectionInit(); // resetting record based on siebel record, mapping control state to vue instance
      this.selectionSubId = nexus.subscribe(this.selectionInit);
      this.accountStatusList = nexus.getStaticLOV('AccountStatus');
      this.accountTypeCodeList = nexus.getStaticLOV('AccountTypeCode');
      this.accountTypeList = nexus.getStaticLOV('Type');
    },
    methods: {
      saveRecord: function () {
        nexus.writeRecord(function () {
          this.snackBarColor = 'success';
          this.snackBarText = 'Record Saved Successfully';
          this.snackBarButtonColor = 'pink';
          this.snackBar = true;
        }.bind(this), function () {
          this.snackBarColor = 'error';
          this.snackBarText = 'FAILED TO SAVE';
          this.snackBarButtonColor = 'black';
          this.snackBar = true;
        }.bind(this));
      },
      changeValue: function (name) {
        if (!nexus.setControlValue(name, this.controls[name].value)) {
          // the value was not set properly
          var currentValue = nexus.getCurrentRecord()[name];
          setTimeout(function () {
            this.controls[name].value = currentValue;
          }.bind(this));
        }
      },
      nextRecord: function () {
        nexus.nextRecord();
      },
      prevRecord: function () {
        nexus.prevRecord();
      },
      newQuery: function () {
        nexus.invokeMethod('NewQuery');
      },
      executeQuery: function () {
        nexus.invokeMethod('ExecuteQuery');
      },
      escapeOnControl: function (name) {
        this.controls[name].value = nexus.getCurrentRecord()[this.controls[name].fieldName];
        this.changeValue(name);
      },
      handleClear: function (name) { // this is needed because the clearing sets the model value to null
        this.controls[name].value = '';     // it will not be needed if it will be handled inside Nexis
        this.changeValue(name);
      },
      selectionInit: function () {
        nexus.getCurrentRecordModel(this.controls, this.methods);
      },
      beforeDestroy: function () {
        this.unsubscribeId(this.selectionSubId);
        nexus = null;
      }
    }
  });
}

/*
  Templates could be loaded by requirejs with the !text plugin, this way can be separated, also there is possibility
  to import !vue plugin for requirejs, and use .vue files, however still without webpack you can not use ES6 freely
  if you are not using Chrome. To be able to use requirejs modules, you have to apply fix for require-ext.js (...).
*/
var compiledTemplate = '\
  <div id="vue_sample"> \
    <v-app id="inspire"> \
      <v-snackbar v-model="snackBar" :timeout="3000" :top="true" :color="snackBarColor"> \
        {{ snackBarText }} \
        <v-btn :color="snackBarButtonColor" flat @click="snackBar = false">Close</v-btn> \
      </v-snackbar> \
      <v-container fluid> \
        <v-layout row wrap> \
          <v-flex md12 pa-2> \
           <v-alert :value="true" type="info">{{ nexus.appletName }} rendered by VUE.JS PR / {{controls.state}}</v-alert>\
          </v-flex>\
          <v-flex md9 pa-2>\
            <v-text-field :rules="controls.Name.required ? [\'Required\'] : []" \
              v-on:input="changeValue(\'Name\')" ref="AccountName\" :disabled="controls.Name.readonly" :label="controls.Name.label" \
              v-model="controls.Name.value" v-on:keyup.27="escapeOnControl(\'Name\')" clearable v-on:click:clear="handleClear(\'Name\')" \
               :counter=\"controls.Name.maxSize"> \
            </v-text-field> \
          </v-flex> \
          <v-flex md3 pa-2> \
            <v-switch v-on:change="changeValue(\'Fund Eligible Flag\')" :label="controls[\'Fund Eligible Flag\'].label\" \
              v-model="controls[\'Fund Eligible Flag\'].value" :disabled="controls[\'Fund Eligible Flag\'].readonly\"> \
            </v-switch> \
          </v-flex> \
          <v-flex md4 pa-2> \
            <v-autocomplete :attach=true :rules="controls.AccountStatus.required ? [\'Required\'] : []" v-model="controls.AccountStatus.value" \
            :disabled="controls.AccountStatus.readonly" :items="accountStatusList" v-on:change="changeValue(\'AccountStatus\')" :label="controls.AccountStatus.label" \
            clearable v-on:click:clear="handleClear(\'AccountStatus\')" v-on:keyup.27="escapeOnControl(\'AccountStatus\')" /> \
          </v-flex> \
          <v-flex md4 pa-2> \
            <v-autocomplete :attach=true :rules="controls.AccountTypeCode.required ? [\'Required\'] : []" v-model="controls.AccountTypeCode.value" \
            :disabled="controls.AccountTypeCode.readonly" :items="accountTypeCodeList" v-on:change="changeValue(\'AccountTypeCode\')" \
            clearable v-on:click:clear="handleClear(\'AccountTypeCode\')" :label="controls.AccountTypeCode.label" v-on:keyup.27="escapeOnControl(\'AccountTypeCode\')"/> \
          </v-flex> \
          <v-flex md4 pa-2> \
            <v-autocomplete :attach=true :rules="controls.Type.required ? [\'Required\'] : []" v-model="controls.Type.value" \
            :disabled="controls.Type.readonly" :items="accountTypeList" v-on:change="changeValue(\'Type\')" \
            clearable v-on:click:clear="handleClear(\'Type\')" :label=\"controls.Type.label\" v-on:keyup.27="escapeOnControl(\'Type\')" /> \
          </v-flex> \
          <v-flex md12 pa-2> \
            <v-divider></v-divider> \
          </v-flex> \
          <v-flex md1 pa-2>\
            <v-btn :disabled="!methods.WriteRecord" block v-on:click="saveRecord" color="primary"><v-icon>save</v-icon>Save!</v-btn> \
          </v-flex> \
          <v-flex md1 pa-2>\
            <v-btn v-show="controls.state === 3" :disabled="controls.state !== 3" block v-on:click="executeQuery" color="primary"><v-icon>search</v-icon>Run!</v-btn> \
            <v-btn v-show="controls.state !== 3" :disabled="!methods.NewQuery" block v-on:click="newQuery" color="primary"><v-icon>search</v-icon>Query!</v-btn> \
          </v-flex> \
          <v-flex md8 pa-2> \
          </v-flex> \
          <v-flex md1 pa-2> \
            <v-tooltip top><v-btn :disabled="!methods.GotoPreviousSet" block slot="activator" v-on:click="prevRecord" color="primary"> \
            <v-icon>navigate_before</v-icon></v-btn><span>Go to the previous record</span></v-tooltip> \
          </v-flex> \
          <v-flex md1 pa-2> \
            <v-tooltip top><v-btn :disabled="!methods.GotoNextSet" block slot="activator" v-on:click="nextRecord" color="primary"> \
            <v-icon>navigate_next</v-icon></v-btn><span>Go to the next record</span></v-tooltip> \
          </v-flex> \
        </v-layout> \
      </v-container> \
    </v-app> \
  </div>';
