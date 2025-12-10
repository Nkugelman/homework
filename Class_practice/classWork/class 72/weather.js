(function(){
'use strict';
const zipInput =document.querySelector('#zip')
zipInput.addEventListener('change', async() =>{
    try{
        const r =fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput.value}&appid=3876230aa5dd42eeba5e8bb9da9ea2f0&units=imperial`);
    if(! r.ok){
        throw new Error (`${r.status }- ${r.statusText}`);
    }

    const data = await r.json();
    console.log(data);
    }catch(e){
        console.error(e);
    }
    
});
}());