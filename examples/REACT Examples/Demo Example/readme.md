# Steps to setup
* Copy content of 'n19_helper\react_example\siebel_folder' to 'siebel/custom/example_react/', references in files point to the example_react folder in the repository
* Add references to file in Siebel Manifest files:
	* siebel/custom/example_react/n19_example_pr.js
	* siebel/custom/example_react/N19Helper.min.js

* Add references in Siebel Manifest administration
	* to 'SIS Account Entry Applet' pr
	* to 'PLATFORM INDEPENDENT' N19Helper.min.js
About manifests: https://docs.oracle.com/cd/E14004_01/books/config_open_ui/customizing23.html
	
* Use custom .srf with changes applied to Form Applet
* Copy example folder with files to siebel/custom/
* Start dedicated
* press f12 and on browser refresh button (Chrome) right click and press Empty Cache and Hard reload, so the cache is cleared