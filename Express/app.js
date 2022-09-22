const express = require('express');

const app = express();
let port = 3000;
let host = 'localhost';


app.get('/', (req, res) => {
    //res.statusCode = 200;
    //res.end('Home page');
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About page')
});

app.get('/contact', (req, res) => {
    res.send('Contact page')
});

app.listen(port, host, () => {
    console.log('The server is running at port', port);
});