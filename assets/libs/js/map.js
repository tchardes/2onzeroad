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


        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 512 512" version="1.1"><g id="#333333ff"><path fill="#2C78BF" opacity="1.00" d=" M 223.07 11.47 C 257.45 3.52 294.50 7.37 326.37 22.57 C 355.70 36.35 380.51 59.45 396.45 87.65 C 412.30 115.70 419.61 148.81 415.81 180.88 C 412.06 208.59 399.39 234.18 384.25 257.36 C 370.77 277.80 354.77 296.38 339.25 315.26 C 312.76 347.22 285.76 378.76 258.75 410.28 C 227.65 377.01 196.87 343.42 167.02 309.02 C 147.04 285.98 127.62 261.81 115.21 233.71 C 102.35 205.53 97.89 173.67 102.16 143.02 C 106.63 110.63 121.70 79.89 144.29 56.28 C 165.46 34.14 193.18 18.26 223.07 11.47 M 251.14 91.29 C 227.86 93.35 206.08 106.83 193.51 126.46 C 183.24 142.07 179.15 161.53 181.93 179.98 C 184.67 199.31 195.19 217.37 210.53 229.41 C 222.85 239.26 238.27 245.16 254.01 246.05 C 269.66 247.04 285.60 243.14 298.98 234.97 C 311.23 227.55 321.35 216.68 327.87 203.93 C 336.74 186.68 338.80 166.04 333.43 147.39 C 328.10 128.18 314.94 111.33 297.68 101.39 C 283.76 93.20 267.20 89.70 251.14 91.29 Z"/><path fill="#333333" opacity="1.00" d=" M 80.74 378.77 C 110.74 370.33 141.61 365.31 172.58 362.08 C 177.89 367.31 183.24 372.50 188.52 377.76 C 167.98 378.99 147.46 380.74 127.09 383.76 C 110.34 386.37 93.54 389.54 77.67 395.64 C 70.53 398.57 63.19 402.04 58.15 408.09 C 54.89 411.89 53.70 417.43 55.61 422.13 C 58.43 429.26 65.04 433.85 71.33 437.71 C 84.67 445.30 99.46 449.83 114.23 453.70 C 138.93 459.85 164.19 463.44 189.51 465.77 C 240.56 470.20 292.08 469.73 343.00 463.93 C 369.28 460.67 395.58 456.23 420.73 447.73 C 431.29 444.03 441.82 439.62 450.74 432.73 C 455.87 428.69 460.60 422.79 460.02 415.87 C 459.39 409.85 454.64 405.37 449.92 402.13 C 441.11 396.41 430.98 393.19 420.94 390.40 C 391.49 382.86 361.09 380.10 330.85 378.03 C 336.12 372.87 341.29 367.61 346.61 362.51 C 372.65 365.45 398.59 369.60 424.00 376.06 C 443.05 381.07 462.03 387.09 479.38 396.58 C 489.02 402.07 498.81 408.70 504.21 418.71 C 508.18 425.92 507.48 435.10 502.87 441.85 C 496.05 452.15 485.12 458.78 474.36 464.34 C 455.37 473.68 434.94 479.66 414.41 484.54 C 366.75 495.32 317.82 499.60 269.03 500.32 C 216.94 500.91 164.62 497.49 113.45 487.37 C 88.51 482.15 63.55 475.68 40.58 464.41 C 31.17 459.63 21.92 454.00 14.93 445.98 C 9.91 440.20 6.59 432.29 8.42 424.59 C 10.78 414.66 18.83 407.45 26.88 401.83 C 43.20 390.83 62.01 384.35 80.74 378.77 Z"/></g></svg>';

        var icon = {
            // path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
            url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(svg),
            fillColor: $(this).attr('iconColor'),
            fillOpacity: 1,
            anchor: new google.maps.Point(25,35),
            strokeWeight: 0
        }
        var marker = new google.maps.Marker({
          map: map,
          icon: icon,
          position: latlng,
          title: $(this).attr('title')
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
