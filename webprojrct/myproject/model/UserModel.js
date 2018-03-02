var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 创建文档的定义
var User = new Schema({
    username  : String,
    psw       : String,
    create_date : { type: Date, default: Date.now }
});
//创建一个model对象与数据库中的标映射
var UserModel = mongoose.model('admin', User);
module.exports = UserModel;
