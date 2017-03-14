
var map;
var markers = [];

function initMap() {

  $(document).ready ( function() {

    var infoWindows = [];

    //loop through all the mapping elements
    $(".mapping").each(function() {
      var itinary = $(this).attr('itinary');
      var hideMarkers = $(this).attr('hideMarkers');
      var mapId = $(this).attr('mapId');
      var mapMarkers = [];
      var googleStyle = $(this).attr('googleStyle');
      var bounds;

      // initialize the map canvas
      $(this).find('.map-canvas').each(function() {    
        map = getMap(this, mapId, googleStyle);
        bounds = new google.maps.LatLngBounds();
      });

      // loop through map points and put them on the map
      var points = $(this).find(".map-point");
      points.each(function() {

        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 512 512" version="1.1"><g id="#333333ff"><path fill="' + $(this).attr('iconColor') + '" opacity="1.00" d=" M 223.07 11.47 C 257.45 3.52 294.50 7.37 326.37 22.57 C 355.70 36.35 380.51 59.45 396.45 87.65 C 412.30 115.70 419.61 148.81 415.81 180.88 C 412.06 208.59 399.39 234.18 384.25 257.36 C 370.77 277.80 354.77 296.38 339.25 315.26 C 312.76 347.22 285.76 378.76 258.75 410.28 C 227.65 377.01 196.87 343.42 167.02 309.02 C 147.04 285.98 127.62 261.81 115.21 233.71 C 102.35 205.53 97.89 173.67 102.16 143.02 C 106.63 110.63 121.70 79.89 144.29 56.28 C 165.46 34.14 193.18 18.26 223.07 11.47 M 251.14 91.29 C 227.86 93.35 206.08 106.83 193.51 126.46 C 183.24 142.07 179.15 161.53 181.93 179.98 C 184.67 199.31 195.19 217.37 210.53 229.41 C 222.85 239.26 238.27 245.16 254.01 246.05 C 269.66 247.04 285.60 243.14 298.98 234.97 C 311.23 227.55 321.35 216.68 327.87 203.93 C 336.74 186.68 338.80 166.04 333.43 147.39 C 328.10 128.18 314.94 111.33 297.68 101.39 C 283.76 93.20 267.20 89.70 251.14 91.29 Z"/></g></svg>';

        // create a latlong and marker for each point
        var latlng = new google.maps.LatLng($(this).attr('latitude'), $(this).attr('longitude'));  

        var icon = {
            // path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
            url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(svg),
            fillColor: $(this).attr('iconColor'),
            fillOpacity: 1,
            anchor: new google.maps.Point(25,40),
            strokeWeight: 0
        }

        var marker = new google.maps.Marker({
          map: map,
          icon: icon,
          position: latlng,
          title: $(this).attr('title')
        });

        markers.push(marker);
        mapMarkers.push(marker);


        // if the map point has HTML, turn it into an info window
        var infowindow = new google.maps.InfoWindow({
          content: $(this).html()
        });

        infoWindows.push(infowindow);

        // handle clicks to the marker
        // This event expects a click on a marker
        // When this event is fired the Info Window is opened.
        google.maps.event.addListener(marker, 'click', function() {

          infoWindows.forEach(function(element) {
            element.close();
          }, this);

          infowindow.open(map,marker);
        });

        // Event that closes the Info Window with a click on the map
        google.maps.event.addListener(map, 'click', function() {
          infowindow.close();
        });

        // *
        // START INFOWINDOW CUSTOMIZE.
        // The google.maps.event.addListener() event expects
        // the creation of the infowindow HTML structure 'domready'
        // and before the opening of the infowindow, defined styles are applied.
        // *
        google.maps.event.addListener(infowindow, 'domready', function() {

          // Reference to the DIV that wraps the bottom of infowindow
          var iwOuter = $('.gm-style-iw');

          /* Since this div is in a position prior to .gm-div style-iw.
          * We use jQuery and create a iwBackground variable,
          * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
          */
          var iwBackground = iwOuter.prev();

          // Removes background shadow DIV
          iwBackground.children(':nth-child(2)').css({'display' : 'none'});

          // Removes white background DIV
          iwBackground.children(':nth-child(4)').css({'display' : 'none'});

          // Moves the infowindow 115px to the right.
          iwOuter.parent().parent().css({left: '115px'});

          // Moves the shadow of the arrow 76px to the left margin.
          iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 100px !important;'});

          // Moves the arrow 76px to the left margin.
          iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 100px !important;'});

          // Changes the desired tail shadow color.
          iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

          // Reference to the div that groups the close button elements.
          var iwCloseBtn = iwOuter.next();

          // Apply the desired effect to the close button
          iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #bf0a00', 'border-radius': '13px', 'box-shadow': '0 0 5px #bf0a00'});

          // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
          if($('.iw-content').height() < 140){
            $('.iw-bottom-gradient').css({display: 'none'});
          }

          // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
          iwCloseBtn.mouseout(function(){
            $(this).css({opacity: '1'});
          });
        });

        // if there are multiple markers, fit the map to them; otherwise, center the map on the only marker
        if (points.length == 1) {
          map.setCenter(latlng);
        } else {      
          bounds.extend(latlng);
          map.fitBounds(bounds);
        }

      });

      map.data.loadGeoJson(itinary);
      map.data.setStyle({strokeColor: '#2D7CA6', strokeWeight:3});



      if(mapMarkers.length > 2 && hideMarkers != "true")
      {
        var markerCluster = new MarkerClusterer(map, mapMarkers, {imagePath: '/assets/owner/m'});
      }

      if(hideMarkers == "true") { clearMarkers(); }

    });

  });
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

function loadKmlLayer(src, map) {
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
  google.maps.event.addListener(kmlLayer, 'click', function(event) {
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.getElementById('capture');
    testimonial.innerHTML = content;
  });
  }

function getMap(canvas, mapId, googleStyle) {

  // set a default zoom unless it's specified
  zoom = parseInt($(canvas).attr('zoom')) || 8;

  // center the map and create options
  var latlng = new google.maps.LatLng(0, 0);
  var myOptions = {
    zoom: zoom,
    center: latlng,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  // create the map
  map = new google.maps.Map(document.getElementById(mapId), myOptions);
  map.setCenter(latlng);


  if(googleStyle === "false") {

  // set some custom styles
  map.set('styles', 
[
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#f2e6e6"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "color": "#cecece"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#252525"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

      
  );
  }
  return map;

}


// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
//   console.log("relou");
// }
