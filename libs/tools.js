/**
 * 全站工具函数
*/
var request = require('request');
function ajaxDataFromApi(opts){

	var method = opts.method || 'get';
	var data = opts.data || {};
	var url  = opts.url;
	var headers = opts.headers || {};
	return new Promise(function(resolve,reject){

		request({method:method,url:url,form:data,headers:headers},function(error, response, body){
			if(error){
				reject(error);
			}else{
				resolve(body);
			}
		})

	})
	
};
module.exports = {
	ajaxDataFromApi:ajaxDataFromApi
};