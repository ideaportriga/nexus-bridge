const fs = require('fs-extra');
const path = require('path');

const n19Folder = path.resolve(__dirname, '../../../..', 'dist');
const manifestFilesFolder = path.resolve(__dirname, '..', 'siebel/custom');
const distFolder = path.resolve(__dirname, '..', 'dist');
const distFontFolder = path.resolve(__dirname, '..', 'dist/fonts');
const siebelScriptsCustomFolder = path.resolve(__dirname, '..', 'siebel/public-link/scripts/siebel/custom');
const siebelFontsFolder = path.resolve(__dirname, '..', 'siebel/public-link/fonts');

let options = {
    filter: (src) => {
        let isExcluded = src.endsWith('index.html') || src.endsWith('fonts');
        return !isExcluded;
    }
}

fs.copySync(path.resolve(n19Folder, 'N19Helper.js'), path.resolve(distFolder, 'N19Helper.js'));
console.log('N19 file is copied to dist folder');

fs.copySync(manifestFilesFolder, distFolder);
console.log('Siebel manifest files are copied to dist folder');

fs.copy(distFolder, siebelScriptsCustomFolder, options)
    .then(() => console.log('Application files are copied to Siebel public folder'))
    .catch(err => console.error(err));

fs.copy(distFontFolder, siebelFontsFolder)
    .then(() => console.log('Application fonts are copied to Siebel public folder'))
    .catch(err => console.error(err));
