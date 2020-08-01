const path = require('path');
const outputDir = path.resolve(__dirname, 'dist/js/');
module.exports = {
    devtool: 'eval-source-map',
    entry: 
        {home: path.resolve(__dirname, 'src/js/home.js'),
        projects: path.resolve(__dirname, 'src/js/projects.js'),
        onepost: path.resolve(__dirname, 'src/js/onepost.js'),
        oneproject: path.resolve(__dirname, 'src/js/oneproject.js'),cv: path.resolve(__dirname, 'src/js/cv.js')},
    mode: 'production',
    output: {
        path: outputDir,
        filename: '[name].js'
    }
};