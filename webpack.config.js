/*
 * 构建任务
*/
const path = require('path');
const _path =  path.join(__dirname, 'src');
const Config = require('./config');
const entry =  Config.entry();
const ExtractTextPlugin = require("extract-text-webpack-plugin");//分离css单独打包
module.exports = {
    entry: entry,
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/public/js/work')
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader')
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel?presets=es2015',
                include: _path
            }
        ]
    },
    // eslint: {
    //     configFile: path.join(__dirname,'.eslintrc.yml')
    // },
    resolve: {
        extensions:['','.js']
    },
    plugins: [
        new ExtractTextPlugin('public/[name].css',{
            allChunks: true
        })
    ]
};