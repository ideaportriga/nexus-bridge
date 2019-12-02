# Quick Start Guide: the Nexus Bridge + React example

This guide will help to setup the demo example that is built using the Nexus Bridge and React framework.

The demo supports:

* navigation through records
* displaying, editing, saving and deleting data (supporting keyboard shortcuts)
* query (supporting keyboard shortcuts)
* picklists that are read from Siebel configuration
* field properties that are read from Siebel configuration (required, field length)

Requirements: 
* Access to icons and fonts stored on https://fonts.googleapis.com/.
* Siebel version: 16+

This is not an example of implementation that can be used on production. It is intentionally kept straightforward.

 ![result](demo_react.png)

1. Make a clean [Nexus Bridge Setup](/../../wiki/Setup-Nexus-Bridge) if you haven't done it before.

1. Clone the project `git clone https://github.com/ideaportriga/nexus-bridge` or download and unpack [the project's archive](../../../../../archive/master.zip).

1. Import [sif-file](https://raw.githubusercontent.com/ideaportriga/nexus-bridge/master/examples/REACT%20Examples/Demo%20Example/siebel/sif/N19_React_Objects.sif) *(use the mouse right click and `Save link as...` to download the file)* into the Siebel Tools.

1. Add the `N19 React Account Screen` to your application:

      * Find out your Siebel Application Name in application `.cfg` file or by logging in and typing `SiebelApp.S_App.GetAppName()` into Chrome Developer Tools console.
      
      * Use the Siebel Tools and add `N19 React Account Screen` under `Application > Screen Menu Item` for your Siebel Application Name.
      
      * Add `N19 React Account Screen` under `Application > Page Tab` for your Siebel Application Name
      
1. Compile (Siebel IP16 and earlier) or deliver (Siebel IP17+) the following objects:

    * `Nexus19 React Demo Examples` project.
    
    * Application object that you've updated above.
    
1. Add the `N19 React Account View` to your application:

      * Use the Siebel Web Client to register `N19 React Account View` under `Administration - Application > Views`.
      
      * Under `Administration - Application > Views` add your responsibility to this view.
      
      * Under `Administration - User > Users` – add the same responsibility to your user.
      
      * Click the `Clear cache` button on `Administration – Application > Responsibilities`.
      
1. Re-login to your Siebel Application and check that the `N19 React Account Screen` is available.

1. Copy the file below to the `[Siebel Client or Server Home]\public\SCRIPTS\siebel\custom` folder:

    * `n19helper-master/packages/nexus-bridge/SIEBEL/PUBLIC/NBAppletPR.js`.
    
1. Copy the files below and folders to the `[Siebel Client or Server Home]\public\SCRIPTS\siebel\custom\react-app` folder:

    * `n19helper-master/examples/REACT Examples/Demo Example/react-app/build/*`.
    
1. Use Siebel Client to reference JS-files in Siebel Open UI Manifest as follows:
	* under `Administration - Application > Manifest Files`  add two new records: 
		* **Name:** `siebel/custom/react-app/N19_REACT_PR.js`
		* **Name:** `siebel/custom/NBAppletPR.js`

	* under `Administration - Application > Manifest Administration` add a new record under **UI Objects**: 
   		* **Name:** `N19 React SIS Account Entry Applet`
   		* **Usage Type:** `Physical Renderer`
   		* **Type:** `Applet`

   	* and add a new record under **Object Expression** with:
   		* **Level:** `1`

  	* and add a new record under **Files** with:
   
   		* **Name:** `siebel/custom/react-app/N19_REACT_PR.js`

	* under `Administration - Application > Manifest Administration` add a new record under **UI Objects**: 
   		* **Name:** `N19 React Contact List Applet`
		* **Usage Type:** `Physical Renderer`
   		* **Type:** `Applet`

   	* and add a new record under **Object Expression**:
   		* **Level:** `1`

   	* and add a new record under **Files** with:
   		* **Name:** `siebel/custom/NBAppletPR.js`

1. Empty browser cache and hard reload *(e.g. using Chrome with open DevTools: press F12, then right-click a browser Refresh button and press ‘Empty Cache and Hard Reload’)*

1. Re-login to your Siebel Application.

1. Navigate to the `N19 React Account Screen` Screen.
