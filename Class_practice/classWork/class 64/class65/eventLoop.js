(function () {
    'use strict';
    const theButton = document.querySelector('#theButton');
    theButton.className = 'button'


    function moveButton() {
       
            let top = parseInt(getComputedStyle(theButton).top) + 1;
            theButton.style.top = `${top}px`;
        //setTimeout(moveButton, 1000);
    }
   
    // setTimeout(moveButton, 1000);
    //setInterval(moveButton, 1000);
    const moveButon = document.querySelector('#moveButton');
    let theInterval;
    //let running = false;
    moveButon.addEventListener('click', () => {

        if (!theInterval) {
           // running = true;
            theInterval = setInterval(moveButton, 500);
            console.log(theInterval);
            moveButon.textContent = 'Stop Moving';
        }
        else {
           
            clearInterval(theInterval);
            theInterval = null;
           moveButon.textContent = 'Start Moving';
        }

        /* setTimeout(() => {
             clearInterval(theInterval);
         }, 5000);;*/
     })
    

}());