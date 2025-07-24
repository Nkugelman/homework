'use strict';
function farenheitToCel() {
    let far; 
    while (true) {
        far = parseFloat(prompt("please enter the farenheit"));
        if (isNaN(far)) {
            alert("please enter a valid number");
           
        }
        else {
            break;
        }
    }
        let cel = (far - 32) * 5 / 9;
        alert(`the celcius is ${cel}`);
    
}
function CelToFar() {
    let cel;
    while(true){
   cel = parseFloat(prompt("please enter the celcius"));
        if (isNaN(cel)) {
            alert("please enter a valid number")
        }
        else {
            break;
        }
    }
    let far = (cel/5) * 9  +32;
    alert(`the farenheit is ${far}`);
    
}
farenheitToCel();
farenheitToCel();
CelToFar();


function multiply(x, y) {
    let ans = x * y;
    return ans;
    
}
console.log( multiply(5, 6));

console.log(multiply(23, 4));

function getMultiplier() {
    return function multiply(x, y) {
        let ans = x * y;
        return ans;
        
    };
    
}
var multiplier = getMultiplier()
console.log(multiplier(4, 5));
console.log( multiplier(3, 5));




function getMultiplier2(num1) {
    return function multiply(num2) {
        let ans = num1 *num2
        return ans;
        
    };
    
}
var multiplyByFive = getMultiplier2(5);
console.log(multiplyByFive(2));

var multiplyBysix = getMultiplier2(6);
console.log( multiplyBysix(2));
