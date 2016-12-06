/**
 * 日志
*/
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