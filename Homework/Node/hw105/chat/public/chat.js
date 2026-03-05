//console.log('js works');
console.log("SERVER FILE LOADED");
const socketIo = io();

const loginDiv = document.querySelector('#login');
const chatDiv = document.querySelector('#chat');
const nameInput = document.querySelector('#nameInput');
const joinBtn = document.querySelector('#joinBtn');

const msgInput = document.querySelector('#msgInput');
const form = document.querySelector('#messageForm');
const messages = document.querySelector('#messages');


let username = "";

// join chat
joinBtn.addEventListener('click', () => {
    username = nameInput.value;

    socketIo.emit('join', username);

    loginDiv.style.display = "none";
    chatDiv.style.display = "block";
});

// receive messages
socketIo.on('msg', msg => {
    messages.innerHTML += `<div>${msg}</div>`;
});

// send message
form.addEventListener('submit', e => {
    e.preventDefault();

    socketIo.emit('msg', msgInput.value);

    msgInput.value = "";
});