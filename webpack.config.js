const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
      },
    devServer: {
        contentBase: "./build",
        hot: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    // creates style nodes from JS strings
                    "style-loader",
                    // translates CSS into CommonJS
                    "css-loader",
                    // compiles Sass to CSS
                    "sass-loader",
                ]
            },
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: true
        })
    ]
};