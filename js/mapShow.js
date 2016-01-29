	
/*
 * You can set control options to change the default position or style
 * of many of the map controls.
 */

function initialize() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(50.8166, -1.0833),
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT,
      mapTypeIds: [
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.TERRAIN
      ]
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
}

//google.maps.event.addDomListener(window, 'load', initialize);

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAT6vpmgqp_iGgf_4BulwS2nY6BxYlH8AI' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;