// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// Ensure environment variables are read.
require("../config/env");

const chalk = require("chalk");
const fs = require("fs-extra");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
const printBuildError = require("react-dev-utils/printBuildError");
const webpack = require("webpack");
const config = require("../config/webpack.config");
const paths = require("../config/paths");

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1);
}

// We require that you explictly set browsers and do not fall back to
// browserslist defaults.
const { checkBrowsers } = require("react-dev-utils/browsersHelper");
checkBrowsers(paths.appPath)
  .then(
    () => {
      webpack(config).watch({}, (err, stats) => {
        if (err) {
          console.error(err);
        } else {
          // fs.emptyDirSync(paths.appBuild);
          copyPublicFolder();
        }
        console.error(
          stats.toString({
            chunks: false,
            colors: true
          })
        );
      });
    },
    err => {
      console.log(chalk.red("Failed to compile.\n"));
      printBuildError(err);
      process.exit(1);
    }
  )
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true
  });
}
