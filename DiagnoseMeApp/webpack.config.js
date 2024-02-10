const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        home: './src/home.js',
        result: './src/result.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: './public/home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            filename: 'result.html',
            template: './public/result.html',
            chunks: ['result']
        })
    ]
};