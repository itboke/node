/*
 * 构建任务
*/
const path = require('path');
const _path =  path.join(__dirname, 'src');
const Config = require('./config');
const entry =  Config.entry();
const production = require('./webpack.production.config');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//分离css单独打包
entry['vendor'] = ['jquery','react','react-dom'];//公共模块文件 全局核心

//区分本地开发构建和生产环境构建
if(process.argv && process.argv[process.argv.length - 1] === 'production'){
    module.exports = production(entry);
}else{
    module.exports = {
        entry: entry,
        output: {
            filename: 'js/work/[name].js',
            path: path.join(__dirname, '/public/debug'),
            publicPath: '//localhost:8081/debug' //图片的路径构建
        },
        module: {
            loaders: [
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel',
                    include: _path,
                    query: {
                        presets: ['react', 'es2015']
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader?limit=8192&name=/img/[name].[ext]'
                },
                {
                    test: /\.(html)$/,
                    loader: 'copyhtml?minify=false&emitPath=views'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [
            new ExtractTextPlugin('css/[name].css', {
                allChunks: true
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                React: 'react',
                ReactDom: 'react-dom'
            }),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'js/core.js')
        ]
    };
};

