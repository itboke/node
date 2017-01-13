/*
 生产环境的构建配件
*/
const path = require('path');
const _path =  path.join(__dirname, 'src');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin'); //打包资源文件map.json 
const assetsPluginInstance = new AssetsPlugin(
    {
        filename: 'assets.json',
        path:　path.join(__dirname, 'public'),
        prettyPrint: true
    }
);
const ExtractTextPlugin = require("extract-text-webpack-plugin");//分离css单独打包
module.exports = (entry) => {
    return {
        entry: entry,
        output: {
            filename: 'js/work/[name].[chunkhash:6].js',
            path: path.join(__dirname, '/public/build'),
            publicPath: ''
        },
        module: {
            loaders: [
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!less-loader')
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
                    loader: 'url-loader?limit=8192&name=/img/[name].[hash:6].[ext]'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [
            assetsPluginInstance,
            new ExtractTextPlugin('css/[name].[chunkhash:6].css', {
                allChunks: true
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                React: 'react',
                ReactDom: 'react-dom'
            }),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'js/core.[chunkhash:6].js'),
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false,//删除js文件中的注释
                },
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                }
            })
        ]
    };
};
