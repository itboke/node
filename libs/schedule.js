/*
 * 定时任务
*/
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.second = 35;
module.exports = function(){
	schedule.scheduleJob(rule,function(){
		console.log('这里书写定时任务的代码');
	})
};