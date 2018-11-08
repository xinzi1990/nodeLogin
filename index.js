var http = require('http');
var url = require('url');
var fs = require('fs')
var globalConfig = require('./config');
var loader = require('./loader');
var filterLoader = require('./filterLoader');
var log = require('./log')


http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;
    var params = url.parse(request.url,true).query;

    log(pathName);

    for (var i = 0; i < filterLoader.length; i++){
        var flag = filterLoader[i](request, response);
        if(!flag){
            return;
        }
    }

    var isStatic = isStaticRequest(pathName);
    console.log('isStatic：' + isStatic);
    if(isStatic){//请求的静态文件
        try{
            var data = fs.readFileSync(globalConfig['page_path'] + pathName);
            response.writeHead(200);
            response.write(data);
            response.end();
        }catch (e) {
            response.writeHead(404);
            response.write('<html><body><h1>404 NotFound</h1></body></html>');
            response.end();
        }
    }else{//请求的动态数据
        if(loader.get(pathName) != null){
            try{
                console.log(loader.get(pathName));
                loader.get(pathName)(request, response);
            }catch (e) {
                console.log(e);
                response.writeHead(500);
                response.write('<html><body><h1>500 Badserver</h1></body></html>');
                response.end();
            }
        }else{
            response.writeHead(404);
            response.write('<html><body><h1>404 NotFound</h1></body></html>');
            response.end();
        }
    }
}).listen(globalConfig['port']);
log('服务已启动')


function isStaticRequest(pathName){
    for (var i = 0; i < globalConfig.static_file_type.length; i++){
        var temp = globalConfig.static_file_type[i]
        if(pathName.indexOf(temp) == pathName.length - temp.length){
            return true;
        }
    }
    return false;
}