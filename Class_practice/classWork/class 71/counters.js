//const a = counter();
for(let i =0; i<10; i++){
window.app.counter.increment();
}
const counterA = window.app.createCounter();
const counterB = window.app.createCounter();
for(let i =0; i<5; i++){
    counterA.increment();
}
for(let i =0; i<15; i++){
    counterB.increment();
}
console.log(window.app.counter.getValue(), counterA.getValue(), counterB.getValue());

