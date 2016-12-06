/*
 * 数据库操作
 *
*/
var sys = require('util');
var mysql = require('mysql');
function Mysql(){
    this.config = {
        host:'127.0.0.1',
        username:'root',
        password:'123456',
        port:'3306',
        database:'node'
    };
    var dbConfig = this.config;
    var _this    = this;
    this.connection = mysql.createConnection({
        host:dbConfig.host,
        user:dbConfig.username,
        password:dbConfig.password,
        port:dbConfig.port,
        database:dbConfig.database
    });
    this.connection.connect(function(err){
        if(err){
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('******connected as id ' + _this.connection.threadId + '******');
    });
};
Mysql.prototype.createTable = function(){

};
Mysql.prototype.getPassage = function(cb){
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
Mysql.prototype.details = function(strSql,cb){
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
Mysql.prototype.insertInfo = function(strSql){
    var strSql = strSql;
    var _this  = this;
    return new Promise(function(resolve,reject){
        _this.connection.query(strSql,function(err,results,fileds){
            if(err){reject(err)};
            if(results){
                resolve(true);
            }
        })
    })
};
Mysql.prototype.select = function(strSql){
    var strSql = '' || strSql;
    var _this  = this;
    return new Promise(function(resolve,reject){
        _this.connection.query(strSql,function(err,results,fileds){
            if(err){
                reject(err);
            }
            if(results){
                resolve(results[0].name);
            }
        })
    })
}

module.exports = Mysql;