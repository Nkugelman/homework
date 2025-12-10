(function(){
'use strict';
const theCanvas = document.getElementById('theCanvas');
const context = theCanvas.getContext('2d');
context.fillStyle = 'lightblue';
context.fillRect(25,25,200,100);

context.strokeStyle = 'red' ;

context.strokeRect(26,26,201,101);


context.beginPath();
context.lineWidth = 5;
context.moveTo(200,200);
context.lineTo(225,225);
context.lineTo(200,250);
context.lineTo(175,225);
context.closePath();
context.stroke();


context.beginPath();
context.arc(300,300,50,0,Math.PI *2);
context.fillStyle = 'green';
context.fill();

context.stroke();


}());