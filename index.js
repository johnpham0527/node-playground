const http = require('http');
const { createReadStream } = require('fs');
const { create } = require('domain');

const serveFile = (status, contentType, fileName, res) => {
    res.writeHead(status, {'Content-Type': contentType});
    createReadStream(fileName).pipe(res);
}

http.createServer((req, res) => {

    console.log(req.url);
    switch (req.url) {
        case '/':
            return serveFile('200', 'text/html', './index.html', res);
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 - Page Not Found', cb => console.log(`Page not found: ${req.url}`));
    }
    

}).listen(8080);

console.log('server running on port 8080');