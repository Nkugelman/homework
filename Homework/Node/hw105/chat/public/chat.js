console.log('js works');

const socketIo = io();

const loginDiv = document.querySelector('#login');
const chatDiv = document.querySelector('#chat');
const nameInput = document.querySelector('#nameInput');
const joinBtn = document.querySelector('#joinBtn');

const msgInput = document.querySelector('#msgInput');
const form = document.querySelector('#messageForm');
const messages = document.querySelector('#messages');
const disconnectDiv =document.querySelector('#disconnectDiv')


let username = "";


joinBtn.addEventListener('click', () => {
    username = nameInput.value;
     if(!username){
        alert("Enter a username");
        return;
    }

    socketIo.emit('join', username);

    loginDiv.style.display = "none";
    chatDiv.style.display = "block";
    disconnectDiv.style.display = "block"
});


socketIo.on('msg', msg => {
    messages.innerHTML += `<div>${msg}</div>`;
});


form.addEventListener('submit', e => {
    e.preventDefault();

      const msg = msgInput.value.trim();

    if(!msg) return;

    socketIo.emit('msg', msgInput.value);

    msgInput.value = "";
});
disconnectBtn.addEventListener('click', () => {
    socketIo.disconnect();
    location.reload();
});