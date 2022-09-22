const express = require('express');

const app = express();
let port = 3000;
let host = 'localhost';

let students = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];

app.get('/', (req, res) => {
    //res.statusCode = 200;
    //res.end('Home page');
    //res.send('Home Page');

    // retrieve request query string from the request:
    // /?name=Alice&email=alice@abc.com query string starts with ?
    console.log(req.url);
    console.log(req.query);

    //console.log(__dirname);
    // send file back to client using sendFile method:
    res.sendFile('/views/index.html', { root: __dirname });

});

// root parameters from request message
//send students with a particular id back to the client
// res.send('Send student with id');
app.get('/students/:sid', (req, res) => {
    // route parameter
    console.log(req.params);

    let id = req.params.sid;

    let student = students.find(element => element.id === parseInt(id));

    console.log(student);

    res.json(student);

});

app.get('/about', (req, res) => {
    res.send('About page')
});

app.get('/contact', (req, res) => {
    res.send('Contact page')
});

/*app.get('/contact-us', (req, res) => {
    res.redirect('/contact')
});*/

app.get('/contact-me', (req, res) => {
    res.redirect(301, '/contact')
})
app.listen(port, host, () => {
    console.log('The server is running at port', port);
});