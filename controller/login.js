var Blog = require('../models/mySql');
var blog = new Blog();
module.exports = function(cb,info){

    var strSql = "select * from user where username = '" + info.name+　"' and password = '" + info.password + "'";


    blog.login(strSql,cb);

};