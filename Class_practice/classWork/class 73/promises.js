(function() {
    'use strict';
    function doSomethingOne(n, successCallback, failureCallback) {
        setTimeout(() => {
           successCallbackallback(n + 1);
           failureCallback()

        }, 1000);
       
     }
     function doSomethingTwo(n, successCallback, failureCallback) {
        setTimeout(() => {
           successCallback(n + 1);
           failureCallback()
        }, 1000);
     doSomethingOne(1,r =>doSomethingTwo(r,console.log,console.error),console.error)
     }
     
    



}());