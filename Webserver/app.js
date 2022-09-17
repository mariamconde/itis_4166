//require the http module
const http = require('http');
const port = 8084;
const host = 'localhost';

//create server using required module
const server = http.createServer((req, res) => {
    console.log('method', req.method);
    // url / - landing page
    console.log('url', req.url);
    
    console.log('header', req.headers);
});
// above is more concis
//listens on particular port
server.listen(port, host, () => {
    console.log('The server is running on port', port);
});