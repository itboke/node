/*
 * 模板解析中间件
*/
const _ = require('lodash');
const path = require('path');
const fs   = require('fs');
const ejs  = require('ejs');
const log4js = require('log4js');
const logger = log4js.getLogger('router');
module.exports = function (opts){
    return function* (next){
        //渲染静态的模板
        this.renderTpl = function(name,data){
            logger.info('你现在访问的模板文件名为：' + name);
            //合并助手中间件的对象
            _.extend(this._data,data);
            const ext = opts.ext || 'html';
            const rootDir = path.resolve(process.cwd(),opts.staticDir);
            const tplPath = rootDir + '\\' + name + '.' + ext;
            this.body = ejs.render(fs.readFileSync(tplPath).toString(),this._data);
        };
        yield next;
    };
};