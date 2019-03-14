module.exports = () => {

  const webpack = require('webpack');
  const PACKAGE = require('./package.json');
  const banner = `${PACKAGE.name} - ${PACKAGE.version} - Released under the MIT License`;

  const rules = [{
    test: /\.js$/,
    use: {
      loader: 'babel-loader'
    }
  }];

  return config = {
    entry: {
      main: [`${__dirname}/src/main.js`]
    },
    devtool: 'source-map',
    output: {
      path: __dirname  + '/dist',
      filename: 'N19Helper.js'
    },
    module: {
      rules
    },
    resolve: {
    },
    plugins: [new webpack.BannerPlugin(banner)]
  };
};
