const path = require('path');
const ExtractPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-core',
              options: {
                presets: ['es2015']
              }
            }
          ]
        }, 
        {
          test: /\.scss$/,
          use:
            new ExtractPlugin({
              filename: 'main.css'
            }).extract({
              use: ['scss-loader', 'css-loader']
            })
        }
      ]
    }
}