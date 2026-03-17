import express from 'express';

const router = express.Router();
router.use(async (req, res, next) => {
  try {
    req.posts =  req.db.collection('posts');

    next();
  } catch (e) {
    next(e);
  }
});
router.route('/')
.get( async (req, res, next) => {
  const posts = await req.posts.find()/*.sort({date: 1}).skip(2).limit(2)*/.toArray()
  res.send(posts);
})
.post( requireAuth,async (req, res, next) => {
  try {
    req.body.date = new Date();
    req.body.author = req.session.userName;
    await req.posts.insertOne(req.body);
     req.io.emit('post',req.body);
    res.status(201).send(req.body);
    
  } catch (e) {
    next(e);
  }
});
function requireAuth(req, res, next) {
  if (!req.session.userName) {
    return res.status(401).send('Not logged in');
  }
  next();
}

export default router;