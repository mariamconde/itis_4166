
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const morgan = require('morgan');
const ejs = require('ejs');


const app = express();
let port = 3000;
let host = "localhost";

app.set('view engine', 'ejs');


let students = [
    { id: "1", name: "Alice", major: "Computer Science", gpa: 3.2 },
    { id: "2", name: "Bob", major: "Biology", gpa: 3.0 },
    { id: "3", name: "Charlie", major: "Physics", gpa: 3.8 }
];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.url);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('This is the second middleware function');
//     next();
//     //res.send('Second middleware');
// });

app.get("/", (req, res) => {
    //res.statusCode = 200;
    //res.end('Home page');
    //res.send('Home Page');

    // retrieve request query string from the request:
    // /?name=Alice&email=alice@abc.com query string starts with ?
    // console.log(req.url);
    // console.log(req.query);

    //console.log(__dirname);
    // send file back to client using sendFile method:
    res.sendFile("/views/index.html", { root: __dirname });
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    //console.log(req.body);
    let student = req.body;
    student.id = uuidv4();
    students.push(student);
    res.redirect('/students');
});

app.get('/students/create', (req, res) => {
    res.sendFile("/views/new.html", { root: __dirname });
});


// root parameters from request message
//send students with a particular id back to the client
// res.send('Send student with id');
app.get("/students/:sid", (req, res) => {
    // route parameter
    // console.log(req.params);
    let id = req.params.sid;
    let student = students.find((element) => element.id === id);
    // let student = students.find((element) => element.id === parseInt(id));
    // console.log(student);
    //res.json(student);
    // can be data 
    res.render('student', {student: student});
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/contact", (req, res) => {
    res.send("Contact page");
});

/*app.get('/contact-us', (req, res) => {
    res.redirect('/contact')
});*/

app.get("/contact-me", (req, res) => {
    res.redirect(301, "/contact");
});

app.use((req, res, next) => {
    res.status(404).send('Page cannot be found');
});

app.listen(port, host, () => {
    console.log("The server is running at port", port);
});
