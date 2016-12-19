const koa = require('koa');
const app = new koa();
const router = require('koa-router')();
const route = require('./routes/index');
const statics = require('./libs/setStatic');
const schedule = require('./libs/schedule');
const staticServer = require('koa-static');
//日志
const log4js = require('log4js');
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
app.use(staticServer(__dirname + '/public'));
app.use(statics({
	staticDir: 'views',
	ext: 'html'
}));
app.use(router.routes());
route(router);

//定时任务
//schedule();
app.listen(8081);

