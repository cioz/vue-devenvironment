'use strict'

//const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HOST = 'localhost'
const PORT = 8080

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        contentBase: 'dist',
        compress: true,
        host: HOST,
        port: PORT,
        open: true,
        overlay: { warnings: false, errors: true },
        publicPath: '/',
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
      //  new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename:'assets/styles.css'
        })
    ]
}

