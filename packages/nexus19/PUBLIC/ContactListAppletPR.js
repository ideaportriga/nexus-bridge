if (typeof (SiebelAppFacade.ContactListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ContactListAppletPR");
  define("siebel/custom/ContactListAppletPR", ["siebel/custom/NBDefaultListAppletPR", "siebel/custom/vue.js", "siebel/custom/vuetify.js"],
    function () {
      SiebelAppFacade.ContactListAppletPR = (function () {

        var n19helper;
        var app;
        var keepOUI = false;

        function ContactListAppletPR(pm) {
          SiebelAppFacade.ContactListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ContactListAppletPR, SiebelAppFacade.NBDefaultListAppletPR);

        ContactListAppletPR.prototype.Init = function () {
          if (keepOUI) {
            SiebelAppFacade.ContactListAppletPR.superclass.Init.apply(this, arguments);
          } else {
            SiebelAppFacade.ContactListAppletPR.superclass.NBInit.apply(this, arguments);

            this.removeHtml();
            n19helper = this.initializeNexus({ convertDates: true });

            $('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet"></link>');
            $('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/vuetify.min.css"/>');
            $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">');
          }
        }

        ContactListAppletPR.prototype.ShowUI = function () {
          if (keepOUI) {
            SiebelAppFacade.ContactListAppletPR.superclass.ShowUI.apply(this, arguments);
          }
        }

        ContactListAppletPR.prototype.BindEvents = function () {
          if (keepOUI) {
            SiebelAppFacade.ContactListAppletPR.superclass.BindEvents.apply(this, arguments);
          }
        }


        ContactListAppletPR.prototype.BindData = function (bRefresh) {
          if (keepOUI) {
            SiebelAppFacade.ContactListAppletPR.superclass.BindData.apply(this, arguments);
          } else {
            putVue("s_" + this.GetPM().Get('GetFullId') + "_div");
          }
        }

        var html = '\
          <div id="vue_sample"> \n\
            <v-app id="inspire"> \n\
            <v-snackbar v-model="snackBar" :timeout="3000" :top="true" :color="snackBarColor">{{snackBarText}}<v-btn :color="snackBarButtonColor" flat @click="snackBar = false">Close</v-btn></v-snackbar> \n\
            <v-container fluid> \n\
              <v-layout row wrap> \n\
                <v-flex md12 pa-2> \n\
                <v-toolbar flat color="white"> \n\
                <v-toolbar-title>Contacts</v-toolbar-title> \n\
                <v-divider class="mx-2" inset vertical></v-divider> \n\
                <v-spacer></v-spacer> \n\
                <v-dialog v-model="dialog" max-width="500px"> \n\
                  <template v-slot:activator="scope"> \n\
                    <v-btn color="primary" dark class="mb-2" v-on:click="newButtonClick(scope)">New Contact</v-btn> \n\
                  </template> \n\
                  <v-card> \n\
                    <v-card-title> \n\
                      <span class="headline">{{ formTitle }}</span> \n\
                    </v-card-title> \n\
                    <v-card-text> \n\
                      <v-container grid-list-md> \n\
                        <v-layout wrap> \n\
                          <v-flex xs12 sm6 md4> \n\
                            <v-text-field v-on:change="changeValue($event, \'Last Name\')" v-model="editedItem[\'Last Name\']" label="Last Name"></v-text-field> \n\
                          </v-flex> \n\
                          <v-flex xs12 sm6 md4> \n\
                            <v-text-field v-on:change="changeValue($event, \'First Name\')" v-model="editedItem[\'First Name\']" label="First Name"></v-text-field> \n\
                          </v-flex> \n\
                          <v-flex xs12 sm6 md4> \n\
                            <v-autocomplete v-on:change="changeValue($event, \'M/M\')" v-model="editedItem[\'M/M\']" label="Mr/Ms" :items="mmLovArr"></v-autocomplete> \n\
                          </v-flex> \n\
                          <v-flex xs12 sm6 md4> \n\
                            <v-text-field v-on:change="changeValue($event, \'Work Phone #\')" v-model="editedItem[\'Work Phone #\']" label="Work Phone #"></v-text-field> \n\
                          </v-flex> \n\
                          <v-flex xs12 sm6 md4> \n\
                            <v-text-field v-on:change="changeValue($event, \'Email Address\')" v-model="editedItem[\'Email Address\']" label="Email"></v-text-field> \n\
                          </v-flex> \n\
                        </v-layout> \n\
                      </v-container> \n\
                    </v-card-text> \n\
                    <v-card-actions> \n\
                      <v-spacer></v-spacer> \n\
                      <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>\n\
                      <v-btn color="blue darken-1" flat @click="save">Save</v-btn>\n\
                    </v-card-actions>\n\
                  </v-card>\n\
                </v-dialog>\n\
              </v-toolbar>\n\
              <v-data-table :headers="headers" :items="contacts" class="elevation-1">\n\
                <template v-slot:items="props">\n\
                  <td>{{ props.item[\'Last Name\'] }}</td>\n\
                  <td class="text-xs-right">{{ props.item[\'First Name\'] }}</td>\n\
                  <td class="text-xs-right">{{ props.item[\'M/M\'] }}</td>\n\
                  <td class="text-xs-right">{{ props.item[\'Work Phone #\'] }}</td>\n\
                  <td class="text-xs-right">{{ props.item[\'Email Address\'] }}</td>\n\
                  <td class="justify-center layout px-0">\n\
                    <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>\n\
                  </td>\n\
                </template>\n\
                <template v-slot:no-data>\n\
                  <v-btn color="primary" @click="initialize">Reset</v-btn>\n\
                </template>\n\
              </v-data-table>\n\                                                                                                                                              \n\
                </v-flex> \n\                                                                                                                                       \n\
                <v-fab-transition> \n\
                  <v-btn v-on:click="newButtonClick" v-show="true" color="pink" dark fixed bottom right fab> \n\
                    <v-icon>add</v-icon> \n\
                  </v-btn> \n\
                </v-fab-transition> \n\
              </v-layout> \n\
            </v-container></v-app> \n\
          </div>';

        var vue = {
          el: '#vue_sample',
          created() {
            this.initialize()
          },
          mounted: function () {
            this.afterSelection();
            this.subscribeId = n19helper.subscribe(this.afterSelection);
            this.mmLovArr = n19helper.getLOV('M/M');
          },
          beforeDestroyed() {
            n19helper.unsubscribe(this.subscribeId);
          },
          data: {
            mmLovArr: [],
            snackBar: false,
            snackBarColor: '',
            snackBarText: '',
            snackBarButtonColor: '',
            controls: {
            },
            methods: {
            },
            dialog: false,
            headers: [
              {
                text: 'Last Name',
                align: 'left',
                sortable: false,
                value: 'Last Name'
              },
              { text: 'First Name', value: 'First Name' },
              { text: 'Mr/Ms', value: 'M/M' },
              { text: 'Work Phone #', value: 'Work Phone #' },
              { text: 'Email', value: 'Email Address' },
              { text: 'Actions', value: 'name', sortable: false }
            ],
            contacts: [],
            editedIndex: -1,
            editedItem: {
              'Last Name': '',
              'First Name': '',
              'M/M': '',
              'Work Phone #': '',
              'Email Address': ''
            },
            defaultItem: {
              'Last Name': '',
              'First Name': '',
              'M/M': '',
              'Work Phone #': '',
              'Email Address': ''
            }
          },
          computed: {
            formTitle() {
              return this.editedIndex === -1 ? 'New Contact' : 'Edit Contact';
            }
          },
          watch: {
            // dialog(val) {
            //   val || this.close();
            // }
          },
          methods: {
            initialize() {
              this.contacts = n19helper.getControlsRecordSet(true);
            },
            editItem(item) {
              n19helper.positionOnRow(item._indx, {}, true);
              this.editedIndex = this.contacts.indexOf(item);
              this.editedItem = Object.assign({}, item);
              this.dialog = true;
            },
            close( { skipUndo } ) {
              if (!skipUndo) {
                if (n19helper.canInvokeMethod('UndoRecord')) {
                  n19helper.undoRecordSync();
                }
              }
              this.dialog = false;
              setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
              }, 300);
            },
            save() {
              n19helper.writeRecord().then(() => {
                this.snackBarColor = 'success';
                this.snackBarText = 'Record Saved Successfully';
                this.snackBarButtonColor = 'pink';
                this.snackBar = true;
                if (this.editedIndex > -1) {
                  Object.assign(this.contacts[this.editedIndex], this.editedItem);
                } else {
                  this.contacts.push(this.editedItem);
                }
                this.close({skipUndo: true});
              }).catch(() => {
                this.snackBarColor = 'error';
                this.snackBarText = 'FAILED TO SAVE';
                this.snackBarButtonColor = 'black';
                this.snackBar = true;
              });
            },
            changeValue(value, name) {
              var isChanged = n19helper._setControlValue(name, value);
              if (!isChanged) { // the value is not set
                alert('value is not set');
              }
            },
            newButtonClick: function () {
              n19helper.newRecordSync();
              const obj = {};
              Object.entries(n19helper.getCurrentRecordModel().controls).forEach((el)=>obj[el[0]]=el[1].value);

              this.editedItem = Object.assign({}, obj);
              console.log(this.editedItem);
              this.dialog = true;
            },
            nextButtonClick: function () {
              n19helper.nextRecord();
            },
            prevButtonClick: function () {
              n19helper.prevRecord();
            },
            afterSelection: function () {
              console.log('After selection....');
            }
          }
        };

        function putVue(divId) {
          $('#' + divId).append(html);
          app = new Vue(vue);
        }

        ContactListAppletPR.prototype.EndLife = function () {
          if (app) {
            app.$destroy(true);
            $('#vue_sample').remove();
            app = null;

            $("link[href*='vuetify.min.css']").remove();
            $("link[href*='https://fonts.googleapis.com/css']").remove();
            $('#vuetify-theme-stylesheet').remove();
            this.destroyNexus();
          }
          SiebelAppFacade.ContactListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return ContactListAppletPR;
      }()
      );
      return "SiebelAppFacade.ContactListAppletPR";
    })
}
