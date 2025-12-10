(function () {
    
    'use strict';

    let clicks = 0;
    document.querySelector('#theButton').addEventListener('click', function () {
        clicks++; document.querySelector(
            '#theButton').textContent = ++clicks; console.log(
                'button was clicked');
        
    })

    document.querySelector('#theDiv').addEventListener('click', () => {
     console.log('div was clicked');
     
 })
}());




