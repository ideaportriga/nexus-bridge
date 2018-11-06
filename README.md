# N19 Helper

## Build
```bash
npm install
npm run build
```
Before build, check if path specified in `webpack.config.js` is valid (`C:\Siebel\16.0.0.0.0\Client\public\SCRIPTS\siebel\custom`)

## Siebel Manifest
Load the `N19Helper.js` using the Siebel manifest (Application - Common)

## Initialization

### Applet PR
* Overrides BindData, BindEvents, and ShowUI, and does not call the methods of super classes (commented out)
* Hides applet's div
* Initializes the instance of N19Helper in the Init procedure

```js
if (typeof (SiebelAppFacade.ServiceRequestActivityListAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ServiceRequestActivityListAppletPR");
  define("siebel/custom/ServiceRequestActivityListAppletPR", ["siebel/jqgridrenderer"],
    function () {
      SiebelAppFacade.ServiceRequestActivityListAppletPR = (function () {

        function ServiceRequestActivityListAppletPR(pm) {
          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ServiceRequestActivityListAppletPR, SiebelAppFacade.JQGridRenderer);
        var appletName;
        var pm;

        ServiceRequestActivityListAppletPR.prototype.Init = function () {
          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.Init.apply(this, arguments);
          pm = this.GetPM();
          appletName = pm.Get("GetName");

          //initialize the instance of N19Helper
          SiebelAppFacade.N19 = SiebelAppFacade.N19 || {};
          SiebelAppFacade.N19[appletName] = new SiebelAppFacade.N19Helper({ pm: pm });
        }

        ServiceRequestActivityListAppletPR.prototype.ShowUI = function () {
          var divId = "s_" + pm.Get("GetFullId") + "_div";
          document.getElementById(divId).style.display = 'none';
          //SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.ShowUI.apply(this, arguments);
        }

        ServiceRequestActivityListAppletPR.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.BindData.apply(this, arguments);
        }

        ServiceRequestActivityListAppletPR.prototype.BindEvents = function () {
          //SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.BindEvents.apply(this, arguments);
        }

        ServiceRequestActivityListAppletPR.prototype.EndLife = function () {
          SiebelAppFacade.ServiceRequestActivityListAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return ServiceRequestActivityListAppletPR;
      }()
      );
      return "SiebelAppFacade.ServiceRequestActivityListAppletPR";
    })
}
```

### View PR
* Overrides BindData, BindEvents, and ShowUI, and does not call the methods of super classes (commented out)
* Hides everything inside `_sweview` 
* Injects the external application that manipulates with Siebel Data using the instances of N19Helpers

```js
if (typeof (SiebelAppFacade.ServiceRequestDetailViewPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.ServiceRequestDetailViewPR");
  define("siebel/custom/ServiceRequestDetailViewPR", ["siebel/viewpr", "siebel/custom/vue.js"],
    function () {
      SiebelAppFacade.ServiceRequestDetailViewPR = (function () {

        function ServiceRequestDetailViewPR(pm) {
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(ServiceRequestDetailViewPR, SiebelAppFacade.ViewPR);

        ServiceRequestDetailViewPR.prototype.Init = function () {
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.Init.apply(this, arguments);
        }

        ServiceRequestDetailViewPR.prototype.ShowUI = function () {
          //SiebelAppFacade.ServiceRequestDetailViewPR.superclass.ShowUI.apply(this, arguments);
          document.querySelector('#_sweview > div').style.display = 'none';
        }

        ServiceRequestDetailViewPR.prototype.BindData = function (bRefresh) {
          //SiebelAppFacade.ServiceRequestDetailViewPR.superclass.BindData.apply(this, arguments);
        }

        ServiceRequestDetailViewPR.prototype.BindEvents = function () {
          //SiebelAppFacade.ServiceRequestDetailViewPR.superclass.BindEvents.apply(this, arguments);
        }

        ServiceRequestDetailViewPR.prototype.EndLife = function () {
          SiebelAppFacade.ServiceRequestDetailViewPR.superclass.EndLife.apply(this, arguments);
        }

        return ServiceRequestDetailViewPR;
      }()
      );
      return "SiebelAppFacade.ServiceRequestDetailViewPR";
    })
}
```

The initailized instances of `N19Helper` could be iterated as 

```js
var appletmap = SiebelApp.S_App.GetActiveView().GetAppletMap();
for (var applet in appletmap) {
  console.log(SiebelAppFacade.N19[appletmap[applet].GetName()]);
}
```

### SetControlValue

```js
SiebelAppFacade.N19["Service Request Detail Applet"].setControlValue('Status', 'Pending')
````

```js
SiebelAppFacade.N19["Service Request List Applet"].setControlValue('Commit Time', '31/10/2018 10:18:00 AM')
```

