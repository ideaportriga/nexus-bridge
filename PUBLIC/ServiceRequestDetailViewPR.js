if (typeof (SiebelAppFacade.ServiceRequestDetailViewPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ServiceRequestDetailViewPR");
  define("siebel/custom/ServiceRequestDetailViewPR", ["siebel/viewpr", "siebel/custom/vue.js"],
    function () {
      SiebelAppFacade.ServiceRequestDetailViewPR = (function () {

        function ServiceRequestDetailViewPR(pm) {
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ServiceRequestDetailViewPR, SiebelAppFacade.ViewPR);
        var pm;
        var app;

        ServiceRequestDetailViewPR.prototype.Init = function () {
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.Init.apply(this, arguments);
          pm = this.GetPM();
          SiebelJS.Log(pm.Get("GetName") + ": ServiceRequestDetailViewPR:      Init method reached.");
        }

        ServiceRequestDetailViewPR.prototype.ShowUI = function () {
          SiebelJS.Log(pm.Get("GetName") + ": ServiceRequestDetailViewPR:      ShowUI method reached.");
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.ShowUI.apply(this, arguments);
          //$('#_sweview > div').hide();
        }

        ServiceRequestDetailViewPR.prototype.BindData = function (bRefresh) {
          SiebelJS.Log(pm.Get("GetName") + ": ServiceRequestDetailViewPR:      BindData method reached.");
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.BindData.apply(this, arguments);

          /* var appletmap = SiebelApp.S_App.GetActiveView().GetAppletMap();
          for (var applet in appletmap) {
            console.log(SiebelAppFacade.N19[appletmap[applet].GetName()]);
          }

          var html = '\
          <div id="app">        \n\
          <h1>{{message}}</h1>  \n\
          </div>'

          $('#_sweview').append(html); */

          //$('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/chunk-vendors.css"/>');
          //$('head').append('<link type="text/css"  rel="stylesheet" href="files/custom/app.css"/>');
          //$('head').append('<script src=/scripts/siebel/custom/chunk-vendors.js/>');
          //$('head').append('<script src=/scripts/siebel/custom/app.js/>');

          /* app = new Vue({
            el: '#app',
            mounted: function() {
              console.log('VUE mounted');
              var appletmap = SiebelApp.S_App.GetActiveView().GetAppletMap();
              for (var applet in appletmap) {
                console.log(appletmap[applet].GetName());
              }
            },
            data: {
              message: 'VUE is here'
            }
          }); */
        }

        ServiceRequestDetailViewPR.prototype.BindEvents = function () {
          SiebelJS.Log(pm.Get("GetName") + ": ServiceRequestDetailViewPR:      BindEvents method reached.");
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.BindEvents.apply(this, arguments);
        }

        ServiceRequestDetailViewPR.prototype.EndLife = function () {

          /* app.$destroy(true);
          setTimeout(function(){
            $('#app').remove();
            app = null;
          })
          $('#_sweview div').show(); */
          SiebelJS.Log(pm.Get("GetName") + ": ServiceRequestDetailViewPR:      EndLife method reached.");
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.EndLife.apply(this, arguments);
        }

        return ServiceRequestDetailViewPR;
      }()
      );
      return "SiebelAppFacade.ServiceRequestDetailViewPR";
    })
}
