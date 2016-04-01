var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//路由控制
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json()); //加载解析json中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());//加载解析cookie中间件
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'yinianqingjing',
  cookie:{maxAge:600000},
  resave:false,
  saveUninitialized: true
}));

routes(app);


// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
