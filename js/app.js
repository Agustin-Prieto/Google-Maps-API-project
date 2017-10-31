let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -32.944243, lng: -60.650539},
    zoom: 15
  });

  let geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', () => {
    geocodeAddress(geocoder, map);
  })

  function geocodeAddress(geocoder, resultsMap) {
    let address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}