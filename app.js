const express = require('express');


const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/alien', function (req, res){
    const id = req.query.id;
    res.send('Welcome back Alien'+id);
});

app.get('/alien/:id', function (req, res) {
    const id = req.params.id;
    res.send('Hey Mahesh' +id);
});

app.listen(9000, function (req, res) {
    console.log('Running');
});