# Quick Start Guide: the Nexus Bridge + Angular example

This guide will help to setup the demo example that is built using the Nexus Bridge and Angular framework.

The demo supports:

* navigation through records
* displaying, editing, saving and deleting data
* query operations
* picklists that are read from Siebel configuration
* field properties that are read from Siebel configuration (required, readonly)

Requirements: 
* Access to icons and fonts stored on https://fonts.googleapis.com/. 
* Siebel version: 16+

This is not an example of implementation that can be used on production. It is intentionally kept straightforward.

![result](images/form-demo.png)

1. Make a clean [Nexus Bridge Setup](/../../wiki/Setup-Nexus-Bridge) if you haven't done it before.

1. Import [sif-file](https://raw.githubusercontent.com/ideaportriga/nexus-bridge/master/examples/ANGULAR%20Examples/SR%20Form%20Applet/siebel/sif/Nexus%20Angular%20Demo.sif) *(use the mouse right click and `Save link as...` to download the file)* into the Siebel Tools.

1. Add the `Nexus Angular Demo Screen` to your application:

      * Find out your Siebel Application Name in application `.cfg` file or by logging in and typing `SiebelApp.S_App.GetAppName()` in Chrome Developer Tools console.
      
      * Use the Tools to add `Nexus Angular Demo Screen` under `Application > Screen Menu Item` for your Siebel Application Name.
      
      * Use the Tools to add `Nexus Angular Demo Screen` under `Application > Page Tab` for your Siebel Application Name.

1. Compile (Siebel IP16) or deliver (Siebel IP17+) your changes.

1. Add the `Nexus Angular Demo View` to your application:

      * Use the Siebel Web Client to register `Nexus Angular Demo View` under `Administration - Application > Views`.
      
      * Add your user's responsibility to this view.
            
      * Click the `Clear cache` button on `Administration – Application > Responsibilities`.

1. Copy the files below to the `[CLIENT_HOME or SERVER_HOME]/public/SCRIPTS/siebel/custom/` folder:

    * [dist/*.*](/dist) excluding `fonts` folder.

1. Copy the files below to the `[CLIENT_HOME or SERVER_HOME]/public/fonts/` folder:
    * `dist/fonts/*.*`.

1. Use the Siebel Web Client to reference JS-files in Siebel Open UI Manifest as follows:
	  * under `Administration - Application > Manifest Files` add a new record: 
    
        * **Name:** `siebel/custom/SRFormPR.js`
        
	  * under `Administration - Application > Manifest Administration` add a new record under **UI Objects**: 
    
        * **Name:** `Nexus Angular Demo Form Applet`
        * **Usage Type:** `Physical Renderer`
        * **Type:** `Applet`
        
	  * and add a new record under **Object Expression**: 
    
        * **Level:** `1`
        
	  * and add a new record under **Files**: 
    
        * **Name:** `siebel/custom/SRFormPR.js`

1. Empty browser cache and hard reload *(e.g. using Chrome with open DevTools: press F12, then right-click a browser Refresh button and press ‘Empty Cache and Hard Reload’)*.

1. Re-login to your Siebel Application.

1. Navigate to the `Nexus Angular Demo Screen`.
