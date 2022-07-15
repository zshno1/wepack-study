const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './index.js',
        print: './print.js'
    }, 
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}