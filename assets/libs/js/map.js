var geocoder; // currently not used

function initMap() {

  $(document).ready ( function() {

    //loop through all the mapping elements
    $(".mapping").each(function() {
      var itinary = $(this).attr('itinary');
      var mapId = $(this).attr('mapId');
      var googleStyle = $(this).attr('googleStyle');
      var map;
      var bounds;

      // initialize the map canvas
      $(this).find('.map-canvas').each(function() {    
        map = getMap(this, mapId, googleStyle);
        bounds = new google.maps.LatLngBounds();
      });

      // loop through map points and put them on the map
      var points = $(this).find(".map-point");
      points.each(function() {

        // var pinIcon = new google.maps.MarkerImage(
        //     $(this).attr('icon'),
        //     null, /* size is determined at runtime */
        //     null, /* origin is 0,0 */
        //     new google.maps.Point(25,45), /* anchor is bottom center of the scaled image */
        //     new google.maps.Size(50, 50)
        // );

        // create a latlong and marker for each point
        var latlng = new google.maps.LatLng($(this).attr('latitude'), $(this).attr('longitude'));  


        var icon = {
            path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
            fillColor: $(this).attr('iconColor'),
            fillOpacity: 1,
            anchor: new google.maps.Point(0,0),
            strokeWeight: 0,
            scale: 1
        }
        

        var marker = new google.maps.Marker({
          map: map,
          icon: icon,
          position: latlng,
          title: $(this).attr('title'),
          url: ""
        });

        // if the map point has HTML, turn it into an info window
        var infowindow = new google.maps.InfoWindow({
          content: $(this).html()
        });

        // handle clicks to the marker
        google.maps.event.addListener(marker, 'click', function() {
          if (this.url) {
            window.open(this.url);
          } else {
            infowindow.open(map, marker);
          }
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
    });


  });
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
      console.log("googleStyle");

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
        "color": "#ffffff"
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
