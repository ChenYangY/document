var should = require("should");
var mhash = require("../lib/hash.js");

describe("===md5 test===",function(){
    it("123456 md5 value is e10adc3949ba59abbe56e057f20f883e",function(){
        mhash.md5("123456").should.equal("e10adc3949ba59abbe56e057f20f883e");
    })
    it("name not equal while set timeout",function(){
        var name = "resume";
        var name_a = mhash.encrypto_name(name);
        setTimeout(function(){
            var name_b = mhash.encrypto_name(name);
            name_a.should.notEqual(name_b);
        });
    });

    it("name maybe not equal while do right now", function(){
        var name = "resume";
        var name_a = mhash.encrypto_name("abc");
        var name_b = mhash.encrypto_name("abc");
        console.log(name_a);
        console.log(name_b);
        name_a.should.equal(name_b);
        
    })
})