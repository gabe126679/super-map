const marioMap = {
  firstMapMap: document.getElementById("map"),
  firstMapID: "834a7a3b1b416a62",
  firstMapTitle: "superstar!",
  firstMapImage: "star.png"
}

const firstMap = {
  firstMapMap: document.getElementById("mapOne"),
  firstMapTitle: "marker!",
  firstMapImage: "marker.png"
}

const secondMap = {
  firstMapMap: document.getElementById("mapTwo"),
  firstMapID: "1bd6a31e0ac9a976",
  firstMapTitle: "polar bear!",
  firstMapImage: "bear.png"
}

const batMap = {
  firstMapMap: document.getElementById("batMap"),
  firstMapID: "2860df1b89dce557",
  firstMapTitle: "batman!",
  firstMapImage: "batman.png"
}

const mushroomMap = {
  firstMapMap: document.getElementById("mushroomMap"),
  firstMapID: "834a7a3b1b416a62",
  firstMapTitle: "mushroom!",
  firstMapImage: "mushroom.png"
}

const yoshiMap = {
  firstMapMap: document.getElementById("yoshiMap"),
  firstMapID: "834a7a3b1b416a62",
  firstMapTitle: "yoshi!",
  firstMapImage: "mariYoshi.png"
}



  const maps = [ marioMap, firstMap, secondMap, batMap, mushroomMap, yoshiMap ]
  maps.map(myFunction);

  function myFunction() {
    if (document.getElementById("map")) {
      return val = marioMap.firstMapMap,
      mapID = marioMap.firstMapID,
      title = marioMap.firstMapTitle,
      image = marioMap.firstMapImage
    } else if (document.getElementById("mapOne")) {
      return val = firstMap.firstMapMap,
      mapID = firstMap.firstMapID,
      title = firstMap.firstMapTitle,
      image = firstMap.firstMapImage
    } else if (document.getElementById("mapTwo")) {
      return val = secondMap.firstMapMap,
      mapID = secondMap.firstMapID,
      title = secondMap.firstMapTitle,
      image = secondMap.firstMapImage
     } else if (document.getElementById("batMap")) {
      return val = batMap.firstMapMap,
      mapID = batMap.firstMapID,
      title = batMap.firstMapTitle,
      image = batMap.firstMapImage
     } else if (document.getElementById("mushroomMap")) {
      return val = mushroomMap.firstMapMap,
      mapID = mushroomMap.firstMapID,
      title = mushroomMap.firstMapTitle,
      image = mushroomMap.firstMapImage
     } else if (document.getElementById("yoshiMap")) {
      return val = yoshiMap.firstMapMap,
      mapID = yoshiMap.firstMapID,
      title = yoshiMap.firstMapTitle,
      image = yoshiMap.firstMapImage
     } else {
      return "failed"
    }
  }
  


  function initAutocomplete() {
    let map = new google.maps.Map(val, {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      streetViewControl: false,
      fullscreenControl: false,
      mapId: mapID
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
  
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker({
            coords:event.latLng,
            title: title,
            icon: {
                url: image,
                scaledSize: new google.maps.Size(50, 50) 
            },
        });
    })
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
  
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }

