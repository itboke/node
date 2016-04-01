/*数据库操作*/
var sys = require('util');
var mysql = require('mysql');
var dbConfig = require('../dbConfig');
//创建连接
var connection = mysql.createConnection({
  host:dbConfig.host,
  user:dbConfig.username,
  password:dbConfig.password,
  port:dbConfig.port,
  database:dbConfig.database
});

connection.connect()

function Blog(){

}
Blog.prototype.getPassage = function(cb){
  var sqlString = "select * from article";
  var _datas = [];
  connection.query(sqlString,function(err, results, fields) {
    if (err) {
      throw err;
    }
    if(results)
    {
      connection.end();
      for (var i in results) {
        var arr = {};
        arr.id = results[i].id;
        arr.title = results[i].title;
        arr.author = results[i].author;
        arr.timer = results[i].timer;
        arr.content = results[i].content;
        arr.category = results[i].category;
        _datas.push(arr);
      }
      cb(_datas);
    }
  });
};
Blog.prototype.details = function(strSql,cb){
  var strSql = strSql;
  connection.query(strSql,function(err, results, fields){
    if (err) {
      throw err;
    }
    if(results){
      connection.end();
      var details = {};
      details.id = results[0].id;
      details.title = results[0].title;
      details.author = results[0].author;
      details.timer = results[0].timer;
      details.content = results[0].content;
      details.category = results[0].category;
      cb(details);
    }
  })
};
Blog.prototype.login = function(strSql,cb){
  var strSql  = strSql;
  connection.query(strSql,function(err,results,fields){
    if(err){
      throw err;
    }
    if(results){
      cb();
    }
  })
};
Blog.prototype.post = function(strSql,res){
  var strSql = '' || strSql;
  connection.query(strSql,function(err,results,fileds){
    if(err){
      throw err;
    }
    if(results){
      res.redirect('/post?status=true');
    }
  })
}

module.exports = Blog;