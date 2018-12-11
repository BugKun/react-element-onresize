const webpack = require("webpack"),
    path = require('path'),
    threadLoader = require('thread-loader');


threadLoader.warmup({}, [
  'babel-loader'
]);


module.exports = {
    mode: "production",
    entry: {
        'index': path.resolve(__dirname, './src')
    }, 
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]',
        publicPath: '/'
    },
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: ['ReactDom'],
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types'
        }
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './src'), 
            'node_modules'
        ],
        extensions: [
            '.jsx',
            '.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx|.js|.mjs$/,
                exclude: /node_modules/,
                use: [
                    "thread-loader",
                    "babel-loader?cacheDirectory=true"
                ]
            }
        ]
    }
};
