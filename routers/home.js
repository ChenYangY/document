var router = require("express").Router();
var mfile = require("../lib/file.js");


router.get("/",function(req,res,next){
    res.render("index");
})

router.post("/",function(req,res){
    var fields =  req.fields;
    var files  = mfile.getReqFile(req.files);
    var i = 0, j = 0;
    console.log(files);
    var arr_name = [], t_name = null;
    mfile.removeZeroFile(files);
    for(i=0,j=files.length;i<j;i++){
        t_name = mfile.storage(files[i]);
        arr_name.push(t_name);
    }
    console.log(arr_name);
    res.end("saved");
})




module.exports = router;