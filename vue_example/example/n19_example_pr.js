/* ************************************* DISCLAIMER ********************************************************
  This is not an implementation example, but an example how we can build UI on top Siebel API,
  therefore no webpack is used here and no code separation in multiple files, since it requires more setup.
  And also ES6 avoidance so IE11 browser is also supported.

  This was created and tested on ENU, so there might be issues with another locales, for example with
  date format etc.
*/

if (typeof (SiebelAppFacade.n19_example_pr) === "undefined") {
  SiebelJS.Namespace("SiebelAppFacade.n19_example_pr");
  define("siebel/custom/example/n19_example_pr", ["siebel/phyrenderer", "siebel/custom/example/vue.js", "siebel/custom/example/vuetify.js"],
    function () {
      SiebelAppFacade.n19_example_pr = (function () {
        var vueObj, containerId = 'vue_sample';

        function n19_example_pr(pm) {
          SiebelAppFacade.n19_example_pr.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(n19_example_pr, SiebelAppFacade.PhysicalRenderer);

        n19_example_pr.prototype.Init = function () {
          importCss();
          SiebelAppFacade.n19_example_pr.superclass.Init.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods
        }

        n19_example_pr.prototype.ShowUI = function () {
          if (SiebelApp.S_App.GetActiveView().GetName() === "N19 Account View") { //Loading our applet only on List view
            vueObj = mountVueSample(containerId, this.GetPM());
          } else {
            SiebelAppFacade.n19_example_pr.superclass.ShowUI.apply(this, arguments); // Draws UI, drawing our custom applet only if on List view
          }
        }

        n19_example_pr.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.n19_example_pr.superclass.BindData.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods
        }

        n19_example_pr.prototype.BindEvents = function () {
          //SiebelAppFacade.n19_example_pr.superclass.BindEvents.apply(this, arguments); //Executing vanilla bindings, required to use SiebelApp/pm methods
        }

        n19_example_pr.prototype.EndLife = function () {
          //Cleanup before destroying applet object
          if (vueObj) vueObj.$destroy();
          SiebelAppFacade.n19_example_pr.superclass.EndLife.apply(this, arguments); //Siebel applet cleanup
        }

        return n19_example_pr;
      }()
      );
      return "SiebelAppFacade.n19_example_pr";
    })
}
/*
  Here just avoiding manifests
*/
function importCss() {
  $('head').prepend('<link type="text/css"  rel="stylesheet" href="SCRIPTS/siebel/custom/example/vuetify.min.css"/>');
  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');
}

function addContainer(pm, vueId) {
  const siebeAppletId = pm.Get('GetFullId');
  const $applet = window.$(`#${siebeAppletId}`);
  const $header = window.$(`#s_${siebeAppletId}_div`);
  $header.hide();
  $applet.prepend(`<div id='${vueId}'></div>`);
}

/*
  Avoiding ES6 to support IE11, webpack should be used in order to work with ES6, or use browser,
  which supports ES6 features you would like to use
*/
function mountVueSample(elementId, pm) {
  var API = new SiebelAppFacade.N19Helper({ pm: pm });
  addContainer(pm, elementId);

  return new Vue({
    el: '#' + elementId,
    template: compiledTemplate,
    data: {
      snackbar: false,
      instance: API,
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
      this.selectionInit(); //resetting record based on siebel record, mapping control state to vue instance
    },

    computed: {},

    methods: {
      saveRecord: function () {
        var that = this;
        API.writeRecord(function () {
          that.snackbar = true;
        });
      },

      deleteRecord: function () {
        if (API.canInvokeMethod("DeleteRecord")) {
          API.deleteRecord();
          this.selectionInit();
        } else {
          alert('DeleteRecord record is not available');
        }
      },

      changeValue(name) {
        if (API.setControlValue(name, this.controls[name].value)) {
          if (this.controls[name].isPostChanges) this.selectInit();
        } else {
          var currentValue = API.getCurrentRecord()[name];
          this.controls[name].value = '';
          var that = this;

          setTimeout(function () {
            that.controls[name].value = currentValue;
          });
        }
      },

      nextRecord: function () {
        if (API.canInvokeMethod("GotoNextSet")) {
          API.nextRecord();
          this.selectionInit();
        } else {
          alert('GotoNextSet record is not available');
        }
      },

      prevRecord: function () {
        if (API.canInvokeMethod("GotoPreviousSet")) {
          API.prevRecord();
          this.selectionInit();
        } else {
          alert('GotoPreviousSet record is not available');
        }
      },

      escapeOnName: function () {
        this.controls.Name.value = API.getCurrentRecord().Name;
        this.changeValue('Name');
      },

      handleClear: function (name) { // this is needed because clearing set the model value to null
        this.controls[name].value = '';     // maybe it is not needed if we handle it inside N19
        this.changeValue(name);
      },

      selectionInit: function () {
        API.getCurrentRecordModel(this.controls);

        if (!this.accountStatusList.length) this.accountStatusList = API.getStaticLOV('AccountStatus');
        if (!this.accountTypeCodeList.length) this.accountTypeCodeList = API.getStaticLOV('AccountTypeCode');
        if (!this.accountTypeList.length) this.accountTypeList = API.getStaticLOV('Type');

      },

      doDrillDown: function () { API.drilldown('Name'); },

      beforeDestroy: function () {
        API = null;
      }
    }
  });
}

