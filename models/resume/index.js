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
    work_desc:String
})