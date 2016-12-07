/*
 * @ 路由控制
 *
*/
var Database = require('../libs/mysql');
var Spider = require('../libs/spider');
var C = require('../controller/exports');
module.exports = function(router) {

    router.get('/',function*(next){
        yield C(this,'index');
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
    //获取拉钩网-最新招聘信息接口  加参数
    router.get('/api/getf2e/:id',function*(next){
        var User = new Database();
        var paramid = this.params.id;//获取url请求的动态参数
        var url  = 'https://www.lagou.com/zhaopin/qianduankaifa/?labelWords=label';
        var html = yield Spider.getWebSource(url);
        var list = yield Spider.loadHtml(html);
        var username = yield User.select('select * from user');
        /*把招聘信息插入数据库*/
        /*  var info = '';
            for(var i=0;i<list.length;i++){
                info+='("'+list[i]['data-index']+'","'+list[i]['data-salary']+'","'+list[i]['data-company']+'","'+list[i]['data-positionname']+'"),';
            }
            info = info.replace(/,$/,'');
            var result = yield User.insertInfo('insert into info (id,salary,company,positionname) values '+ info +'');
        */
        /*把招聘信息插入数据库*/
        var json = {
            code: '00000',
            msg:'获取成功',
            admin: username || '',
            list: list
        };
        this.body = JSON.stringify(json);
    })

    //统一404处理
    router.get('*',function*(next){
        this.body = '404';
    })

};
