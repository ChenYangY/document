var router = require("express").Router();

router.get("/",function(req,res,next){
    res.send("login");
})

module.exports = router;