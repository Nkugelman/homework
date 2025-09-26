const app2 = (function() {
    'use strict';
    let counterTrack = 0;
   

    function createCounter() {
        let count = 0;
        counterTrack++;
        console.log(`Counter instance: ${counterTrack}`);
        function increment() {
            count++;
            console.log(count);
        }
        function decrement() {
            count--;
            console.log(count);
        }
        function getCount() {
            return count;
        }
        return {
            increment,
            decrement,
            getCount
        };
    };

    return {
        createCounter
    };
})();