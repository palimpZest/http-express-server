// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var tagline = "You'll find more info in the about section!";

    res.render('pages/index', {
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('3000 is the magic port');



// Code initial Quête HTTP
// let http = require('http');
// let port = 3000;

// let server = http.createServer((request, response) => {
//     response.end("Hello NodeJS !");
// })

// server.listen(port, (err) => {
//     if (err)
//         return console.log('something bad happened', err);
//     console.log(`server is listening on ${port}`);
// });
