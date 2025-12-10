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
        this.radius = Number(radius);
        // random starting position
        this.x = Math.random() * (theCanvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (theCanvas.height - this.radius * 2) + this.radius;
        this.color = color;
        // random speed
        this.dx = (Math.random() * 4) - 2; // -2 to 2
        this.dy = (Math.random() * 4) - 2;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    moveBall() {
        this.x += this.dx;
        this.y += this.dy;

        // bounce off walls
        if (this.x <= this.radius || this.x >= theCanvas.width - this.radius) this.dx *= -1;
        if (this.y <= this.radius || this.y >= theCanvas.height - this.radius) this.dy *= -1;

        this.draw();
    }
}

// Add ball
addBtn.addEventListener('click', () => {
    const ball = new Ball(radiusPick.value, colorPick.value);
    balls.push(ball);
});

// Animation loop
function animate() {
    setInterval(() => {
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);
    balls.forEach(ball => ball.moveBall());
    }, 2);
    //requestAnimationFrame(animate);
}

// Resize canvas
function resizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);

resizeCanvas();
animate();
}());