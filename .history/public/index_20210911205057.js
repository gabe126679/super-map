const marioMap = {
  firstMapMap: document.getElementById("map"),
  mapID: "834a7a3b1b416a62",
  mapTitle: "superstar!",
  mapImage: "star.png"
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
  firstMapTitle: "superstar!",
  firstMapImage: "star.png"
}



  const maps = [ marioMap, firstMap, secondMap, batMap, mushroomMap, yoshiMap ]
  const numbers = maps.map(myFunction);
  
  console.log(numbers)
  
  function myFunction(value, index, array) {
    if (document.getElementById("mapOne") === ) {
      return val = value.firstMapMap
    }
    return console.log("failure")
  }

  // for (let i = 0; i < maps.length; i++) {
  //   console.log(maps[i])
  // }
  


function initAutocomplete() {
    let map = new google.maps.Map(val, {
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
  
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker({
            coords:event.latLng,
            title: "superstar!",
            icon: {
                url: "star.png",
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
          size: new google.maps.Size(17, 17),
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


  function initAutocompleteOne() {
    let map = new google.maps.Map(val, {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
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
  
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker({
            coords:event.latLng,
            title: "marker!",
            icon: {
                url: "marker.png",
                scaledSize: new google.maps.Size(30, 40) 
            },
        });
    })
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
    let markers = [];

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }

      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];

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

        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
  
        if (place.geometry.viewport) {

          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
  
  function initAutocompleteTwo() {
    let map = new google.maps.Map(document.getElementById("mapTwo"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
      streetViewControl: false,
      fullscreenControl: false,
      mapId: "1bd6a31e0ac9a976"
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
            title: "polar bear!",
            icon: {
                url: "bear.png",
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
  
  
  function initAutocompleteBat() {
    let map = new google.maps.Map(document.getElementById("batMap"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      streetViewControl: false,
      fullscreenControl: false,
      mapId: "2860df1b89dce557"
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
            title: "batman!",
            icon: {
                url: "batman.png",
                scaledSize: new google.maps.Size(50, 40) 
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
  
  function initAutocompleteMush() {
    let map = new google.maps.Map(document.getElementById("mushroomMap"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      streetViewControl: false,
      fullscreenControl: false,
      mapId: "834a7a3b1b416a62"
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
            title: "mushroom!",
            icon: {
                url: "mushroom.png",
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
  
  function initAutocompleteYosh() {
    let map = new google.maps.Map(document.getElementById("yoshiMap"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      streetViewControl: false,
      fullscreenControl: false,
      mapId: "834a7a3b1b416a62"
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
            title: "yoshi!",
            icon: {
                url: "mariyoshi.png",
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