var crypto = require("crypto");
var process = require("process");
const NS_PER_SEC = 1e9;

function md5(name){
    var hash = crypto.createHash("md5");
    hash.update(name);
    var md5_name = hash.digest("hex");
    return md5_name;
}

function encrypto_name(name){
    var cipher = crypto.createCipher('aes192',name);
    var time = process.hrtime();
    var ns = time[0] * NS_PER_SEC + time[1];
    cipher.update(time.toString());
    var hash_name = cipher.final("hex");
    return hash_name;
}
module.exports = {
    md5 : md5,
    encrypto_name : encrypto_name
}