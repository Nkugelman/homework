function hide(element) {
  
    element.style.display = 'none';
    console.log("hiddden");
    
}
function show(element) {
  
    element.style.display = 'inline';
    console.log("unhiddden");
    
}
function sparkle(element, interval, time ) {
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        element.style.color =  pickRandomColor();
            
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
        