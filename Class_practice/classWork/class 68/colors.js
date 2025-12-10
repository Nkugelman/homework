(function () {
    'use strict';
    // const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    let index = 0;
    let interval;
    const startButton = document.getElementById('start');
    const colorTable = document.querySelector('#colorTable')
    function start() {
     
        interval = setInterval(() => {
            const color = pickRandomColor();
            const bgColor = pickRandomColor();

            document.body.style.color = color;
            document.body.style.backgroundColor = bgColor;

            const row = colorTable.insertRow();
            row.innerHTML = `
                <td>${new Date().toLocaleString()}</td>
                <td>${color}</td>
                <td>${bgColor}</td>
               
            `;
            row.style.color = color;
            row.style.backgroundColor = bgColor;
            row.addEventListener('click', () => {
                stop();
                document.body.style.color = color;
                 document.body.style.backgroundColor = bgColor;

            })
        }, 1000);
    }



    function setColors(color, bgColor) {
    
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
        
        startButton.addEventListener('click', function () {
            if (!interval) {
                start();
            }
            else {
                stop();

            }
        });
    
    
}());
