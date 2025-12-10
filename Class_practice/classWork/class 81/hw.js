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

  class Ball {
    constructor(color,radius){
        this.color =color
        this.radius =radius;
        this.x =radius+1;
        this.y = radius+1;
        this.dx =5;
        this.dy =10.25;
        this.minY =radius+1;
    }
    draw(){
         context.beginPath();
    context.fillStyle = this.color;
     context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();


    x += dx;
    y += dy;

    }
}
    // removed useless 0 + after class
 
 

  /*setTimeout(() => {
    context.drawImage(img, 50, 50);
  }, 2000);*/


document.querySelector('#addBall').addEventListener('click',)
}());
