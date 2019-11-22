# Quick Start Guide: the Nexus Bridge + Angular example

This guide will help to setup the demo example that is built using the Nexus Bridge and Angular framework.

The applet supports:
- navigation through records
- displaying, editing, saving and deleting data
- picklists that are read from Siebel configuration
- field properties that are read from Siebel configuration (required, readonly)
- query operations

Requirements: this example requires access to icons and fonts stored on https://fonts.googleapis.com/.

This is not an example of implementation that can be used on production. It is intentionally kept straightforward.

![result](images/form-demo.png)

1. Make a clean [Nexus Bridge Setup](/../wikis/Setup Nexus Bridge) if you haven't done it before.
1. Import SIF files in `siebel/sif/*` into the Siebel Tools.
1. Add the `Nexus Angular Demo Screen` to your application:
      * Find out your Siebel Application Name in application `.cfg` file or by logging in and typing `SiebelApp.S_App.GetAppName()` in Chrome Developer Tools console.
      * Use the Siebel Tools and add `Nexus Angular Demo Screen` under `Application > Screen Menu Item` for your Siebel Application Name.
      * Add `Nexus Angular Demo Screen`(with `Nexus Angular Demo` value for `Text - String Override` property) under `Application > Page Tab` for your Siebel Application Name.
1. Compile (Siebel IP16 and earlier) or Deliver (Siebel IP17+) the following objects: 
    * `Nexus Angular Demo` project.
    * Application object that you've updated above.
1. Add the `Nexus Angular Demo View` to your application:
      * Use Siebel Web Client to add a new record with Name `Nexus Angular Demo View` under `Administration - Application > Views`.
      * Under `Administration - Application > Views` add your responsibility to this view.
      * Under `Administration - User > Users` – add the same responsibility to your user.
      * Click the `Clear cache` button under `Administration – Application > Responsibilities` view.
1. Re-login to your Siebel Application and check that the `Nexus Angular Demo` screen is available.
1. Copy below files to the `[CLIENT_HOME or SERVER_HOME]/public/SCRIPTS/siebel/custom/` folder:
    * `dist/*.*` excluding `fonts` folder.
1. Copy below files to the `[CLIENT_HOME or SERVER_HOME]/public/fonts/` folder:
    * `dist/fonts/*.*`.
1. Use Siebel Client to reference JS-files in Siebel Open UI Manifest as follows:
	  * under `Administration - Application > Manifest Files` add a new record: 
        * **Name:** `siebel/custom/SRFormPR.js`.
	  * under `Administration - Application > Manifest Administration` add a new record under **UI Objects**: 
        * **Name:** `Nexus Angular Demo Form Applet`
        * **Usage Type:** `Physical Renderer`
        * **Type:** `Applet`
	  * under `Administration - Application > Manifest Administration` add a new record under **Object Expression**: 
        * **Level:** `1`
	  * under `Administration - Application > Manifest Administration` add a new record under **Files**: 
        * **Name:** `siebel/custom/SRFormPR.js`
1. Empty browser cache and hard reload
   <br>*(e.g. using Chrome: press F12, then right-click a browser Refresh button and press ‘Empty Cache and Hard Reload’)*
1. Re-login to your Siebel Application.
1. Navigate to the `Nexus Angular Demo` Screen.
