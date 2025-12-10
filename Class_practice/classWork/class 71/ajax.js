(function(){
    'use strict';
    const request = new XMLHttpRequest();
    console.log(`after create ready state = ${request.readyState}`);
    
    request.open('GET' , 'counter1.js');
      console.log(`after create ready state = ${request.readyState}`);
    request.send();

console.log(request);
console.log(request.responseText);


}());