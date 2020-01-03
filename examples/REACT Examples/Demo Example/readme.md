# Quick Start Guide: Nexus Bridge + React example

This guide will help to setup the demo example that is built using the Nexus Bridge and React framework.

The demo supports:

- navigation through records
- displaying, editing, saving and deleting data (supporting keyboard shortcuts)
- query (supporting keyboard shortcuts)
- picklists that are read from Siebel configuration
- field properties that are read from Siebel configuration (required, field length)

Requirements:

- Access to icons and fonts stored on https://fonts.googleapis.com/.
- Siebel version: 16+

This is not an example of implementation that can be used on production. It is intentionally kept straightforward.

![result](demo_react.png)

1. Make a clean [Nexus Bridge Setup](/../../wiki/Setup-Nexus-Bridge) if you haven't done it before.

1. Clone the project `git clone https://github.com/ideaportriga/nexus-bridge` or download and unpack [the project's archive](../../../../../archive/master.zip).

1. Import [sif-file](https://raw.githubusercontent.com/ideaportriga/nexus-bridge/master/examples/REACT%20Examples/Demo%20Example/SIF/N19_React_Objects.sif) _(use the mouse right click and `Save link as...` to download the file)_ into the Siebel Tools.

1. Add the `Nexus React Account Screen` to your application:

   - Find out your Siebel Application Name in application `.cfg` file or by logging in and typing `SiebelApp.S_App.GetAppName()` into Chrome Developer Tools console.

   - Use the Tools to add `Nexus React Account Screen` under `Application > Screen Menu Item` for your Siebel Application Name.

   - Use the Tools to add `Nexus React Account Screen` under `Application > Page Tab` for your Siebel Application Name.

1. Compile (Siebel IP16) or deliver (Siebel IP17+) your changes:

   - Even in 19.11 changes on the Application object still require the Object Manager restart.

1. Add the `N19 React Account View` to your application:

   - Use the Siebel Web Client to register `N19 React Account View` under `Administration - Application > Views`.

   - Add your user's responsibility to this view.
   - Click the `Clear cache` button on `Administration – Application > Responsibilities`.

1. Copy the files and folders in [react-app/build](../../../../../tree/master/examples/REACT%20Examples/Demo%20Example/react-app/build) to the `[Siebel Client or Server Home]\public\SCRIPTS\siebel\custom\react-app` folder.

1. Use the Siebel Web Client to reference JS-files in Siebel Open UI Manifest as follows:

   - under `Administration - Application > Manifest Files` add a new record:

     **Name:** `siebel/custom/react-app/NEXUS_REACT_PR.js`

   - under `Administration - Application > Manifest Administration` add a new record under **UI Objects**:

     **Name:** `N19 React SIS Account Entry Applet`

     **Usage Type:** `Physical Renderer`

     **Type:** `Applet`

   - and add a new record under **Object Expression** with:

     **Level:** `1`

   - and add a new record under **Files** with:

     **Name:** `siebel/custom/react-app/NEXUS_REACT_PR.js`

1. Empty browser cache and hard reload _(e.g. using Chrome with open DevTools: press F12, then right-click a browser Refresh button and press ‘Empty Cache and Hard Reload’)_

1. Re-login to your Siebel Application.

1. Navigate to the `Nexus React Account Screen` Screen.
