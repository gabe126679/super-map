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

// function initAutocomplete() {
//     let map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: -33.8688, lng: 151.2195 },
//       zoom: 13,
//       mapTypeId: "roadmap",
//       mapId: "834a7a3b1b416a62",
//       streetViewControl: false,
//       fullscreenControl: false
//     });
  
//     function addMarker(props) {
//       new google.maps.Marker({
//           position:props.coords,
//           map:map,
//           title:props.title,
//           icon:props.icon,
//           animation: google.maps.Animation.BOUNCE,
//           draggable: true,
//         });
  
//   }
  
//     google.maps.event.addListener(map, 'click', function(event) {
//         addMarker({
//             coords:event.latLng,
//             title: "superstar!",
//             icon: {
//                 url: "star.png",
//                 scaledSize: new google.maps.Size(50, 50) 
//             },
//         });
//     })
//     // Create the search box and link it to the UI element.
//     const input = document.getElementById("pac-input");
//     const searchBox = new google.maps.places.SearchBox(input);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener("bounds_changed", () => {
//       searchBox.setBounds(map.getBounds());
//     });
//     let markers = [];
//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.
//     searchBox.addListener("places_changed", () => {
//       const places = searchBox.getPlaces();
  
//       if (places.length == 0) {
//         return;
//       }
//       // Clear out the old markers.
//       markers.forEach((marker) => {
//         marker.setMap(null);
//       });
//       markers = [];
//       // For each place, get the icon, name and location.
//       const bounds = new google.maps.LatLngBounds();
//       places.forEach((place) => {
//         if (!place.geometry || !place.geometry.location) {
//           console.log("Returned place contains no geometry");
//           return;
//         }
//         const icon = {
//           url: place.icon,
//           size: new google.maps.Size(17, 17),
//           origin: new google.maps.Point(0, 0),
//           anchor: new google.maps.Point(17, 34),
//           scaledSize: new google.maps.Size(25, 25),
//         };
//         // Create a marker for each place.
//         markers.push(
//           new google.maps.Marker({
//             map,
//             icon,
//             title: place.name,
//             position: place.geometry.location,
//           })
//         );
  
//         if (place.geometry.viewport) {
//           // Only geocodes have viewport.
//           bounds.union(place.geometry.viewport);
//         } else {
//           bounds.extend(place.geometry.location);
//         }
//       });
//       map.fitBounds(bounds);
//     });
//   }


app.listen(process.env.PORT || 5000);