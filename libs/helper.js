/*
 * 全局帮助助手
*/
const path = require('path');
const ini  = require('../config').ini;
/*
 * return js文件路径
*/
function logJs(name){
	if(name === ini['coreJsName']){
		return 'js/' + name + '.js';
	}
	return 'js/work/' + name + '.js';
}
/*
 * return css文件路径
*/
function logCss(name){
	return 'css/' + name + '.css';
}
/*
 * return genarator
*/
module.exports = ()=>{
	return function*(next){
		//给ejs绑定 log模板渲染函数
		this._data = {
			logJs: function(name){
				return logJs(name);
			},
			logCss: function(name){
				return logCss(name);
			}
		};
		yield next;
	}
};