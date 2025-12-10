(function() {
    'use strict';

  
        let dragging = false;
        let offset;
        const box =document.querySelector('.box');
        document.addEventListener('mousedown', e =>{
            if(e.target.className ==='box'){
            e.preventDefault();
            dragging =e.target;
            offset = {x: e.offsetX, y: e.offsetY}
            }
        })
       document.addEventListener('mousemove', e =>{
        if(dragging){
        dragging.style.left =`${e.pageX -  offset.x}px`;
         dragging.style.top =`${e.pageY -  offset.y}px`;
        

        }
       });
     

  document.addEventListener('mouseup', e => {
    //console.log('end drag', e);
    dragging = null;
  });
  const colorInput =document.querySelector('#color')
document.querySelector('#add').addEventListener('click', ()=>{
    const b =document.createElement('div');
    b.className ='box'
    b.style.backgroundColor =colorInput.value;
    document.body.appendChild(b);
})


}());
