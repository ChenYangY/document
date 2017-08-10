var should = require("should");
var mhash = require("../lib/hash.js");

describe("md5 test",function(){
    it("123456 md5 value is e10adc3949ba59abbe56e057f20f883e",function(){
        mhash.md5("123456").should.equal("e10adc3949ba59abbe56e057f20f883e");
    })
    it("name not equal",function(){
        var name = "resume";
        var name_a = mhash.encrypto_name(name);
        setTimeout(function(){
            var name_b = mhash.encrypto_name(name);
            name_a.should.notEqual(name_b);
        })
    })    
})