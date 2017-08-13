var db = require("../../db").conn;
var Resume = new db.Schema({
    ip:String,
    name:String,
    phone:String,
    country:String,
    province:String,
    city:String,
    street:String,
    workage:String,
    skills:Array,
    user_number:Number,
    work_experice:String,
    files:Array,
    create_at:Number
});

// 查询
Resume.index({ip:1,_id:-1});
// 注册模版
var ResumeModel = db.model("resume",Resume,"resume");


module.exports = {
    Resume      :  Resume,
    ResumeModel :  ResumeModel
}
