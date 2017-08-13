var router = require("express").Router();
var config = require("../config");
var mhash = require("../lib/hash.js");
var checkNotLogin = require("../middleware/check.js").checkNotLogin;

router.get("/",function(req,res,next){
    res.render("login");
    next();
})

router.post("/",function(req,res,next){
    var fields = req.fields;
    console.log(fields);
    var username = fields.username || "";
    var password = fields.password || "";
    var admin_name = config.admin.name;
    var admin_pwd = config.admin.pwd;
    var pwd_md5 = mhash.md5(admin_pwd);
    if(username === admin_name && pwd_md5 === password){
        req.session.user = {name:username};
        res.redirect("/admin");
    }else{
        res.render("login",{err:"登陆失败"});
    }
    next();

})
module.exports = router;