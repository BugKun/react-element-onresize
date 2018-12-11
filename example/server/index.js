/**
 * Created by JOE on 2017/3/16.
 */
const express = require('express'),
    app = express(),
    compress = require("compression"),
    path = require('path');


/**
 * webpack-dev-middleware
 */
const webpack = require('webpack'),
webpackDevMiddleware = require('webpack-dev-middleware'),
webpackHotMiddleWare = require("webpack-hot-middleware"),
webpackDevConfig = require("../webpack.config");
const compiler = webpack(webpackDevConfig);
const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    lazy: false
}),
hotMiddleware = webpackHotMiddleWare(compiler);
app.use(devMiddleware);
app.use(hotMiddleware);

/* 开启GZIP */
app.use(compress());

/* 开启history模式 */
app.use((req, res) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (error, result) => {
        if (error) {
            throw error;
        } else {
            res.set('Content-Type', 'text/html; charset=utf-8');
            res.end(result);
        }
    });
});



app.listen(8081);
console.log(`Server is now running in localhost:${8081}`);
