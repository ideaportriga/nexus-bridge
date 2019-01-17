# Quick Start Guide: Nexus19 + Vue.js example

This is not an example of implementation, and it is intentionally kept straightforward and inlined to make sure it works almost everywhere and also with IE11 without bundling. 

The demo example was tested with 16.19 ENU, it is straighforward and lightweight, so hopefully works also on other versions/locales.

* Import the sif-file into the Siebel Tools.
* Add the `N19 Account View` to the screen of your choce, add access to the view to your responsibility, and click the `Clear Cache` button on the `Responsibility Administration View`.
* Make the changes effective in your project way.
* Copy the files:
  * `examples\VUE.JS Examples\*.js` to the `siebel/custom/` folder.
  * `examples\VUE.JS Examples\Demo Example\N19_vuedemo_PR.js` to the `siebel/custom/` folder.
  * `examples\VUE.JS Examples\vuetify.min.css` to the `files/custom/` folder.
  * `dist\N19Helper.js` to the `siebel/custom/` folder.
* Add references to file in Siebel Manifest files:
	* `siebel/custom/N19_vuedemo_PR.js`
	* `siebel/custom/N19Helper.js`
* Add references in Siebel Manifest administration:
	* for the `Applet` type, the `Physical Renderer` usage type, and the `N19 SIS Account Entry Applet` name, add the `siebel/custom/N19_vuedemo_PR.js`.
	* for the `Application` type, the `Common` usage type, and the `PLATFORM INDEPENDENT` name, add the `siebel/custom/N19Helper.js`.

[Read more about manifests](https://docs.oracle.com/cd/E95904_01/books/ConfigOpenUI/customizing35.html)
* Open the Siebel Application.
* Clear the browser cache and navigate to the `N19 Account View`.
