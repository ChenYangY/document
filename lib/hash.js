var crypto = require("crypto");

function md5(name){
    var hash = crypto.createHash("md5");
    hash.update(name);
    var md5_name = hash.digest("hex");
    return md5_name;
}

function encrypto_name(name){
    var cipher = crypto.createCipher('aes192', 'resume');
    cipher.update(name);
    cipher.update(new Date().getTime().toString());
    var hash_name = cipher.final("hex");
    return hash_name;
}
module.exports = {
    md5 : md5,
    encrypto_name : encrypto_name
}