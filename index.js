var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        response.write('<h1>Hej! Miło Cię widzieć!</h1>');
            response.end();
    } else {
        response.setHeader("Content-Type", "image/png");
        fs.readFile('./404.png', function(err, data) {
            response.write(data);
            response.end()
        })
    }
});

server.listen(9000);
