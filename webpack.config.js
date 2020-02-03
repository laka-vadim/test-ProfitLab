const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: { loader: "babel-loader" },
                exclude: /node_modules/                
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};