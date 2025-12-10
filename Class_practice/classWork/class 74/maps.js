(async function() {
    'use strict';

    const {Map} = await google.maps.importLibrary("maps");
    
const map = new Map(document.getElementById('#map'), {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8,
});
map.addListener('center_changed', () => {
    const newCenter = map.getCenter();
    console.log('Center changed to: ', newCenter.lat(), newCenter.lng());
});
}());