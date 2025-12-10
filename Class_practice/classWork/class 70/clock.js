/*window.pcsClock =function(parent){
'use strict';
parent = parent || document.body;
const clockDiv = document.createElement('div');


clockDiv.style.backgroundColor='black';
clockDiv.style.color='red';
clockDiv.style.display='inline-block';
clockDiv.style.padding='1em';
clockDiv.style.fontSize='2em';
clockDiv.style.fontWeight='bold';
clockDiv.style.fontFamily='monospace';
parent.appendChild(clockDiv);
function updateClock(){
    clockDiv.innerText=new Date().toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();
};*/
window.pcsClock =function(parent){
'use strict';
parent = parent || document.body;

const clockDiv = $('<div></div>');
clockDiv.addClass('clock');


$(parent).append(clockDiv);
function updateClock(){
    clockDiv.text(new Date().toLocaleTimeString());
}

setInterval(updateClock,1000);
updateClock();
}
