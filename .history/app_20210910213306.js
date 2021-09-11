var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + './index.html'));
})

app.get('/mapOne', function(req, res){
    res.sendFile(path.join(__dirname + '/views/mapOne.html'));
})

app.get('/mapTwo', function(req, res){
    res.sendFile(path.join(__dirname + '/mapTwo.html'));
})

app.get('/batMap', function(req, res){
    res.sendFile(path.join(__dirname + '/batMap.html'));
})

app.get('/mushroomMap', function(req, res){
    res.sendFile(path.join(__dirname + '/mushroomMap.html'));
})

app.get('/yoshiMap', function(req, res){
    res.sendFile(path.join(__dirname + '/yoshiMap.html'));
})


app.listen(5000);