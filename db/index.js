var mongoose = require('mongoose');
var config = require('../config');

var uri = "mongodb://"+config.db.user+":"+config.db.pass+"@localhost:"+config.db.port+"/"+config.db.name;

var conn = mongoose.connect(uri);

mongoose.Promise = global.Promise;


module.exports = {
    conn    :  conn,
    uri     :  uri
}