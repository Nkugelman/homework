'use strict';
const theButton = document.querySelector('#theButton');

const clickCount = document.querySelector('#clickCount');
let clicks = 0;
function handleClick() {
  clickCount.textContent =++clicks
    
}
theButton.addEventListener('click',handleClick)
function add(x, y) {
    return x + y;
}
console.log(add(1,2,3));