/* 
  Templates could be loaded by requirejs with the !text plugin, this way can be separated, also there is possibility
  to import !vue plugin for requirejs, and use .vue files, however still without webpack you can not use ES6 freely
  if you are not using  Chrome. To be able to use requirejs modules, you have to apply fix for require-ext.js (...).

  With the webpack you can build an API and import it in manifest in PLATFORM_INDEPENDENT, where you can 
  contact your API through some global object. Glueing together webpack built js with requirejs without modifying
  by hand built file, workaround not know.
*/

//https://babeljs.io/repl
var compiledTemplate = "\n       <div id=\"vue_sample\">\n         <v-app id=\"inspire\">\n           <v-snackbar v-model=\"snackbar\" :timeout=\"3000\" :top=\"true\">\n             Record saved\n             <v-btn color=\"pink\" flat @click=\"snackbar = false\">Close</v-btn>\n           </v-snackbar>\n           <v-container fluid>\n             <v-layout row wrap>\n               <v-flex md12 pa-2>\n                 <v-alert :value=\"true\" type=\"info\">{{instance.appletName}} rendered by VUE.JS PR</v-alert>\n               </v-flex>\n\n               <v-flex md8 pa-2>\n                <v-text-field \n                    @click:prepend=\"doDrillDown\" \n                    :rules=\"controls.Name.required ? ['Required'] : []\" \n                    v-on:input=\"changeValue('Name')\" \n                    ref=\"AccountName\" :disabled=\"controls.Name.readonly\" \n                    :label=\"controls.Name.label\" \n                    v-model=\"controls.Name.value\" \n                    clearable \n                    v-on:keyup.esc=\"escapeOnName\" \n                    v-on:click:clear=\"handleClear('Name')\" \n                    :counter=\"controls.Name.maxSize\"></v-text-field>\n                </v-flex>\n\n                <v-flex md3 pa-2>\n                  <v-switch \n                    v-on:change=\"changeValue('Fund Eligible Flag')\" \n                    :label=\"controls['Fund Eligible Flag'].label\" \n                    v-model=\"controls['Fund Eligible Flag'].value\" \n                    :disabled=\"controls['Fund Eligible Flag'].readonly\"></v-switch>\n                </v-flex>\n\n                <v-flex md3 pa-2>                                                                                                                                                 \n                  <v-autocomplete \n                    :rules=\"controls.AccountStatus.required ? ['Required'] : []\" \n                    v-model=\"controls.AccountStatus.value\" \n                    :disabled=\"controls.AccountStatus.readonly\" \n                    :items=\"accountStatusList\" \n                    v-on:change=\"changeValue('AccountStatus')\" \n                    :label=\"controls.AccountStatus.label\"/>\n                </v-flex>\n\n                <v-flex md3 pa-2>                                                                                                                                                 \n                  <v-autocomplete \n                    :rules=\"controls.AccountTypeCode.required ? ['Required'] : []\" \n                    v-model=\"controls.AccountTypeCode.value\" \n                    :disabled=\"controls.AccountTypeCode.readonly\" \n                    :items=\"accountTypeCodeList\" \n                    v-on:change=\"changeValue('AccountTypeCode')\" \n                    :label=\"controls.AccountTypeCode.label\"/>\n                </v-flex>\n\n                <v-flex md3 pa-2>                                                                                                                                                 \n                  <v-autocomplete \n                    :rules=\"controls.Type.required ? ['Required'] : []\" \n                    v-model=\"controls.Type.value\" \n                    :disabled=\"controls.Type.readonly\" \n                    :items=\"accountTypeList\" \n                    v-on:change=\"changeValue('Type')\" \n                    :label=\"controls.Type.label\"/>\n                </v-flex>\n              \n               <v-flex md12 pa-2>\n                  <v-divider></v-divider>\n                </v-flex>\n                <v-flex md1 pa-2>\n                  <v-btn block v-on:click=\"saveRecord\" color=\"primary\"><v-icon>save</v-icon>Save!</v-btn>\n                </v-flex>\n                <v-flex md1 pa-2>\n                  <v-btn block v-on:click=\"deleteRecord\" color=\"primary\"><v-icon>delete</v-icon>Delete!</v-btn>\n                </v-flex>\n                <v-flex md7 pa-2> </v-flex>\n                <v-flex md1 pa-2>\n                  <v-tooltip top><v-btn block slot=\"activator\" v-on:click=\"prevRecord\" color=\"primary\"><v-icon>navigate_before</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>\n                </v-flex>\n                <v-flex md1 pa-2>\n                  <v-tooltip top><v-btn block slot=\"activator\" v-on:click=\"nextRecord\" color=\"primary\"><v-icon>navigate_next</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>\n                </v-flex>\n\n             </v-layout>\n           </v-container>\n         </v-app>\n       </div>\n     ";
/* var template = `
       <div id="vue_sample">
         <v-app id="inspire">
           <v-snackbar v-model="snackbar" :timeout="3000" :top="true">
             Record saved
             <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
           </v-snackbar>
           <v-container fluid>
             <v-layout row wrap>
               <v-flex md12 pa-2>
                 <v-alert :value="true" type="info">{{instance.appletName}} rendered by VUE.JS PR</v-alert>
               </v-flex>

               <v-flex md8 pa-2>
                <v-text-field 
                    @click:prepend="doDrillDown" 
                    :rules="controls.Name.required ? [\'Required\'] : []" 
                    v-on:input="changeValue(\'Name\')" 
                    ref="AccountName" :disabled="controls.Name.readonly" 
                    :label="controls.Name.label" 
                    v-model="controls.Name.value" 
                    clearable 
                    v-on:keyup.esc="escapeOnName" 
                    v-on:click:clear="handleClear('Name')" 
                    :counter="controls.Name.maxSize"></v-text-field>
                </v-flex>

                <v-flex md3 pa-2>
                  <v-switch 
                    v-on:change="changeValue('Fund Eligible Flag')" 
                    :label="controls['Fund Eligible Flag'].label" 
                    v-model="controls['Fund Eligible Flag'].value" 
                    :disabled="controls['Fund Eligible Flag'].readonly"></v-switch>
                </v-flex>

                <v-flex md3 pa-2>                                                                                                                                                 
                  <v-autocomplete 
                    :rules="controls.AccountStatus.required ? [\'Required\'] : []" 
                    v-model="controls.AccountStatus.value" 
                    :disabled="controls.AccountStatus.readonly" 
                    :items="accountStatusList" 
                    v-on:change="changeValue('AccountStatus')" 
                    :label="controls.AccountStatus.label"/>
                </v-flex>

                <v-flex md3 pa-2>                                                                                                                                                 
                  <v-autocomplete 
                    :rules="controls.AccountTypeCode.required ? [\'Required\'] : []" 
                    v-model="controls.AccountTypeCode.value" 
                    :disabled="controls.AccountTypeCode.readonly" 
                    :items="accountTypeCodeList" 
                    v-on:change="changeValue('AccountTypeCode')" 
                    :label="controls.AccountTypeCode.label"/>
                </v-flex>

                <v-flex md3 pa-2>                                                                                                                                                 
                  <v-autocomplete 
                    :rules="controls.Type.required ? [\'Required\'] : []" 
                    v-model="controls.Type.value" 
                    :disabled="controls.Type.readonly" 
                    :items="accountTypeList" 
                    v-on:change="changeValue('Type')" 
                    :label="controls.Type.label"/>
                </v-flex>
              
               <v-flex md12 pa-2>
                  <v-divider></v-divider>
                </v-flex>
                <v-flex md1 pa-2>
                  <v-btn block v-on:click="saveRecord" color="primary"><v-icon>save</v-icon>Save!</v-btn>
                </v-flex>
                <v-flex md1 pa-2>
                  <v-btn block v-on:click="deleteRecord" color="primary"><v-icon>delete</v-icon>Delete!</v-btn>
                </v-flex>
                <v-flex md7 pa-2> </v-flex>
                <v-flex md1 pa-2>
                  <v-tooltip top><v-btn block slot="activator" v-on:click="prevRecord" color="primary"><v-icon>navigate_before</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>
                </v-flex>
                <v-flex md1 pa-2>
                  <v-tooltip top><v-btn block slot="activator" v-on:click="nextRecord" color="primary"><v-icon>navigate_next</v-icon></v-btn><span>Go to the previous record</span></v-tooltip>
                </v-flex>

             </v-layout>
           </v-container>
         </v-app>
       </div>
     `; */