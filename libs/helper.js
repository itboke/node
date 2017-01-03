/*
 * 全局帮助助手
*/
const path = require('path');
const ini  = require('../config').ini;
const staticField = ini.staticField;
const fs = require('fs');
const env = ini.env;
let mapData = null;
/*
 * return js文件路径
*/
function logJs(name){
	mapData = mapData || getMapJson();
	if(env === 'local'){
		if(name === ini['coreJsName']){
			return staticField + 'debug/js/' + name + '.js';
		}
		return staticField + 'debug/js/work/' + name + '.js';
	}
	if(name === 'core'){
		return staticField + 'build/' + mapData['vendor']['js'];
	}
	return staticField + 'build/' + mapData[name]['js'];
}
/*
 * return css文件路径
*/
function logCss(name){
	mapData = mapData || getMapJson();
	if(env === 'local'){
		return staticField + 'debug/css/' + name + '.css';
	}
	if(name === 'common'){
		return staticField + 'debug/css/' + name + '.css';
	}
	return staticField + 'build/' + mapData[name]['css'];
}
/*
 * 读Map.JSON  线上发版
*/
function getMapJson(){
	const mapPath =  path.join(__dirname,'../public/assets.json');
	const mapData = JSON.parse(fs.readFileSync(mapPath,'utf-8'));
	return mapData;
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