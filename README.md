# Nexus19
Nexus19 is a JS library that wraps a Siebel Presentation Model and allows building sophisticated UI for Siebel using modern JS frameworks.

## Documentation
The [Wiki](/../wikis/home) provides a Nexus19 library documentation.

## Getting Started

### Prerequisites
To compile the project you need to have installed `Node.js`. 

You can also use the [compiled files](./dist)

### Build
When a project is cloned, install the dependences.
```bash
npm install
```

#### Build the project
```bash
npm run dev
```
OR
```bash
npm run build
```

`npm run dev` generates the source maps. The compiled code is not uglified. It does not work in IE11.

`npm run build` uglifies the code, and does not generate the source maps. It is expected to work in IE11; however, at the moment of writing, it was not tested yet.

If you do `npm run dev`, check if path specified in `package.json` is valid (`C:\Siebel\16.0.0.0.0\Client\public\SCRIPTS\siebel\custom`).

The `dist` folder contains the following files:

### Folders Structure
* `PUBLIC` contains the several files:
  * `HLSCaseFormAppletPR.js` - the example of HLS Case Form Applet rendered with Vue.JS PR using the Vuetify component library, it demonstrates the coexistence of the standard Siebel applet and the Nexus applet on the same view, therefore it contains some redundant code that is not needed in the implementation that replaces the entire Siebel View. Also to secure the coexistence of the Siebel Applet and the VUE.JS applet, this demo PR calls some private methods of the helper class. And finally, it contains also some code to trace the invoked methods and the sent notifications, and that code is also needed for the real implementation. This example will not work fully on the Sample Siebel Database, as some modifications of HLS Case Form Applet were done to make this example working and also the `N19 BS` is used in this test PR; the sif file is in the `DEMO` folder. This example is used as a test PR for the helper class, and it is not a good example of the implementation, as Vue.JS/Vuetify (`vue.js` and `vuetify.js` files in the same folder, `vuetify.min.css` is in the `DEMO` folder) are just inlined. This example is not compatible to IE11, and also it requires to load `NexusDefaultListAppletPR.js` for Contact Team Mvg Applet. 
  Note: please remember that to make the Siebel Tools business service available, you need to create a new application user property. E.g. if your application is Siebel Public Sector, in the Siebel Tools create a new user property for the `Siebel Public Sector` application with the following attibutes: the name is `ClientBusinessServiceX` where `X` is the next sequential number, and the value is the name of the Siebel Tools business service - `N19 BS`. 
  * `NexusDefaultFormAppletPR.js` and `NexusDefaultListAppletPR.js` - the examples of Nexus PRs. These PRs could be used if the implementation adopts the approach when the instances of the Nexus classes are created by applet PRs.
  * `BeautifiedOracleJS` folder contains some automatically beautified Oracle classes, these files are used just for reference.
* `dist` - the Nexus19 compiled files:
  * `N19Helper.js` and `N19Helper.js.map` - created by `npm run dev`
  * `N19Helper.min.js` - created by `npm run build` 
* `src` - N19Helper source files
* `react_example` and `vue_example` and `` - very simple examples of using the helper class implemented in React and Vue.js, just to demonstrate the basic capabilities, everything is inlined and compatible with IE11 without compilation.
* `SIF` - the Nexus19 Siebel Tools Objects (sif-files) 

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](/../tags). 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
