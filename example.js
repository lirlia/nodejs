var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text_plain'});
	response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://localhost:8124');
