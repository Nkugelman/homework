 
 window.app = window.app || {};

window.app.counters = function (){
     let numCounter = 0;
     return {
        createCounter: function() {
    numCounter++;
    console.log(`Counter instance: ${numCounter}`);
    let i =0;
    return {
        increment: () => ++i,
        decrement: () => --i,
        getValue: () => i
    };
}
     };
}();
