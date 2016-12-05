var koa = require('koa');
var app = koa();
var route = require('./routes/index');
var router = require('koa-router')();



app.use(router.routes());
route(router);

app.listen(8081);

