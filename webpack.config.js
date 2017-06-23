var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');
var env = process.env.NODE_ENV || 'development';

var config = {
    entry: [
        './client/index.js'
            ],
    output: {
        filename: 'app.bundle.js',
        path: path.join(__dirname, './public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
          {
                presets:['react']
          }
    },
            {
                test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
    ]
};

console.log('NODE_ENV:', env);


if (env === 'production') {
    config.plugins.push(

    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
        sourceMap: false
        })
    );
}

module.exports = config;
