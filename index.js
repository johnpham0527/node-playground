const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Hello World!</title>
        </head>
        <body>
            <h1>Hello there!</h1>
        </body>
    </html>
    `);

    res.end(); //does this send or "execute" the response?
    //console.dir(req);

    //console.dir(res);


}).listen(8080);

console.log('server running on port 8080');