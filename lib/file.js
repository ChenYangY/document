var fs = require("fs");
var encrypto_name = require("./hash.js").encrypto_name;
var path = require("path");
var config = require("../config")

// 获取请求中文件信息
function getFiles(files){
    var arr_file = [], count = 0;
    var o = null, temp = null;
    for(var o in files){
        temp = {};
        temp.name = files[o].name;
        temp.size = files[o].size;
        temp.path = files[o].path;
        arr_file.push(temp);
    }
    return arr_file;
}
/**
 * 清除空文件
 * @param {Array} files  {name,path(obsolute path),size} array
 */
function removeZeroFile(files){
    var i = 0, j = 0;
    for(i=0,j=files.length;i<j;i++){
        if(files.size <= 0){
            fs.unlink(fiels[i].path,function(err){
                if(err){
                    console.log("remove uplaod zero file failed");
                }
            })
        }
    }
}
/**
 * 将文件按日期存储
 * @param {Object} file {name,path(obsolute path),size} 
 */
function storage(file){
    var ext = path.extname(file.path);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day  = date.getDate();
    var name = file.name.replace(ext,"");
    var en_name = encrypto_name(name)+ext;
    var date_dir = ""+year+"/"+month+"/"+day;
    var dirname = path.dirname(file.path);
    var storage_dir = path.join(dirname,date_dir);
    createDir(storage_dir);
    var target_path = path.join(storage_dir,en_name);
    fs.renameSync(file.path,target_path);
    var relative_path = path.join(config.upload.path,date_dir,en_name);
    file.path = relative_path;
    return relative_path;
}

/**
 * 
 * @param {String} pathname  absolute path 
 */ 
function createDir(pathname){
    var arr_part = pathname.split(path.sep);
    var i = 0, j = 0;
    var start  = "/";
    for(i=1,j=arr_part.length;i<j;i++){
        start = path.join(start,arr_part[i]);
        if(!fs.existsSync(start)){
            fs.mkdirSync(start);
        }
    }
}


module.exports = {
    storage    : storage,
    getReqFile : getFiles,
    removeZeroFile  :   removeZeroFile,
}