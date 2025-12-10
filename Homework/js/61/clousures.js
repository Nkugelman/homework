'use strict';


function greet(name) {
    console.log(`hello ${name}`);
    
}
greet(name);
const greeter =function(name) {
    console.log(`hello ${name}`);
    
}
greeter('jd');
function getGreeter() {
    return function (name) {
        console.log(`hi ${name}`);
    }
    
}
let theGreeter = getGreeter();
theGreeter("tuli");
