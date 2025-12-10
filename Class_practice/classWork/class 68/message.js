
const myMsg =(function () {
    
    'use strict';
    let height = 240;

    let TopOffset = -height / 2;
    let width = 240;
    let leftOffset = -width / 2
    let topZindex = 0;
    const modalDiv = document.createElement('div');
    document.body.appendChild(modalDiv);
    modalDiv.style.position = 'absolute';
    modalDiv.style.width = '100%';
    modalDiv.style.height = '100%';
    modalDiv.style.top = '0';
    modalDiv.style.left = '0';
    modalDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modalDiv.style.opacity = '.5';
    modalDiv.style.display = 'none';
   // modalDiv.style.zIndex = '1';

    return function (msg ,modal) {
        // console.log(msg);
         
        const div = document.createElement('div');
       // div.innerText = msg;
   
        div.style.backgroundColor = 'lightblue';
        div.style.border = '1px solid black';
        div.style.padding = '1em';
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        //div.style.display = 'none';
   

        div.style.position = 'absolute';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.marginTop = `${TopOffset}px`;
        div.style.marginLeft =`${leftOffset}px`;
        div.style.boxSizing = 'border-box';

        const msgDiv = document.createElement('div');
        msgDiv.innerText = msg;
        msgDiv.style.overflow = 'auto';
        msgDiv.style.height = '5em';

        const buttonDiv = document.createElement('div');
        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '1em';
        buttonDiv.style.width = '100%';
        buttonDiv.style.textAlign = 'center';
        buttonDiv.style.left = '0';
    


        const ok = document.createElement('button');
        ok.innerText = 'OK';
        ok.style.position = 'absolute';

        ok.addEventListener('click', () => {
            // div.style.display = 'none';
            document.body.removeChild(div);
            if (modal) {
                modalDiv.style.display = 'none';
            }
        })
        buttonDiv.appendChild(ok);
        div.appendChild(msgDiv);
        div.appendChild(buttonDiv);
        document.body.appendChild(div);
        TopOffset += 20;
        leftOffset += 20;
        if (TopOffset + height + (window.innerHeight / 2) > window.innerHeight) {
            TopOffset -= window.innerHeight - innerHeight;
        }
        if (leftOffset + width + (window.innerWidth / 2) > window.innerWidth) {
            leftOffset -= window.innerWidth - innerWidth;
        }
        if (modal) {
            modalDiv.style.display = 'block';
          modalDiv.style.zIndex = ++topZindex;
            div.style.zIndex = ++topZindex;
        

            div.style.marginTop = `${-height / 2}px`;
            div.style.marginLeft = `${-width / 2}px`;
        }

        div.addEventListener('click', () => {
            div.style.zIndex = ++topZindex;
        });
    };
}());