(function () {
    'use strict';
    // const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    let index = 0;
    let interval;
    const startButton = document.getElementById('start');
    const colors = [];
    function start() {
        let r = 0;
        let g = 0;
        let b = 0;
        interval = setInterval(() => {
            // document.body.style.color = pickRandomColor();

            // document.body.style.backgroundColor = colors[index++];
            // if (index === colors.length) index = 0;
            //  document.body.style.backgroundColor = pickRandomColor();
            // eslint-disable-next-line no-cond-assign
            pickRandomColor();
        }
            , 1000);
        // eslint-disable-next-line no-cond-assign
                                                                       
        document.body.style.color = `rgb(${r},${g},${b})`;
        document.body.style.backgroundColor = `rgb(${b},${g},${r})`;
           
    
    }
        function stop() {
            clearInterval(interval);
            interval = null;
        }
        function getColorPart() {
            return Math.floor(Math.random() * 256);
        }
        function pickRandomColor() {
            const r = getColorPart();
            const g = getColorPart();
            const b = getColorPart();
            return `rgb(${r},${g},${b})`;
        }
        function addColorsToTable() {
        
        }
        startButton.addEventListener('click', function () {
            if (!interval) {
                start();
            }
            else {
                stop();

            }
        });
    
    
}());
