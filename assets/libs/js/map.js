var geocoder; // currently not used

function initMap() {

  $(document).ready ( function() {

    //loop through all the mapping elements
    $(".mapping").each(function() {

      var map;
      var bounds;

      // initialize the map canvas
      $(this).find('.map-canvas').each(function() {    
        map = getMap(this);
        bounds = new google.maps.LatLngBounds();
        console.log("plop2");
      });

      // loop through map points and put them on the map
      var points = $(this).find(".map-point");
      points.each(function() {

        // create a latlong and marker for each point
        var latlng = new google.maps.LatLng($(this).attr('latitude'), $(this).attr('longitude'));    
        var marker = new google.maps.Marker({
          map: map,
          icon: $(this).attr('icon'),
          position: latlng,
          title: $(this).attr('title'),
          url: ""
        });

        console.log($(this).attr('title'));

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

    });

  });
}

function getMap(canvas) {

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
  map = new google.maps.Map(document.getElementById('map'), myOptions);
  map.setCenter(latlng);

  // set some custom styles
  map.set('styles', 
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#6e6e6e"
          },
          {
            "visibility": "on"
          },
          {
            "weight": 0.5
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#6e6e6e"
          },
          {
            "visibility": "on"
          },
          {
            "weight": 1
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": -15
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 100
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
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#6e6e6e"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#fdfdfd"
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
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
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
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
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
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 100
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 65
          },
          {
            "weight": 1
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
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
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
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
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
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "saturation": -70
          },
          {
            "lightness": 100
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c4e0ff"
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
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
      
  );

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
