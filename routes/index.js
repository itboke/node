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
        app.get(item
, function(req, res, next) {
            if (item == '/') {
                var list = blog.getPassage(function(data){
                   res.render('index',{ title: '一念清净', content: '一念清净的博客',list:data});
                });
            } else {
                item = item.replace('/','');
                if(controller[item] && item!=='login' && item !== 'post'){
                   controller[item](function(data){
                    if(data){
                        res.render(item,{ title: '一念清净', content: '一念清净的博客',info:data});
                    }
                   },req);
                }else{
                    if(item === 'post'){
                       if(!req.session.user){
                            res.redirect('/login');
                            return false;
                       }
                    }
                    res.render(item,{ title: '一念清净', content: '一念清净的博客'});
                }
            }
        })
    });

    //登录POST请求
    app.post('/login',function(req, res, next){

        var userInfo = {
            name:req.body.username,
            password:req.body.password
        };

        //通过检测
        if(userInfo.name &&　userInfo.password){
            if(controller['login']){
                controller['login'](function(){
                    req.session.user = userInfo.name;
                    res.redirect('/post');
                },userInfo);
            }
        }else{
            res.redirect('/login');//重定向
        }

    });
    //文章发表
    app.post('/post',function(req,res,next){
        var title    = req.body.title;
        var content  = req.body.content;
        var category = req.body.category;
        if(title !== '' && content !== ''){
            var sysdate = new Date();
            var timer = sysdate.toLocaleDateString();
            var category = '修心养性';
            var datas = {
                title:title,
                author:req.session.user,
                timer:timer,
                content:content,
                category:category
            };
            if(controller['post']){
                controller['post'](datas,res);
            }
        }else{
            res.redirect('/post?status=false');
        }
    });
    //404跳转
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        res.render('error', { title: 'error' });
    });

};
