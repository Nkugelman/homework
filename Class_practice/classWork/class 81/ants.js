(function(){
    'use strict';
    const theCanvas =document.querySelector('#theCanvas');
     const context = theCanvas.getContext('2d');
     function resizeCanvas(){
        theCanvas.width =window.innerWidth;
        theCanvas.height =window.innerHeight;
     }
window.addEventListener('resize',resizeCanvas)

resizeCanvas();
function Ant(color){
    this.color =color;
    this.x =window.innerWidth /2;
    this.y =window.innerHeight/2;
   // this.dx =1;
   // this.dy=1;
}
Ant.prototype.draw =function(){
context.beginPath();
context.fillStyle =this.color;
context.fillRect(this.x,this.y,2,4)
};
Ant.prototype.move =function(){
     if (! --this.brains) {
      this.brains = Ant.getRandomNumber(1, 100);
      this.dx = (Ant.getRandomNumber(-1, 1) / 3);
      this.dy = (Ant.getRandomNumber(-1, 1) / 3);
    }

    if (this.x + this.dx < 2 || this.x + this.dx > theCanvas.width - 2) { 
        this.dx = -this.dx; } 
    if (this.y + this.dy < 4 || this.y + this.dy > theCanvas.height - 4) { 
        this.dy = -this.dy; } 
    this.x += this.dx; this.y += this.dy; 
    this.draw();
}
const ant = new Ant('red');

  Ant.getRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1))) + min;
  };
  const ants =[];
  for(let i =0; i<20;i++){
    ants.push(new Ant(i %2===0?'red':"green"));
   
  }
function drawAnt(){
     context.clearRect(0, 0, theCanvas.width, theCanvas.height);
     ants.forEach(ant =>ant.move());
     requestAnimationFrame(drawAnt);
}
drawAnt();
}())



