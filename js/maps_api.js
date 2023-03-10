'use strict'

function initMap() {
    const center = new google.maps.LatLng(46.98, 32.00);
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "e68594cdc363b166",
        zoom: 12,
        center: center,
      }
    );

    const imgMarker = './img/pin.png';
    new google.maps.Marker({
        position: center, 
        icon: imgMarker,
        map: map,
        opacity: 0.7,
        width: '12px'
    });
  }

  window.initMap = initMap;
  