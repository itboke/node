
var Blog = require('../models/mySql');
var controller = require('../controller/exports');
var Spider = require('../libs/spider');
module.exports = function(router) {

    router.get('/',function*(next){
        this.body = this.renderTpl('index');
    })

    //获取拉钩网-最新招聘信息接口
    router.get('/api/getf2e',function*(next){
        var url  = 'https://www.lagou.com/zhaopin/qianduankaifa/?labelWords=label';
        var html = yield Spider.getWebSource(url);
        var list = yield Spider.loadHtml(html);
        var json = {
            code: '00000',
            msg:'获取成功',
            list: list
        };
        this.body = JSON.stringify(json);
    })
};
