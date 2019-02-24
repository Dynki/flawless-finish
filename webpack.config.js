var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }            
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            {
              test: /\.(html)$/,
              use: {
                loader: 'html-loader',
                options: {
                  attrs: [':data-src']
                }
              }
            }        
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: 'main.css'
        })
    ]
}