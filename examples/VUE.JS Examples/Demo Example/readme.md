# Quick Start Guide: Nexus19 + Vue.js example

This is not an example of implementation, and it is intentionally kept straightforward and inlined to make sure it works almost everywhere and also with IE11 without bundling. 

The demo example was tested with 16.19 ENU.
1. ### [Download](https://cbox.ideaportriga.lv/oleg.koleskin/n19helper/-/archive/master/n19helper-master.zip) the Nexus19 library project.
1. Import the `n19helper/examples/VUE.JS Examples/Demo Example/SIF` sif-files into the Siebel Tools.
1. Make the changes effective in your project way (Compile or Submit).
1. Add the `N19 Account View` to the screen of your choce, register the view using Siebel Client, add access to the view to your responsibility, and click the `Clear Cache` button on the `Responsibility Administration View`.
1. Make the changes effective in your project way (Compile or Submit).
1. Copy below files to the to the `[Siebel Client or Server Home]\public\SCRIPTS\siebel\custom\` folder:
    * `n19helper\examples\VUE.JS Examples\*.js`
    * `n19helper\examples\VUE.JS Examples\Demo Example\N19_vuedemo_PR.js`
    * `n19helper\dist\N19Helper.js`
1. Copy `n19helper\examples\VUE.JS Examples\vuetify.min.css` file to the `[Siebel Client or Server Home]\public\files\custom` folder:
1. Add references to file in Siebel Manifest files:
	* `siebel/custom/N19_vuedemo_PR.js`
	* `siebel/custom/N19Helper.js`
1. Add references in Siebel Manifest administration:
	* for the `Applet` type, the `Physical Renderer` usage type, and the `N19 SIS Account Entry Applet` name, add the `siebel/custom/N19_vuedemo_PR.js`.
	* for the `Application` type, the `Common` usage type, and the `PLATFORM INDEPENDENT` name, add the `siebel/custom/N19Helper.js`.

[Read more about manifests](https://docs.oracle.com/cd/E95904_01/books/ConfigOpenUI/customizing35.html)
* Open the Siebel Application.
* Clear the browser cache and navigate to the `N19 Account View`.
