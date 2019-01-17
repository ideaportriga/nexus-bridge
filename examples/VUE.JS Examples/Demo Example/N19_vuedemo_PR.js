/* ************************************* DISCLAIMER ********************************************************
  This is not an implementation example, but an example how we can build UI on top Siebel API,
  therefore no webpack is used here and no code separation in multiple files, since it requires more setup.
  And also ES6 avoidance so get IE11 supported.

  This was created and tested on 16.19 ENU, so there might be issues on another locales/versions.
*/

if (typeof (SiebelAppFacade.N19_vuedemo_PR) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.N19_vuedemo_PR");
  define("siebel/custom/N19_vuedemo_PR", ["siebel/phyrenderer", "siebel/custom/vue.js", "siebel/custom/polyfill.min.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.N19_vuedemo_PR = (function () {
        let vueObj;

        function N19_vuedemo_PR(pm) {
          SiebelAppFacade.N19_vuedemo_PR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(N19_vuedemo_PR, SiebelAppFacade.PhysicalRenderer);

        N19_vuedemo_PR.prototype.Init = function () {
          importCss();
          SiebelAppFacade.N19_vuedemo_PR.superclass.Init.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods
        }

        N19_vuedemo_PR.prototype.ShowUI = function () {
          vueObj = mountVueSample("vue_sample", this.GetPM());
          // SiebelAppFacade.N19_vuedemo_PR.superclass.ShowUI.apply(this, arguments); // Draws UI, drawing our custom applet only if on List view
        }

        N19_vuedemo_PR.prototype.BindData = function (bRefresh) {
          // SiebelAppFacade.N19_vuedemo_PR.superclass.BindData.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods
        }

        N19_vuedemo_PR.prototype.BindEvents = function () {
          // SiebelAppFacade.N19_vuedemo_PR.superclass.BindEvents.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods
        }

        N19_vuedemo_PR.prototype.EndLife = function () {
          //Cleanup before destroying applet object
          if (vueObj) {
            vueObj.$destroy();
            vueObj = null;
            $('vue_sample').remove();
          }
          $("link[href*='vuetify.min.css']").remove();
          SiebelAppFacade.N19_vuedemo_PR.superclass.EndLife.apply(this, arguments); //Siebel applet cleanup
        }
        return N19_vuedemo_PR;
      }()
      );
      return "SiebelAppFacade.N19_vuedemo_PR";
    })
}

function importCss() {
  $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet"></link>');
  $('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/vuetify.min.css"/>');
  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');
}

function addContainer(pm, vueId) {
  const siebeAppletId = pm.Get('GetFullId');
  const $applet = $("#" + siebeAppletId);
  const $header = $("#s_" + siebeAppletId + "_div");
  $header.hide();
  $applet.prepend("<div id='" + vueId + "'></div>");
}

