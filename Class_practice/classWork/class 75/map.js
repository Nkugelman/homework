(async function(){
    'use strict';
    const sanFrancisco = { lat: 37.7749, lng: -122.4194 };
  const { Map ,InfoWindow} = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
  const geonamesApiKey = 'nkugelman';
  const searchInput = document.querySelector('#search');
  const placesList = document.querySelector('#places');
 // const { StreetViewPanorama } = await google.maps.importLibrary('streetView');
  const map = new Map(document.querySelector('#map'), {
    center:sanFrancisco,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapId: 'DEMO_MAP_ID'
    
  });
  const infowindow = new google.maps.InfoWindow();
  document.querySelector('#go').addEventListener('click',async() => {
    try {
    const r =await fetch(`http://api.geonames.org/wikipediaSearch?q=${searchInput.value}&maxRows=10&username=${geonamesApiKey}&type=json` );
 
  if(!r.ok){
    throw new Error(`${r.status} - ${r.statusText}`);
  }
  
  const places = await r.json(); 
    console.log (places);

    const bounds = new google.maps.LatLngBounds ();
let img;
    places.geonames.forEach (place => {
        const position = {lat: parseFloat(place.lat), lng: parseFloat(place.lng)};
        
        if(place.thumbnailImg){
            img = document.createElement ('img');
            img.src = place.thumbnailImg;
            img.alt = place.title;
           img.className ='place-picture';
        }
        const marker = new AdvancedMarkerElement ({
            map,
            position,
            title: place.title,
            content: img
        });
        marker.addListener ('click', () => {
            infowindow.setContent (`<div><h3>${place.title}</h3><p>${place.summary}</p><a href="https://${place.wikipediaUrl}" target="_blank">Read more on Wikipedia</a></div>`);
            infowindow.open ({
                anchor: marker
        });
        });
        bounds.extend (position);
        const li = document.createElement ('li');
        li.innerHTML = `<div><span>${place.title}</span>
                       <img src= "${place.thumbnailImg || 'media/city.jpg'}"></div>
                      <div class="summary">${place.summary}</div>`;
         
          li.addEventListener ('click',async () => {

          const currentSummary =  document.querySelector('.active .summary');
           
          if(currentSummary){
            currentSummary.parentElement.className ='visited';
           // currentSummary.style.display ='none';
          }
          li.className ='visited active';
           //  li.querySelector('.summary').style.display ='inline-block';
            map.setZoom (3);
          
           await doAfter(() => map.panTo(position), 1500);
          await doAfter(() => map.setZoom(18), 1500);

          });
          
           placesList.appendChild (li);

    });
    map.fitBounds (bounds);
} catch (error) {
    console.error ('Error fetching or displaying places:', error);
}
    });
   

  function doAfter(action, after) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        action();
        resolve();
      }, after);
    });
  }

    }());