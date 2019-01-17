# Quick Start Guide: Nexus19 + Vue.js example

This is not an example of implementation, and it is intentionally kept straightforward and inlined to make sure it works almost everywhere and also with IE11 without bundling. 

The demo example was tested with 16.19 ENU.
1. [Download](https://cbox.ideaportriga.lv/oleg.koleskin/n19helper/-/archive/master/n19helper-master.zip) the Nexus19 library project.
1. Import the `n19helper/examples/VUE.JS Examples/Demo Example/SIF` sif-files into the Siebel Tools.
1. Make the changes effective in your project way (Compile or Submit).
1. Add the `N19 Account View` to the screen of your choce, register the view using Siebel Client, add access to the view to your responsibility, and click the `Clear Cache` button on the `Responsibility Administration View`.
1. Make the changes effective in your project way (Compile or Submit).
1. Copy below files to the `[Siebel Client or Server Home]\public\SCRIPTS\siebel\custom\` folder:
    * `n19helper\examples\VUE.JS Examples\*.js`
    * `n19helper\examples\VUE.JS Examples\Demo Example\N19_vuedemo_PR.js`
    * `n19helper\dist\N19Helper.js`
1. Copy `n19helper\examples\VUE.JS Examples\vuetify.min.css` file to the `[Siebel Client or Server Home]\public\files\custom` folder.
1. Use Siebel Client to reference js files in Siebel Open UI Manifest as follows:
	- under `Administration - Application > Manifest Files` 
	>- add 2 new record with: 
	><br>**Name:** `siebel/custom/N19_vuedemo_PR.js`
    ><br>**Name:** `siebel/custom/N19Helper.js`

	- under `Administration - Application > Manifest Administration` 

   >- add a new record under **UI Objects** with: 
   >    <br>**Name:** `PLATFORM INDEPENDENT`
   >    <br>**Usage Type:** `Common`
   >    <br>**Type:** `Application`

   >- add a new record under **Object Expression** with:
   >    <br>**Level:** `1`

   >- add a new record under **Files** with:
   >    <br>**Name:** `siebel/custom/N19Helper.js`

	- under `Administration - Application > Manifest Administration` 

   >- add a new record under **UI Objects** with: 
   >    <br>**Name:** `N19 SIS Account Entry Applet`
   >    <br>**Usage Type:** `Physical Renderer`
   >    <br>**Type:** `Applet`

   >- add a new record under **Object Expression** with:
   >    <br>**Level:** `1`


   >- add a new record under **Files** with:
   >    <br>**Name:** `siebel/custom/N19_vuedemo_PR.js`

   [Bookshelf > Manifests](https://docs.oracle.com/cd/E95904_01/books/ConfigOpenUI/customizing35.html)
1. Open the Siebel Application.
1. Clear the browser cache and navigate to the `N19 Account View`.