var koa = require('koa');
var app = koa();
var router = require('koa-router')();
var route = require('./routes/index');
var static = require('./libs/setStatic');

app.use(static({
	staticDir:'views',
	ext:'html'
}))
app.use(router.routes());
route(router);

app.listen(8081);

