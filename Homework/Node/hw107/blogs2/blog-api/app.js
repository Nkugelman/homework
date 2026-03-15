import express from "express";
import http from "http";
import { MongoClient } from "mongodb";
import cors from "cors";


const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(async(req, res, next) => {
  try {
 const uri ='mongodb://localhost:27017';
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('blog');

 req.posts = db.collection('posts');
  
  next();
}
catch (err) {  next(err);
}
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
  });
  app.get("/", (req, res) => {
  res.send("Server working");
});
app.get("/posts", async(req, res,next) => {
  const posts = await req.posts.find().toArray();
  res.send(posts);
});
app.post("/posts", async(req, res,next) => {
  try {

 const result = await req.posts.insertOne(req.body);

    res.json(result);
  }catch (err) {
    next(err);
  }
});
app.use(function (req, res, next) {
  const error = new Error("Not Found");
  error.statusCode = 404;
  
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  
 res.statusCode = err.statusCode || 500;
 res.end(err.message);

 
}); 
app.listen(3000);