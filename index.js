const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html'});
    
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
    

    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Hello World!</title>
            </head>
            <body>
                <h1>Hello there!</h1>
                <h2>Practicing Node's http module</h2>
            </body>
        </html>
        `, 
        "utf8",
        cb => {
            console.log("Finished sending back response")
    });

    res.end(cb => {
        console.log("Finished sending back response!!")
    })
    
    //console.dir(req);
    //console.dir(res);


}).listen(8080);

console.log('server running on port 8080');