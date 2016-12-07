var koa = require('koa');
var app = koa();
var router = require('koa-router')();
var route = require('./routes/index');
var static = require('./libs/setStatic');
var schedule = require('./libs/schedule');
//日志
var log4js = require('log4js');
log4js.configure({
	appenders:[
		{
			type: 'console'
		}
	],
	replaceConsole:true
});
log4js.setGlobalLogLevel(log4js.levels.INFO);
//日志END
app.use(static({
	staticDir:'views',
	ext:'html'
}))
app.use(router.routes());
route(router);

//定时任务
//schedule();
app.listen(8081);

