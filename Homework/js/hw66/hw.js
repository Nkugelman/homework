(function () {
    'use strict';
    let timesClicked = 1;
    const buttonsDiv = document.getElementById('buttonsDiv');
        function handleButtonClick() {
        const newButton = document.createElement('button');
        newButton.innerText = ++timesClicked;
        // document.body.appendChild(newButton);
        buttonsDiv.appendChild(newButton);

       // newButton.addEventListener('click', handleButtonClick);
    //    theButton.removeEventListener('click', handleButtonClick);
    }

   // const theButton = document.getElementById('theButton');
   // theButton.addEventListener('click', handleButtonClick);


    buttonsDiv.addEventListener('click', function () {
            handleButtonClick();
        });
}());

