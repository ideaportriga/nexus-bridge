# N19 Helper

## Build
```bash
npm install
npm run dev
npm run build
```

`npm run dev` generates the source maps. The compiled code is not uglified. It does not work in IE11.

`npm run build` uglifies the code, and does not generate the source maps. It is expected to work in IE11; however, at the moment of writing, it was not tested yet.

If you do `npm run dev`, check if path specified in `package.json` is valid (`C:\Siebel\16.0.0.0.0\Client\public\SCRIPTS\siebel\custom`).

The `dist` folder contains the following files:
* `N19Helper.js` and `N19Helper.js.map` - created by `npm run dev`
* `N19Helper.min.js` - created by `npm run build` 

## Documentation
[Wiki](/../wikis/home)

## Structure
* `PUBLIC` contains the several files:
  * `HLSCaseFormAppletPR.js` - the example of HLS Case Form Applet rendered with Vue.JS PR using the Vuetify component library, it demonstrates the coexistence of the standard Siebel applet and the Nexus applet on the same view, therefore it contains some redundant code that is not needed in the implementation that replaces the entire Siebel View. Also to secure the coexistence of the Siebel Applet and the VUE.JS applet, this demo PR calls some private methods of the helper class. And finally, it contains also some code to trace the invoked methods and the sent notifications, and that code is also needed for the real implementation. This example will not work fully on the Sample Siebel Database, as some modifications of HLS Case Form Applet were done to make this example working and also the `N19 BS` is used in this test PR; the sif file is in the `DEMO` folder. This example is used as a test PR for the helper class, and it is not a good example of the implementation, as it is mostly ES5 and Vue.JS/Vuetify (`vue.js` and `vuetify.js` files in the same folder, `vuetify.min.css` is in the `DEMO` folder) are just inlined.
  Note: please remember that to make the Siebel Tools business service available, you need to create a new application user property. E.g. if your application is Siebel Public Sector, in the Siebel Tools create a new user property for the `Siebel Public Sector` application with the following attibutes: the name is `ClientBusinessServiceX` where `X` is the next sequential number, and the value is the name of the Siebel Tools business service - `N19 BS`. 
  * `NexusDefaultFormAppletPR.js` and `NexusDefaultListAppletPR.js` - the examples of Nexus PRs. These PRs could be used if the implementation adopts the approach when 
  * `BeautifiedOracleJS` folder contains some automatically beautified Oracle classes.
* `dist` - the compiled files 
* `src` - N19Helper source files
* `react_example` and `vue_example` and `` - very simple examples of using the helper class implemented in React and Vue.js, just to demonstrate the basic capabilities, everything is inlined and compatible with IE11 without compilation.
 