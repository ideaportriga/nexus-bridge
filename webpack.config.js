module.exports = (env, argv) => {

  const rules = [{
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }];

  let main;
  let devtool;
  let filename;
  if ('production' === argv.mode) { // remove console.log, add polyfill,
    rules.push({
      test: /\.js$/,
      use: {
        loader: 'strip-loader?strip[]=console.log'
      }
    });
    main = ['core-js/fn/promise', __dirname + '/src/index.js'];
    devtool = '';
    filename = 'N19Helper.min.js';
  } else { // this is a development mode
    main = [__dirname + '/src/index.js'];
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
    plugins: []
  };

  return config;

};
