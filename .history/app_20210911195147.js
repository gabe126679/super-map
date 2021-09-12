require('dotenv').config();
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/',  function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
    initAutocomplete
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

function initAutocomplete() {
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
      mapId: "834a7a3b1b416a62",
      streetViewControl: false,
      fullscreenControl: false
    });
  
    function addMarker(props) {
      new google.maps.Marker({
          position:props.coords,
          map:map,
          title:props.title,
          icon:props.icon,
          animation: google.maps.Animation.BOUNCE,
          draggable: true,
        });
  
  }
  


app.listen(process.env.PORT || 5000);