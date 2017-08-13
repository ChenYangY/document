var router = require("express").Router();
var mfile = require("../lib/file.js");
var ResumeModel = require("../models/resume").ResumeModel;

var skills = ["early_education","prolactin","body_recovery","pediatric_massage","postpartum_sweating","baby_exception","ovary_care","uterus_old","psychological_counseling","baby_care","month_meal"];

function get_skills(fields){
    var o = null, b = null, res = [];
    for(var o in fields){
        for(b in skills){
            if(skills[b] === o.toString()){
                res.push(fields[o]);
                delete fields[o];
            }
        }
    }
    return res;
}

function check_post_data(fields,files){
    var error = [];
    if(!fields.username) {
        error.push("username");
    }
    if(!fields.phone){

    }else{

    }
}
function generate_obj(fields){
    var obj = {};
    obj.username =  fields.username;
    obj.phone = fields.phone;
    obj.province = fields.province;
    obj.city = fields.city;
    obj.district = fields.district;
    obj.street = fields.street_info;
    obj.workage = fields.work_age;
    obj.user_number = fields.user_number;
    obj.work_experience = fields.experience;
    return obj;
}

router.get("/",function(req,res,next){
    res.render("index");
})

router.post("/",function(req,res){
    var fields =  req.fields;
    var files  = mfile.getReqFile(req.files);
    var i = 0, j = 0;
    var arr_name = [], t_name = null;
    mfile.removeZeroFile(files);
    for(i=0,j=files.length;i<j;i++){
        mfile.storage(files[i]);
    }

    var skills = get_skills(fields);
    var obj = generate_obj(fields);
    obj.ip = req.connection.remoteAddress;
    obj.files = files;
    obj.skills = skills;
    obj.create_at = new Date().getTime();
    
    var mresume = new ResumeModel(obj);
    mresume.save().then(function(err){
        console.log(err);
    }).catch(function(err){
        res.render("error",new Error(err));
    });
    // res.end("saved");
})




module.exports = router;