var path = require("path");
var express = require("express");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var expressWinston = require("express-winston");
var winston = require("winston");
var db = require("./db");
var config = require("./config");
var routers = require("./routers");
var app = express();


// 设置视图模版路径
app.set("views",path.join(__dirname,"views"));
// 设置模版引擎为 ejs
app.set("view engine","ejs");

// 设置服务器的静态文件目录
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "upload")));

app.use(session({
    name    : config.session.key,
    secret  : config.session.secret,
    resave  : true,
    saveUninitialized: false,
    cookie:{
        maxAge : config.session.maxAge
    },
    store: new MongoStore({
        url: db.uri
    })
}));

app.locals.resume = {
  title : "nodejs",
  description: "nodejs develop"
}

app.use(require("express-formidable")({
    uploadDir: path.join(__dirname, 'upload'),// 上传文件目录
    keepExtensions: true// 保留后缀
}));


// 正常请求的日志
app.use(expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: 'logs/success.log'
    })
  ]
}));

routers(app);
// error page
app.use(function (err, req, res, next) {
  res.render('error', {
    error: err
  });
});

if(module.parent){
  module.exports = app;
}else{
    app.listen(config.port,"0.0.0.0",function(){
        console.log("server listen at"+config.port);
    });
}

