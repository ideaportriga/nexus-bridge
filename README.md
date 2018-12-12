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
  * `HLSCaseFormAppletPR.js` - the ex . This example will not work on the Sample Siebel Database, as some modifications of HLS Case Form Applet were done to make this example working.
  * 
* `dist` - the compiled files 
* `src` - N19Helper source files
* `vue_example\example` - very simple example of using the helper class, just to demonstrate the basic capabilities, everything is inlined and compatible with IE11 without compilation.
 