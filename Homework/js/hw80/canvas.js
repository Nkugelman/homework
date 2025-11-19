(function () {
'use strict';

const theCanvas = document.querySelector('#theCanvas');
const context = theCanvas.getContext('2d');

const colorPick = document.querySelector('#colorPick');
const radiusPick = document.querySelector('#radiusPick');
const addBtn = document.querySelector('#addBtn');
  
let balls = [];
class Ball {
    constructor(radius, color) {
        this.radius =Number(radius);
        this.x =this.radius+1;
        this.y =this.radius+1;
        this.color=color;
        this.dx = 1;
        this.dy = 2.5;
        this.gravity = 0.2;
    }
     createBall() {
       
        context.beginPath();
        context.fillStyle =this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI );
        context.fill();
        

        }
        moveBall() {
            this.dy += this.gravity;
            this.x +=this.dx;
            this.y +=this.dy;
         
    if (this.y + this.radius >= theCanvas.height) {
    this.y = theCanvas.height - this.radius; 
    this.dy = -this.dy * 0.8;  
}
 if (this.y - this.radius <= 0) {
        this.y = this.radius;
        this.dy = -this.dy * 0.8;
    }
    if (this.y + this.radius >= theCanvas.height) {
   
    return;
}

    
             if (this.x < this.radius+ 1 || this.x >= theCanvas.width - (this.radius+1)) {
      this.dx = -this.dx;
    }

      this.createBall();

        }
}
addBtn.addEventListener('click',()=>{
   const ball = new Ball(radiusPick.value,colorPick.value);
    balls.push(ball);
     console.log(balls);

})

function resizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
  }
  function animate() {
   setInterval(() => {
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);
    balls.forEach(ball => ball.moveBall());
   
    
    }, 10);
    
}
 window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
 animate();

})();