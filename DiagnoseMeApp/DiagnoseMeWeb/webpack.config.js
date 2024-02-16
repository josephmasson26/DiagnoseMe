const path = require('path');

module.exports = {
    entry: {
        welcome: './src/index.js', // replace with the path to your home.js file
        home: './src/home.js', // replace with the path to your about.js file
        result: './src/result.js' // replace with the path to your contact.js file
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};