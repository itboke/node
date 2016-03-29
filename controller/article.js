var Blog = require('../models/mySql');
var blog = new Blog();
module.exports = function(cb,req){

    var id = req.query.id;
    var sqlString = "select * from article where id = " + id;
    var data = "";
    if(id){
       blog.details(sqlString,cb);
    }
}