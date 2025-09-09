/* eslint-disable no-cond-assign */
(function () {
    'use strict';
   // const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
   // let index = 0;
    let interval;
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
   
    const colors = [];  

    function start() {
     
        interval = setInterval(() => {
            document.body.style.color = pickRandomColor();
            document.body.style.backgroundColor = pickRandomColor();
            addColorsToTable();
            // if (index === colors.length) index = 0;
            //  document.body.style.backgroundColor = pickRandomColor();
            // eslint-disable-next-line no-cond-assign
          
          //  document.body.style.color = `rgb(${r},${g},${b})`;
//document.body.style.backgroundColor =`rgb(${b},${g},${r})`;
           
        }, 1000);
    }
    function stop() {
        clearInterval(interval);
        interval = null;
    }
    function addColorsToTable() {
        const colorTable = document.querySelector('#colorTable tbody');
        const row = colorTable.insertRow();
        const colorCell = row.insertCell();
        const bgColorCell = row.insertCell();
        const timeCell = row.insertCell();

        colorCell.textContent = document.body.style.color;
        bgColorCell.textContent = document.body.style.backgroundColor;
        timeCell.textContent = new Date().toLocaleTimeString();

        colors.push({
            color: document.body.style.color,
            backgroundColor: document.body.style.backgroundColor,
            time: new Date().toLocaleTimeString()
        });
    }
    function getColorPart() {
        return Math.floor(Math.random() * 256);
    }
    function pickRandomColor() {
        const r= getColorPart();
        const g= getColorPart();
        const b= getColorPart();
        return `rgb(${r},${g},${b})`;
    }
    startButton.addEventListener('click', function () {
        if (!interval) {
            start();
        }
        else {
            stop();

        }
    });
    stopButton.addEventListener('click', function () {
            stop();
    });

}());
