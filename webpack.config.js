const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules|dist/,
            use: 'babel-loader'
        }, {
            test: /\.(scss|css)$/,
            use: [{
                loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
            }, {
                loader: 'css-loader',
                options: {sourceMap: !isProduction},
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: !isProduction
                }
            }, {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        './src/assets/styles/_colors.scss'
                    ]
                },
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Sandbox',
            filename: 'index.html',
            chunks: ['main'],
            template: './src/assets/template/index.html',
            inject: true,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};