/*
 * 模板解析中间件
*/
var path = require('path');
var fs   = require('fs');
var ejs  = require('ejs');
var log4js = require('log4js');
var logger = log4js.getLogger('router');
module.exports = function(opts){

	return function*(next){
		//渲染静态的模板
		this.renderTpl = function(name){
			logger.info('你现在访问的模板文件名为：' + name);
			var ext = opts.ext || 'html';
			var rootDir = path.resolve(process.cwd(),opts.staticDir)
			var tplPath = rootDir + '\\' + name + '.' + ext;
			return ejs.render(fs.readFileSync(tplPath).toString(),{title:'hello',content:'world888'});
		};
		yield next;
	};

};