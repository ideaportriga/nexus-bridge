module.exports = () => {

  const webpack = require('webpack');
  const PACKAGE = require('../nexus19/package.json');
  const banner = `${PACKAGE.name} - ${PACKAGE.version} - Released under the MIT License`;

  const rules = [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        "presets": [
          ["@babel/preset-env", {
            "targets": {
              "ie": "11"
            },
            "useBuiltIns": "usage",
            "corejs": "3"
          }
          ]
        ],
        "plugins": [
          "@babel/plugin-transform-async-to-generator"
        ]
      }
    }
  }];

  return config = {
    entry: {
      main: [`${__dirname}/src/index.js`]
    },
    devtool: 'source-map',
    output: {
      path: __dirname + '/dist',
      filename: 'NexusBridge.js'
    },
    module: {
      rules
    },
    resolve: {
    },
    plugins: [new webpack.BannerPlugin(banner)]
  };
};
