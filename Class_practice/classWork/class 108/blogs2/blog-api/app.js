import express from 'express';
import http from 'http';
import {MongoClient} from 'mongodb';
import cors from 'cors';
import {Server} from 'socket.io';
import Posts from './routes/posts.js';
import Authentication from './routes/authentication.js';
import session from 'express-session';

const app = express();
const server = http.createServer(app);

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
 
}));
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173'
   
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);


app.use(async (req, res, next) => {
 
  try {
    req.db = await client.db('blog');

    
    req.io = io;

    next();
  } catch (e) {
    next(e);
  }
});



app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

/*app.route('/posts')

.get( async (req, res, next) => {
  const posts = await req.posts.find()/*.sort({date: 1}).skip(2).limit(2)*.toArray()
  res.send(posts);
})

.post( async (req, res, next) => {
  try {
    req.body.date = new Date();
    req.body.author = 'kugel';
    await req.posts.insertOne(req.body);
     io.emit('post',req.body);
    res.status(201).send(req.body);
    
  } catch (e) {
    next(e);
  }
});*/
app.use('/',Authentication)
app.use('/posts',Posts);
app.use(function (req, res, next) {
  const error = new Error('404. Not found');
  error.statusCode = 404;
  next(error);
});

app.use(function (err, req, res, next) {
  res.statusCode = err.statusCode || 500;
  res.end(err.message);
});
io.on('connection', (socket) => {
  console.log('a user connected');
});
server.listen(8080);