function mountVueSample(elementId, pm) {
  var n19 = new SiebelAppFacade.N19Helper({ pm: pm });
  addContainer(pm, elementId);

  return new Vue({
    el: '#' + elementId,
    template: compiledTemplate,
    data: {
      snackbar: false,
      controls: {
        'Name': {},
        'AccountStatus': {},
        'AccountTypeCode': {},
        'Fund Eligible Flag': {},
        'Type': {}
      },
      'accountStatusList': [],
      'accountTypeCodeList': [],
      'accountTypeList': []
    },
    mounted: function () {
      this.selectionInit(); // resetting record based on siebel record, mapping control state to vue instance
      this.accountStatusList = n19.getStaticLOV('AccountStatus');
      this.accountTypeCodeList = n19.getStaticLOV('AccountTypeCode');
      this.accountTypeList = n19.getStaticLOV('Type');
    },
    methods: {
      saveRecord: function () {
        this.snackbar = n19.writeRecordSync()
      },
      changeValue: function (name) {
        if (n19.setControlValue(name, this.controls[name].value)) {
          if (this.controls[name].isPostChanges) {
            this.selectInit();
          }
        } else { // the value was not set successfully
          var currentValue = n19.getCurrentRecord()[name];
          setTimeout(function () {
            this.controls[name].value = currentValue;
          }.bind(this));
        }
      },
      nextRecord: function () {
        if (n19.canInvokeMethod("GotoNextSet")) {
          n19.nextRecord();
          this.selectionInit();
        } else {
          alert('GotoNextSet record is not available');
        }
      },
      prevRecord: function () {
        if (n19.canInvokeMethod("GotoPreviousSet")) {
          n19.prevRecord();
          this.selectionInit();
        } else {
          alert('GotoPreviousSet record is not available');
        }
      },
      escapeOnControl: function (name) {
        this.controls[name].value = n19.getCurrentRecord()[this.controls[name].fieldName];
        this.changeValue(name);
      },
      handleClear: function (name) { // this is needed because the clearing sets the model value to null
        this.controls[name].value = '';     // it will not be needed if we handle it inside N19
        this.changeValue(name);
      },
      selectionInit: function () {
        n19.getCurrentRecordModel(this.controls);
      },
      beforeDestroy: function () {
        n19 = null;
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
      <v-snackbar v-model="snackbar" :timeout="3000" :top="true"> \
        Record saved \
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn> \
      </v-snackbar> \
      <v-container fluid> \
        <v-layout row wrap> \
          <v-flex md12 pa-2> \
           <v-alert :value="true" type="info">N19 SIS Account Entry Applet rendered by VUE.JS PR</v-alert>\
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
            <v-autocomplete :rules="controls.AccountStatus.required ? [\'Required\'] : []" v-model="controls.AccountStatus.value" \
            :disabled="controls.AccountStatus.readonly" :items="accountStatusList" v-on:change="changeValue(\'AccountStatus\')" :label="controls.AccountStatus.label" \
            clearable v-on:click:clear="handleClear(\'AccountStatus\')" v-on:keyup.27="escapeOnControl(\'AccountStatus\')" /> \
          </v-flex> \
          <v-flex md4 pa-2> \
            <v-autocomplete :rules="controls.AccountTypeCode.required ? [\'Required\'] : []" v-model="controls.AccountTypeCode.value" \
            :disabled="controls.AccountTypeCode.readonly" :items="accountTypeCodeList" v-on:change="changeValue(\'AccountTypeCode\')" \
            clearable v-on:click:clear="handleClear(\'AccountTypeCode\')" :label="controls.AccountTypeCode.label" v-on:keyup.27="escapeOnControl(\'AccountTypeCode\')"/> \
          </v-flex> \
          <v-flex md4 pa-2> \
            <v-autocomplete :rules="controls.Type.required ? [\'Required\'] : []" v-model="controls.Type.value" \
            :disabled="controls.Type.readonly" :items="accountTypeList" v-on:change="changeValue(\'Type\')" \
            clearable v-on:click:clear="handleClear(\'Type\')" :label=\"controls.Type.label\" v-on:keyup.27="escapeOnControl(\'Type\')" /> \
          </v-flex> \
          <v-flex md12 pa-2> \
            <v-divider></v-divider> \
          </v-flex> \
          <v-flex md1 pa-2>\
            <v-btn block v-on:click="saveRecord" color="primary"><v-icon>save</v-icon>Save!</v-btn> \
          </v-flex> \
          <v-flex md9 pa-2> \
          </v-flex> \
          <v-flex md1 pa-2> \
            <v-tooltip top><v-btn block slot="activator" v-on:click="prevRecord" color="primary"> \
            <v-icon>navigate_before</v-icon></v-btn><span>Go to the previous record</span></v-tooltip> \
          </v-flex> \
          <v-flex md1 pa-2> \
            <v-tooltip top><v-btn block slot="activator" v-on:click="nextRecord" color="primary"> \
            <v-icon>navigate_next</v-icon></v-btn><span>Go to the previous record</span></v-tooltip> \
          </v-flex> \
        </v-layout> \
      </v-container> \
    </v-app> \
  </div>';
