var conn = require("../../db").conn;
var mongoose = require("mongoose");
var Resume = new mongoose.Schema({
    name:String,
    phone:String,
    country:String,
    province:String,
    city:String,
    addr:String,
    workage:String,
    skills:Array,
    work_experice:String,
    files:Array
});

// 注册模版
var ResumeModel = mongoose.model("resume",Resume,"resumes");


module.exports = {
    ResumeModel :  ResumeModel
}
