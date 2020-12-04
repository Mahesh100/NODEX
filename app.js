const express = require('express');


const app = express();

app.get('/', function (req, res) {
    res.send('Hey Its working fine');
});

app.get('/patch', function (req, res){
    const id = req.query.id;
    res.send('Welcome back patch');
});

app.get('/patch/:id', function (req, res) {
    const id = req.params.id;
    res.send('Hey Mahesh' +id);
});

app.listen(9000, function (req, res) {
    console.log('Server Is Up and Running');
});
