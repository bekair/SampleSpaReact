const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.jpeg', '.svg', 'ico']
    },
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, 'build'),
        hot: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
        compress: true
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Sample SPA",
            template: "public/index.html"
        }),
    ]
};