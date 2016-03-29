var express = require('express');
var router = express.Router();
var pageS = require('../config').page;
var Blog = require('../models/mySql');
var blog = new Blog();
var controller = require('../controller/exports');
module.exports = function(app) {
    /*
     * pageS is a Array to allow the POST/GET　routerViews
     */
    pageS.map(function(item) {
        app.get(item, function(req, res, next) {
            if (item == '/') {
                var list = blog.getPassage(function(data){
                   res.render('index',{ title: '一念清净', content: '一念清净的博客',list:data});
                });
            } else {
                item = item.replace('/','');
                if(controller[item]){
                   controller[item](function(data){
                    if(data){
                        res.render(item,{ title: '一念清净', content: '一念清净的博客',info:data});
                    }
                   },req);
                }else{
                    var username = req.query.username;
                    var password = req.query.password;
                    res.render(item,{ title: '一念清净', content: '一念清净的博客'});
                }
            }
        })
    });

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        res.render('error', { title: 'error' });
    });

};
