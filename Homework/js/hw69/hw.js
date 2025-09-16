// eslint-disable-next-line no-unused-vars
 window.helper = function (id) {

    const element = document.getElementById(id);
    function hide() {

        element.style.display = 'none';
        console.log("hiddden");
    
    }
    function show() {
  
        element.style.display = 'inline';
        console.log("unhiddden");
    
    }
    function sparkle(interval, time) {
        let count = 0;
        const intervalId = setInterval(() => {
            count++;
            element.style.color = pickRandomColor();
            
            if (count >= interval) {
                clearInterval(intervalId);
            }
        }, time);

   
    
    }
    function pickRandomColor() {
        const r = getColorPart();
        const g = getColorPart();
        const b = getColorPart();
        return `rgb(${r},${g},${b})`;
    }
    function getColorPart() {
        return Math.floor(Math.random() * 256);
    }
    return {
        hide,
        show,
        sparkle
    };

}

