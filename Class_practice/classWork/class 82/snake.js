(async function () {
  'use strict';

  const SNAKE_SIZE = 64;

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');

  function resizeCanvas() {
    theCanvas.width = window.innerWidth - (window.innerWidth % SNAKE_SIZE);
    theCanvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let direction = 'ArrowRight';
  let gameOver = false;
  let score = 0;
  let speed = 500;
  let lives = 3;

  class Snake {
    segments = [{ x: -SNAKE_SIZE, y: 0 }];

    get head() {
      return this.segments[0];
    }

    move() {
      let tempX = this.head.x;
      let tempY = this.head.y;

      switch (direction) {
        case 'ArrowRight':
          tempX += SNAKE_SIZE;
          break;
        case 'ArrowLeft':
          tempX -= SNAKE_SIZE;
          break;
        case 'ArrowUp':
          tempY -= SNAKE_SIZE;
          break;
        case 'ArrowDown':
          tempY += SNAKE_SIZE;
          break;
      }


      for (let i = 1; i < this.segments.length; i++) {
        if (tempX === this.segments[i].x && tempY === this.segments[i].y) {
          this.loseLife();
          return;
        }
      }


      if (tempX < 0 || tempX > theCanvas.width - SNAKE_SIZE || tempY < 0 || tempY > theCanvas.height - SNAKE_SIZE) {
        this.loseLife();
        return;
      }


      const tail = this.segments.pop();
      tail.x = tempX;
      tail.y = tempY;
      this.segments.unshift(tail);


      this.draw();
    }
    loseLife() {
      lives--;
      if (lives <= 0) {
        gameOver = true;
      }
      else {

        this.segments = [{ x: -SNAKE_SIZE, y: 0 }];
        direction = 'ArrowRight';
      }
    }

    grow() {
      const tail = this.segments[this.segments.length - 1];
      this.segments.push({ x: tail.x, y: tail.y });
    }

    draw() {
      context.drawImage(snakeHead, this.head.x, this.head.y);
      context.fillStyle = 'green';
      for (let i = 1; i < this.segments.length; i++) {
        context.fillRect(this.segments[i].x, this.segments[i].y, SNAKE_SIZE, SNAKE_SIZE);
      }
    }
  }

  class Apple {
    constructor() {
      this.move();
    }

    move() {
      let valid = false;
      while (!valid) {
        this.x = this.pickNumber(theCanvas.width - SNAKE_SIZE);
        this.y = this.pickNumber(theCanvas.height - SNAKE_SIZE);
        if (!snake.segments.some(s => s.x === this.x && s.y === this.y)) {
          valid = true;
        }
      }
    }

    draw() {
      context.drawImage(appleImg, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);
    }

    pickNumber(max) {
      let n = Math.floor(Math.random() * (max + 1));
      n -= n % SNAKE_SIZE;
      return n;
    }
  }

  const snake = new Snake();
  const apple = new Apple();

  function gameLoop() {
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);
    snake.move();

    if (snake.head.x === apple.x && snake.head.y === apple.y) {
      score++;
      speed *= 0.95;
      apple.move();
      snake.grow();
    }

    apple.draw();

    context.font = '30px Arial';
    context.fillStyle = 'white';
    context.fillText(`Score: ${score}`, 20, 40);

    if (!gameOver) {
      setTimeout(gameLoop, speed);
    }
    else {
      
      context.fillStyle = 'red';
      context.font = '60px Arial';
      context.fillText(`GAME OVER`, theCanvas.width / 4, theCanvas.height / 2);
    }
  }

  async function loadImg(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    });
  }

  const [snakeHead, appleImg] = await Promise.all([
    loadImg('snake.png'),
    loadImg('apple.png'),
  ]);

  setTimeout(gameLoop, speed);

  document.addEventListener('keydown', e => {
    const isOnePiece = snake.segments.length === 1;
    switch (e.key) {
      case 'ArrowRight':
        if (isOnePiece || direction !== 'ArrowLeft') direction = e.key;
        break;
      case 'ArrowLeft':
        if (isOnePiece || direction !== 'ArrowRight') direction = e.key;
        break;
      case 'ArrowUp':
        if (isOnePiece || direction !== 'ArrowDown') direction = e.key;
        break;
      case 'ArrowDown':
        if (isOnePiece || direction !== 'ArrowUp') direction = e.key;
        break;
    }
  });
})();
