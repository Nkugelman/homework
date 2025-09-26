const app = (function(){
    'use strict';
   
        let count = 0;
        function increment(){
            count++;
            console.log(count);
        }
        function decrement(){
            count--;
            console.log(count);
        }
        function getCount(){
            return count;
        }
        return{
        counter: {
            increment,
            decrement,
            getCount
        }
    };
    

  
})()