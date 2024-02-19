var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function (request,response){
    var pathname =url.parse(request.url).pathname;
    console.log("request for"+pathname+"received");
    fs.readFile(pathname.substr(1),function(err,data){
        if (err){
            console.log(err);
            response.writeHead(404,{'context-type':'text/html'});
        }else{
            response.writeHead(200,{'context-type':'text/html'});
            response.write(data.toString());
        }
    response.end();
    })
}).listen(3000);
console.log('server is running at http://127.0.0.1:3000/');