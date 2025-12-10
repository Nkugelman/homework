
(function () {
  'use strict';

  const SNAKE_SIZE = 64;

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');
   let score =0;
 


  function resizeCanvas() {
    theCanvas.width = window.innerWidth - (window.innerWidth % SNAKE_SIZE);
    theCanvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);
  }

  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();
  class Snake{
    segments =[{
        x:-SNAKE_SIZE,
        y:0
    }]

  }
 
  function createApple(size){
    return{
        size,
        x:0,
        y:0,
        img: new Image(),

        create(){
            this.img.src ='apple.png',
            this.placeApple();
        
    },
        placeApple(){
            const maxX =Math.floor(theCanvas.width/this.size);
            const maxY =Math.floor(theCanvas.height/this.size);
             this.x = Math.floor(Math.random() * maxX) * this.size;
        this.y = Math.floor(Math.random() * maxY) * this.size;
        },
        draw(){
            context.drawImage(this.img,this.x,this.y,this.size,this.size)
        }
    };
  }
  function createSnake(size){
    return{
        size,
         x: 0,
        y: 0,
      direction: 'ArrowRight',
      img: new Image(),
       create(){
            this.img.src = 'snake.png';
       },
      move() {
        switch(this.direction) {
          case 'ArrowRight': this.x += this.size; break;
          case 'ArrowLeft': this.x -= this.size; break;
          case 'ArrowUp': this.y -= this.size; break;
          case 'ArrowDown': this.y += this.size; break;
        }
        if(this.x >=theCanvas.width){
            this.x =0;
        }
       if(this.x < 0) {
        this.x = theCanvas.width -this.size
       }
      if(this.y >= theCanvas.height) {
        this.y =0;
      }
      if(this.y < 0){
        this.y =theCanvas.height-this.size;
      }
    },
    
      draw(){
           context.drawImage(this.img, this.x, this.y, this.size, this.size);
      }
    };
}
const snake =createSnake(SNAKE_SIZE);
snake.create();
const apple =createApple(SNAKE_SIZE);
apple.create();

document.addEventListener('keydown', e => {
    switch(e.key) {
      case 'ArrowRight':
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'ArrowDown':
        snake.direction =e.key;
        break;
          default:
        console.log(e.key, 'is not a supported key');
    }
    
  });


  setInterval(() => {
   
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);
     context.font = '30px Arial';
    context.fillStyle = 'black';
    context.fillText(`Score: ${score}`, 20, 45);
    apple.draw();
    snake.move();
    snake.draw();
    if(snake.x ===apple.x && snake.y===apple.y){
        score +=100;
        apple.placeApple();
    }
  }, 300);
  
}());