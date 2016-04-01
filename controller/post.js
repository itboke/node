var Blog = require('../models/mySql');
var blog = new Blog();
//文章发表
module.exports = function(datas,res){

    var strSql = "insert into article (title,author,timer,content,category) values ('"+datas.title+"','"+datas.author+"','"+datas.timer+"','"+datas.content+"','"+datas.category+"')";

    blog.post(strSql,res);

};