(function () {
    'use strict';
    let timesClicked = 1;
   
    const divButton = document.querySelector('#buttons')
   

    divButton.addEventListener('click', () => {
        timesClicked++;
        const newButton = document.createElement('button');
        newButton.textContent = `Button ${timesClicked}`;
        divButton.appendChild(newButton);
       // theButton.textContent = timesClicked;
    });

}());

