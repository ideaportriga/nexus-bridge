# N19 Helper

## Build
```bash
npm install
npm run dev
npm run build
```

`npm run dev` doesn't include the Promise polyfill, and generates the source maps. The code is not uglified. Probably it is not going to work in IE11.

`npm run build` uglifies the code, includes the Promise polyfile, and does not generate the source maps. It is expected to work in IE11; however, at the moment of writing, it was not tested yet.

If you do `npm run dev`, check if path specified in `package.json` is valid (`C:\Siebel\16.0.0.0.0\Client\public\SCRIPTS\siebel\custom`).

The `dist` folder contains the following files:
* `N19Helper.js` and `N19Helper.js.map` - created by `npm run dev`
* `N19Helper.min.js` - created by `npm run build` 

## Documentation
[Wiki](/../wikis/home)
