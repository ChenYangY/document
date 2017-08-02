var router = require("express").Router();

router.get("/",function(req,res,next){
    res.send("home");
})

module.exports = router;