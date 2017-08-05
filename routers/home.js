var router = require("express").Router();

router.get("/",function(req,res,next){
    res.render("index");
})

router.post("/",function(req,res){
    console.log(req);
    // res.send("hello")
})

module.exports = router;