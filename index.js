const http = require('http');
const { createReadStream } = require('fs');



http.createServer((req, res) => {

    console.log(req.url);
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            createReadStream("./index.html").pipe(res);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 - Page Not Found', cb => console.log(`Page not found: ${req.url}`));
    }
    

}).listen(8080);

console.log('server running on port 8080');