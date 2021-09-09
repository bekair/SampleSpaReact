import { NoErrorsPlugin } from 'webpack';

export const entry = [
    'webpack/hot/only-dev-server',
    './js/app.js'
];

export const output = {
    path: __dirname + '/build',
    filename: 'bundle.js'
};

export const module = {
    loaders: [
        {
            test: /\.js?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader', loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        },
        {
            test: /\.css$/,
            loader: "style!css"
        }
    ]
};

export const plugins = [
    new NoErrorsPlugin()
];