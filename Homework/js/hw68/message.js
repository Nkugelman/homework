const myMsg = (function () {
    'use strict';
    let height = 240;
    let width = 240;

    let TopOffset = -height / 2;
    let leftOffset = -width / 2;
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

    return function (msg, modal, userOptions = [], userCallback) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'lightblue';
        div.style.border = '1px solid black';
        div.style.padding = '1em';
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.position = 'absolute';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.marginTop = `${TopOffset}px`;
        div.style.marginLeft = `${leftOffset}px`;
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

        
        if (!userOptions || userOptions.length === 0) {
            const ok = document.createElement('button');
            ok.innerText = 'OK';
            ok.addEventListener('click', () => {
                document.body.removeChild(div);
                if (modal) modalDiv.style.display = 'none';
                if (userCallback) userCallback({ text: 'OK' });
            });
            buttonDiv.appendChild(ok);
        } else {
            userOptions.forEach(button => {
                const userButton = document.createElement('button');
                userButton.innerText = button.text;
                buttonDiv.appendChild(userButton);

                userButton.addEventListener('click', () => {
                    document.body.removeChild(div);
                    if (modal) modalDiv.style.display = 'none';
                    if (userCallback) userCallback(button);
                });
            });
        }

     
        div.appendChild(msgDiv);
        div.appendChild(buttonDiv);
        document.body.appendChild(div);

      
        TopOffset += 20;
        leftOffset += 20;

        if (TopOffset + height + (window.innerHeight / 2) > window.innerHeight) {
            TopOffset = -height / 2;
        }
        if (leftOffset + width + (window.innerWidth / 2) > window.innerWidth) {
            leftOffset = -width / 2;
        }

       
        if (modal) {
            modalDiv.style.display = 'block';
            modalDiv.style.zIndex = ++topZindex;
        }
        div.style.zIndex = ++topZindex;

        div.addEventListener('click', () => {
            div.style.zIndex = ++topZindex;
        });
    };
}());
