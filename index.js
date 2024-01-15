// Initialize and add the map
function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((pos) => {
      let location = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location,
      });
      const marker = new google.maps.Marker({
        position: location,
        map: map,
      });
      console.log(marker.getCursor());
    });
  } else {
    alert("Não foi possivel pegar a localização");
  }
}

window.initMap = initMap;
