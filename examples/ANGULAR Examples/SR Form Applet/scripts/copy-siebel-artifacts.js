const fs = require('fs-extra');
const path = require('path');

const manifestFilesPath = path.resolve(__dirname, '..', 'siebel/custom');
const appFilesPath = path.resolve(__dirname, '..', 'dist');
const fontFilesPath = path.resolve(__dirname, '..', 'dist/fonts');
const scriptsCustomPath = path.resolve(__dirname, '..', 'siebel/public-link/scripts/siebel/custom');
const fontsCustomPath = path.resolve(__dirname, '..', 'siebel/public-link/fonts');

fs.copy(manifestFilesPath, scriptsCustomPath)
    .then(() => console.log('Siebel manifest files are copied to Siebel public folder'))
    .catch(err => console.error(err));

let options = {
    filter: (src) => {
        let isExcluded = src.endsWith('index.html') || src.endsWith('fonts');
        return !isExcluded;
    }
}

fs.copy(appFilesPath, scriptsCustomPath, options)
    .then(() => console.log('Application files are copied to Siebel public folder'))
    .catch(err => console.error(err));

fs.copy(fontFilesPath, fontsCustomPath)
    .then(() => console.log('Application fonts are copied to Siebel public folder'))
    .catch(err => console.error(err));