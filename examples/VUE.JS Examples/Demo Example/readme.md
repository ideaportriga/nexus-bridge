# Quick Start Guide: the Nexus Bridge + Vue.js example

This guide will help to setup the demo example of a Form Applet that is built using the Nexus Bridge and Vue.js framework.

The applet supports:
* navigation through records
* displaying, editing, saving and deleting data (supporting keyboard shortcuts)
* query operations (supporting keyboard shortcut)
* picklists that are read from Siebel configuration
* field properties that are read from Siebel configuration (required, field length)

Requirements: this example requires access to icons and fonts stored on https://fonts.googleapis.com/

This is not an example of implementation that can be used on production. It is intentionally kept straightforward.

 ![result](demo_vuejs.png)
 
1. Make a clean [Nexus Bridge Setup](/../../wiki/Setup-Nexus-Bridge) if you haven't done it before.

1. Import the `n19helper-master/examples/VUE.JS Examples/Demo Example/SIF/*` sif-files into the Siebel Tools.

1. Add the `N19 Vue Account Screen` to your application:
      * Find out your Siebel Application Name in application `.cfg` file or by logging in and typing `SiebelApp.S_App.GetAppName()` into Chrome Developer Tools console.
      
      * Use the Siebel Tools and add `N19 Vue Account Screen` under `Application > Screen Menu Item` for your Siebel Application Name.
      
      * Also add `N19 Vue Account Screen`(with `N19 Vue` value for `Text - String Override` property) under `Application > Page Tab` for your Siebel Application Name.
      
1. Compile (Siebel IP16 and earlier) or deliver (Siebel IP17+) the following objects:

    * `Nexus 19 Vue Demo Examples` project.
    
    * Application object, that you've updated above.
    
1. Add the `N19 Account View` to your application:

      * Use the Siebel Web Client to register `N19 Account View` under `Administration - Application > Views`.
      
      * Under `Administration - Application > Views` add your responsibility to this view.
      
      * Under `Administration - User > Users` – add the same responsibility to your user.
      
      * Click the `Clear cache` button on `Administration – Application > Responsibilities`.

1. Re-login to your Siebel Application and check that the `N19 Vue Account Screen` Screen is available.

1. Copy the files below to the `[Siebel Client or Server Home]\public\SCRIPTS\siebel\custom\` folder:

    * `n19helper-master\examples\VUE.JS Examples\*.js`
    
    * `n19helper-master\examples\VUE.JS Examples\Demo Example\N19_vuedemo_PR.js`
    
1. Copy `n19helper-master\examples\VUE.JS Examples\vuetify.min.css` file to the `[Siebel Client or Server Home]\public\files\custom` folder.

1. Use the Siebel Web Client to reference JS-files in Siebel Open UI Manifest as follows:

     * under `Administration - Application > Manifest Files` add a new record: 
     	* **Name:** `siebel/custom/N19_vuedemo_PR.js`

	- under `Administration - Application > Manifest Administration` 

    >- add a new record under **UI Objects** with: 
    >    <br>**Name:** `N19 SIS Account Entry Applet`
    >    <br>**Usage Type:** `Physical Renderer`
    >    <br>**Type:** `Applet`

    >- add a new record under **Object Expression** with:
    >    <br>**Level:** `1`

    >- add a new record under **Files** with:
    >    <br>**Name:** `siebel/custom/N19_vuedemo_PR.js`
    
1. Empty browser cache and hard reload *(e.g. using Chrome: press F12, then right-click a browser Refresh button and press ‘Empty Cache and Hard Reload’)*

1. Re-login to your Siebel Application.

1. Navigate to the `N19 Vue Account Screen` screen.
