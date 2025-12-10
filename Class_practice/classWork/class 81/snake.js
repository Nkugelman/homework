(function () {
  'use strict';


  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');


  function resizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
  }


  window.addEventListener('resize', resizeCanvas);


  resizeCanvas();
  let x =0;
  let y=0;
 const snake = document.createElement('img')
 snake.src ='snake.png';
 snake.onload =()=>{
 


 setInterval(()=>{
context.drawImage(snake,x++,y++);

 });
 }
 


}());
