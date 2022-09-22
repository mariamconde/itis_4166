//require the http module
const http = require('http');
const fs = require('fs');
const port = 8084;
const host = 'localhost';

//create server using required module
const server = http.createServer((req, res) => {
    // console.log('method', req.method);
    // // url / - landing page
    // console.log('url', req.url);
    // console.log('header', req.headers);

    //response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // generate path to file based on url in request
    let path = './';

    if (req.url == '/') {
        path = path + 'index.html';
    } else if (req.url == '/contact') {
        path = path + 'contact.html';
    } else if (req.url == '/about') {
        path = path + 'about.html';
    } else 
        res.statusCode = 404;
        path = path + '404.html';
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});
// above is more concis
//listens on particular port
server.listen(port, host, () => {
    console.log('The server is running on port', port);
});