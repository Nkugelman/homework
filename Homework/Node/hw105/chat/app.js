import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {

    let username = "Guest";

   
    socket.on('join', name => {
        username = name;

        io.emit('msg', `${username} joined the chat`);
    });

   
    socket.on('msg', msg => {
        io.emit('msg', `${username} said - ${msg}`);
    });

    
    socket.on('disconnect', () => {
        io.emit('msg', `${username} left the chat`);
    });

});

server.listen(3000)