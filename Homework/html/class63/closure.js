'use strict';




function getBetterMultiplier(x) {
    return function multiply( y) {
        return x * y;
    }
}


const multiplyByFive = getBetterMultiplier(5);
console.log(multiplyByFive(10));

function mult(x, y) {
    return x * y;
}