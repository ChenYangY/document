module.exports = function(app){
    app.use("/",require("./home.js"));
    app.use("/login",require("./login.js"));
    app.use("/admin",require("./admin.js"));
    app.use(function(req,res){
        if(!res.headersSent){
            res.render("404");
        }
    })
}