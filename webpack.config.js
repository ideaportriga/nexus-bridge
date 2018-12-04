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

  if ('production' === argv.mode) { // remove console.log
    rules.push({
      test: /\.js$/,
      use: {
        loader: 'strip-loader?strip[]=console.log'
      }
    });
  }

  let config = {
    entry: {
    //  main: ['core-js/fn/promise', __dirname + '/src/index.js']
      main: [__dirname + '/src/index.js']
    },
    devtool: 'source-map',
    output: {
      path: "C:\\Siebel\\16.0.0.0.0\\Client\\public\\SCRIPTS\\siebel\\custom",
      filename: 'N19Helper.js'
    },
    module: {
      rules: rules
    },
    resolve: {
    },
    plugins: []
  };

  return config;

};
