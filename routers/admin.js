var router = require("express").Router();
var checkLogin = require("../middleware/check.js").checkLogin;

router.get("/",checkLogin,function(req,res,next){
    res.send("admin");
})


module.exports = router;