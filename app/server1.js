var http = require("http");


onRequest(req,res) {
        console.log("request received.");
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
}

http.createServer(onRequest(req,res)).listen(8888);
console.log("Server has started.");
