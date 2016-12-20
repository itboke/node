const Koa = require('koa');
const router = require('koa-router')();
const route = require('./routes/index');
const statics = require('./libs/setStatic');
//const schedule = require('./libs/schedule');
const staticServer = require('koa-static');
const helper = require('./libs/helper');
//日志
const log4js = require('log4js');
const path = require('path');
const app = new Koa();
log4js.configure({
    appenders: [
        {
            type: 'console'
        }
    ],
    replaceConsole: true
});
log4js.setGlobalLogLevel(log4js.levels.INFO);
//日志END
app.use(helper());
app.use(staticServer(path.join(__dirname, '/public')));
app.use(statics({
    staticDir: 'views',
    ext: 'html'
}));
app.use(router.routes());
route(router);


//定时任务
//schedule();
app.listen(8081);

