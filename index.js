const http = require('http');
const { createReadStream } = require('fs');

http.createServer((req, res) => {

    //res.writeHead(200, { 'Content-Type': 'text/html'});
    
    // res.write(`
    // <!DOCTYPE html>
    // <html>
    //     <head>
    //         <meta charset="UTF-8">
    //         <title>Hello World!</title>
    //     </head>
    //     <body>
    //         <h1>Hello there!</h1>
    //         <h2>Learning about servers</h2>
    //     </body>
    // </html>
    // `);

    // res.end();
    

    // res.end(`
    //     <!DOCTYPE html>
    //     <html>
    //         <head>
    //             <meta charset="UTF-8">
    //             <title>Hello World!</title>
    //         </head>
    //         <body>
    //             <h1>Hello there!</h1>
    //             <h2>Practicing Node's http module</h2>
    //         </body>
    //     </html>
    //     `, 
    //     "utf8",
    //     cb => {
    //         console.log("Finished sending back response")
    // });

    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            createReadStream("./index.html").pipe(res);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 - Page Not Found', cb => console.log(`Page not found: ${req.url}`));
    }

    console.log(req.url);

    // res.end(cb => {
    //     console.log("Finished sending back response!!")
    // })
    
    //console.dir(req);
    //console.dir(res);


}).listen(8080);

console.log('server running on port 8080');