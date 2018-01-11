const path = require('path');

const finalPath = path.join(__dirname,'public');

module.exports = {
    entry: './src/app.js',
    output: {
        path: finalPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: finalPath
    }
};