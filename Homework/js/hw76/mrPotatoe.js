(async function(){
'use strict'
const pieces = document.querySelector('.pieces');
  const startBtn = document.getElementById('startBtn');
  const bgMusic = document.getElementById('bgMusic');
const items =await myFetch('mrPotatoe.json');
let dragging;
let offset;
let zCounter=1;
const locations = JSON.parse(localStorage.getItem('locations')) || [];
items.forEach((item,i)  =>{
    const img = document.createElement('img');
    img.src = item.url;        
    img.alt = item.name || '';     
    img.classList.add('piece');  

      const saved = locations.find(loc => loc.id === img.alt);
    if (saved) {
      img.style.left = saved.left;
      img.style.top = saved.top;
      img.style.zIndex = saved.zIndex || 1;
    } else {
      img.style.left = `${50 + i * 120}px`;
      img.style.top = `50px`;
      img.style.zIndex = 1;
    }
      
    pieces.appendChild(img);    
    
    
    img.addEventListener('mousedown', e =>{
        e.preventDefault();
        dragging =e.target;
        offset = {x: e.offsetX, y: e.offsetY};
        zCounter++;
        console.log(img.alt,zCounter);
        
         dragging.style.zIndex =zCounter;
    });
      });
   document.addEventListener('mousemove', e =>{
        if(dragging){
        e.preventDefault();
        dragging.style.left = `${e.pageX - offset.x}px`;
        dragging.style.top = `${e.pageY - offset.y}px`;

        }
        
       
    });


 document.addEventListener('mouseup', () => {
  if (dragging) {
    const existing = locations.find(loc => loc.id === dragging.alt);
    if (existing) {
      existing.left = dragging.style.left;
      existing.top = dragging.style.top;
      existing.zIndex = dragging.style.zIndex;
    } else {
      locations.push({
        id: dragging.alt,
        left: dragging.style.left,
        top: dragging.style.top,
        zIndex: dragging.style.zIndex
      });
    }

    localStorage.setItem('locations', JSON.stringify(locations));
    dragging = null;
  }
});
    


 startBtn.addEventListener('click', () => {
    startBtn.style.display ='none';
    pieces.style.display ='block';
    bgMusic.play().catch(err => console.log(err));
  });


async function myFetch(file) {
    try{
    const r = await fetch(file);
    if(!r.ok){
        throw new Error (`${r.status}- ${r.statusText}`)

    }
    const data =await r.json();
    return data;
}catch(e){
    console.error(e)
}
    
}

}());