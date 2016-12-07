/*
 * 路由控制器 总开关
*/

var index = require('./index');
var files = {
	index: index
};
module.exports = function* (cxt,filename){
	var _this = cxt || this;
	if(filename in files){
		try{
			yield files[filename].call(_this);
		}catch(e){
			console.log(e);
		}
	}else{
		console.log('路由文件***' + filename + '***不存在');
		_this.body = '404';
	}
}