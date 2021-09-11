require('dotenv').config();
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

const API_KEY = process.env.PLACES_API_KEY

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/mapOne', function(req, res){
    res.sendFile(path.join(__dirname + '/views/mapOne.html'));
})

app.get('/mapTwo', function(req, res){
    res.sendFile(path.join(__dirname + '/views/mapTwo.html'));
})

app.get('/batMap', function(req, res){
    res.sendFile(path.join(__dirname + '/views/batMap.html'));
})

app.get('/mushroomMap', function(req, res){
    res.sendFile(path.join(__dirname + '/views/mushroomMap.html'));
})

app.get('/yoshiMap', function(req, res){
    res.sendFile(path.join(__dirname + '/views/yoshiMap.html'));
})

const port = process.env.PORT || 5000
app.listen(port);