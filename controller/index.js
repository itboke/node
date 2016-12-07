var Tools  = require('../libs/tools');
module.exports = function*(){
	var res = yield Tools.ajaxDataFromApi({
        method: 'get',
        url: 'http://localhost:8081/api/getf2e',
        data: {}
    });
    res = JSON.parse(res);
    this.renderTpl('index',{
        list: res.list
    });
}