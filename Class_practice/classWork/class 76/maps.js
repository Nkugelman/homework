/* global google*/
(function () {
  'use strict';


  const map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 15,
    center: { lat: 40.096044749672394, lng: -74.22197586384449 }
  });


  // const drawings = JSON.parse(localStorage.getItem('drawings')) || { markers: [], circles: [] };
  const drawings = JSON.parse(localStorage.getItem('drawings')) || [];


  //const markers = JSON.parse(localStorage.getItem('markers')) || [];
  /*drawings.markers.forEach(marker => {
    new google.maps.Marker({
      map,
      position: marker.position
    });
  });


  //const circles = JSON.parse(localStorage.getItem('circles')) || [];
  drawings.circles.forEach(circle => {
    new google.maps.Circle({
      map,
      center: circle.center,
      radius: circle.radius
    });
  });*/


  drawings.forEach(drawing => {
    switch (drawing.type) {
      case 'marker':
        new google.maps.Marker({
          map,
          position: drawing.position
        });
        break;
      case 'circle':
        new google.maps.Circle({
          map,
          center: drawing.center,
          radius: drawing.radius
        });
        break;
      case 'polyline':
        new google.maps.Polyline({
          map,
          path: drawing.path
        });
        break;
      case 'polygon':
        new google.maps.Polygon({
          map,
          path: drawing.path
        });
        break;
      case 'rectangle':
        new google.maps.Rectangle({
          map,
          bounds: drawing.bounds
        });
        break;
    }
  });


  const drawingManager = new google.maps.drawing.DrawingManager();
  drawingManager.setMap(map);


  /*drawingManager.addListener('overlaycomplete', e => {
    console.log(e);


    switch (e.type) {
      case 'marker':
        drawings.push({ type: 'marker', position: { lat: e.overlay.position.lat(), lng: e.overlay.position.lng() } });
        localStorage.setItem('drawings', JSON.stringify(drawings));
        break;
      case 'circle':
        drawings.push({ type: 'circle', center: { lat: e.overlay.center.lat(), lng: e.overlay.center.lng() }, radius: e.overlay.radius });
        localStorage.setItem('drawings', JSON.stringify(drawings));
        break;
    }
  });*/


  drawingManager.addListener('markercomplete', marker => {
    drawings.push({ type: 'marker', position: marker.position });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });


  drawingManager.addListener('circlecomplete', circle => {
    drawings.push({ type: 'circle', center: circle.center, radius: circle.radius });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });


  drawingManager.addListener('polylinecomplete', polyline => {
    drawings.push({ type: 'polyline', path: polyline.getPath().getArray() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });


  drawingManager.addListener('polygoncomplete', polygon => {
    drawings.push({ type: 'polygon', path: polygon.getPath().getArray() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });


  drawingManager.addListener('rectanglecomplete', rectangle => {
    drawings.push({ type: 'rectangle', bounds: rectangle.getBounds() });
    localStorage.setItem('drawings', JSON.stringify(drawings));
  });
}());
