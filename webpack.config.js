/*
 * 构建任务
 *
*/
const path = require('path');
var _path =  path.join(__dirname,'src');
module.exports = {
    entry: './src/js/work/index.js',
    output:{
        filename:'index.js',
        path:__dirname + '/public/js/work'
    },
    module:{
    	loaders:[
    		{
    			test: /\.(js|jsx)$/,
    			loader: "babel?presets=es2015!eslint",
    			include: _path
    		}
    	]
    },
    eslint:{
        configFile:path.join(__dirname,'.eslintrc.yml')
    },
    resolve:{
    	extensions:["",'.js']
    }
};