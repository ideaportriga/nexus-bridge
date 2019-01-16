# Quick Start Guide - Nexus19 + Vue.js example
* Compile project to SRF, add 'N19 Account View' to your screen, add access to view to responsibility and clear cache in Responsibility view.
* Copy content of 'n19_helper\vue_example\example' to 'siebel/custom/example/', references in files point to the example folder in the repository, so path is important
* Add references to file in Siebel Manifest files:
	* siebel/custom/example/n19_example_pr.js
	* siebel/custom/example/N19Helper.min.js

* Add references in Siebel Manifest administration
	* to 'N19 SIS Account Entry Applet' pr
	* to 'PLATFORM INDEPENDENT' N19Helper.min.js
About manifests: https://docs.oracle.com/cd/E14004_01/books/config_open_ui/customizing23.html

* Start dedicated/reload application
* press f12 and on browser refresh button (Chrome) right click and press Empty Cache and Hard reload, so the cache is cleared
