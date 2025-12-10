(function(){
'use strict';


  let dragging = false;
  let offset;
  let zIndex=1;
  let parts =[];

  document.addEventListener('mousedown', e => {
    if (e.target.classList.contains('part')) {
      e.preventDefault();
       offset = { x: e.offsetX, y: e.offsetY };
       if(e.target.parentNode.id === 'sidebar'){
    const p= addPart(e.target);
   p.style.left = `${e.pageX - offset.x}px`;
      p.style.top = `${e.pageY - offset.y}px`;
      dragging = p;
      parts.push(p);
       }
       else{
        dragging =e.target;

       }
         if (!e.target.classList.contains('potato')) {
       dragging.style.zIndex =zIndex++;
         }
      
    
    }
  });


  document.addEventListener('mousemove', e => {
    if (dragging) {
      dragging.style.left = `${e.pageX - offset.x}px`;
      dragging.style.top = `${e.pageY - offset.y}px`;
    }
  })


  document.addEventListener('mouseup', e => {
    dragging = null;
    saveState();
  });
function saveState(){
   const partsData = parts.map(part =>{
    return{
    src: parts.src,
    top:part.style.top,
    left:part.style.left,
    className: part.className
    }

    })
    localStorage.setItem('parts',JSON.stringify(partsData));
};
function loadState(){
    const partsData = JSON.parse(localStorage.getItem('parts'));
    parts.forEach(data =>{
const p =addPart(data)
   p.style.left = `${data.left}`;
      p.style.top = `${data.top}`;
    });
}
loadState();
function addPart(orig){
     const p = document.createElement('img');
      p.src =orig.src;
      p.className = orig.className ='part';
      p.style.position ='absolute';
      
    
      document.body.append(p);
      return p;
}
}());