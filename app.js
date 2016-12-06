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
		},
		// {
		// 	type: 'file',
		// 	filename: 'logs/access.log',
		// 	maxLogSize: 2048,
		// 	backups:4,
		// 	category:normal
		// }
	],
	replaceConsole:true
});
log4js.setGlobalLogLevel(log4js.levels.INFO);
//日志
app.use(static({
	staticDir:'views',
	ext:'html'
}))
app.use(router.routes());
route(router);

//定时任务
//schedule();
app.listen(8081);

