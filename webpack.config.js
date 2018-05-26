const webpack = require('webpack');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        filename: 'app.bundle.js',
        path: path.resolve('build')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets:[ 'es2016', 'react', 'stage-2' ]
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new HTMLWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new LiveReloadPlugin({appendScriptTag: true})
    ]
};
