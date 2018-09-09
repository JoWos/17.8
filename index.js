var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.setHeader("Content-Type", "image/png");
        fs.readFile('./404.png', function(err, data) {
            response.statusCode = 404;
            response.write(data);
            response.end();
        });
    }
});

server.listen(9000);
