'use strict';

const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i] * 2);
    
}
    

function doubleArray(numbers) {
    for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i] * 2);
    
}
}
doubleArray(numbers);

function ourForEach(array, callback) {
    for (let i = 0; i < numbers.length; i++) {
       callback(array[i])
    }
}
function printIt(it) {
    console.log('--->',it);
    
}
ourForEach(numbers, printIt);
ourForEach(numbers, function (x) { console.log(x * 10) });


function ourFilter(array, testCallback) {
    const results = []

    for (let i = 0; i < numbers.length; i++) {
        if (testCallback(array[i])){
            results.push(array[i]);
        }

    }
    return results;
}
console.log(ourFilter(numbers, isOdd));

function isOdd(x) {
    return x % 2;
}






