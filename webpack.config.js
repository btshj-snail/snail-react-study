/**
 * Created by snail on 2016/8/15.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
//Template的文件夹路径
var TEM_PATH = path.resolve(ROOT_PATH, 'app/templates');

module.exports= {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx'),
        mobile: path.resolve(APP_PATH, 'mobile.js'),
        vendors:['jquery','moment']
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].[hash].js'
    },
    //enable dev source map
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    jshint: {
        "esnext": true
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    //添加两个presents 使用这两种presets处理js或者jsx文件
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.css$/,
                loaders:['style','css'],
                include:APP_PATH
            },
            {test: /\.less$/, loader: 'style!css!less'},

        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        })
    ],

}