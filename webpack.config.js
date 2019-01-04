module.exports = (env, argv) => {

  const webpack = require('webpack');

  const rules = [{
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }];

  let plugins = [];
  const main = [__dirname + '/src/main.js']; // '@babel/polyfill',
  let devtool = '';
  let filename;
  if ('production' === argv.mode) { // remove console.log, add polyfill, minify
    const PACKAGE = require('./package.json');
    const banner = `${PACKAGE.name} - ${PACKAGE.version} - Released under the MIT License`;
    plugins = [new webpack.BannerPlugin(banner)];
    rules.push({
      test: /\.js$/,
      use: {
        loader: 'strip-loader?strip[]=console.log'
      }
    });
    filename = 'N19Helper.min.js';
    main.unshift('core-js/fn/promise');
    main.unshift('core-js/es7/object');
  } else { // this is a development mode
    devtool = 'source-map';
    filename = 'N19Helper.js';
  }

  const config = {
    entry: {
      main
    },
    devtool,
    output: {
      path: __dirname  + '/dist',
      filename
    },
    module: {
      rules
    },
    resolve: {
    },
    plugins
  };

  return config;

};
