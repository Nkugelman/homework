import express from 'express';
import http from 'http';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { Server } from 'socket.io';
import Posts from './routes/posts.js';
import Authentication from './routes/authentication.js';
import session from 'express-session';

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    credentials: true
  }
});

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

await client.connect(); // ✅ connect once

// ✅ CORS first
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'foo',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  }
}));

// ✅ attach db + io
app.use((req, res, next) => {
  req.db = client.db('blog');
  req.io = io;
  next();
});

app.use('/', Authentication);
app.use('/posts', Posts);

app.use((req, res, next) => {
  const error = new Error('404. Not found');
  error.statusCode = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
});

io.on('connection', (socket) => {
  console.log('socket io connection');
});

httpServer.listen(8080, () => {
  console.log('Server running on port 8080');
});