const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

require("dotenv").config();

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: 'source-map',
    optimization: {
        minimizer: [new TerserJSPlugin({})]
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: "auto"
        })
    ]
});