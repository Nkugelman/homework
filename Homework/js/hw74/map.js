/* global google */
(async function () {
  'use strict';
  const searchBtn = document.querySelector('#searchBtn');
const search = document.querySelector('#search');
const GEONAMES_USER ='nkugelman';
const sidebar = document.querySelector('#sidebar');

let marker;
let infowindow;
 


  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');


  const map = new Map(document.querySelector('#map'), {
     

     
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 18,
    mapTypeId:google.maps.MapTypeId.SATELLITE,
    mapId: 'DEMO_MAP_ID'
  });
   

searchBtn.addEventListener('click', async() => {
    sidebar.querySelector('ul').innerHTML ='';

    const query = search.value;
    const url = `http://api.geonames.org/wikipediaSearch?q=${query}y&maxRows=10&username=${GEONAMES_USER}&type=json`;
    const data = await fetchUrl(url)
    data.geonames.forEach(d => {
        const li = document.createElement('li');
        li.style.cursor ='pointer';
     
        const img = document.createElement('img');
        img.src = d.thumbnailImg || 'media/city.jpg';
        img.style.width ='50px';
        li.appendChild(img);
      
      const span = document.createElement('span');
      span.textContent = d.title;
      li.appendChild(span);

      li.addEventListener('click', () => {
        const lat = parseFloat(d.lat);
        const lng = parseFloat(d.lng);
        if(!marker){
            marker =new google.maps.Marker({
                position: {lat, lng},
                map: map,
                title: d.name

            });
        } else{
            marker.setPosition({lat, lng});
        }
        if(!infowindow){
            infowindow = new google.maps.InfoWindow();
        }
         marker.addListener("click", () => {
    const content = `
      <div>
        <strong>${d.title}</strong><br>
        Country: ${d.countryCode}<br>
        <a href="https://${d.wikipediaUrl}">click here for more info</a>
      </div>`;
    infowindow.setContent(content);
    infowindow.open(map, marker);
    console.log(d);
  });
          
        map.setCenter({lat, lng});
        map.setZoom(12);
        
    });
        sidebar.querySelector('ul').appendChild(li);
    });
});
async function  fetchUrl(url){
    const r = await fetch(url);
    const data = await r.json();
    return data;
}

}());
