/*
 * @author hzl
 * @description 爬蜘蛛
*/
var https = require('https');
var cheerio = require('cheerio');
var $;
function getWebSource(url){
	return new Promise(function(resolve,reject){
		var data  = '';
		https.get(url,function(res){
			res.on('data',function(chunk){
				data += chunk;
			});
			res.on('end',function(){
				resolve(data);
			});
		}).on('error',function(){
			reject(null);
		});
	});
}
function* loadHtml(html){
	$ = cheerio.load(html);
	var oLi  = $('.s_position_list').find('.item_con_list li');
	var list = [];
	for(var i=0;i<oLi.length;i++){
		list.push(oLi[i]['attribs']);
	}
	return list;
}
module.exports = {
	getWebSource:getWebSource,
	loadHtml:loadHtml
};