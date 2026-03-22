import express from 'express';
import auth from './authenticatier.js';
import { ObjectId } from 'mongodb';
import Joi from 'joi'
const postSchema = Joi.object({
  title: Joi.string()
    .alphanum()
    .min(3)
    .max(100)
    .required(),

  body: Joi.string()
    .alphanum()
    .min(3)
    .max(1000)
    .required()
});


const router = express.Router();

router.use(async (req, res, next) => {
  try {
    req.posts = await req.db.collection('posts');

    next();
  } catch (e) {
    next(e);
  }
});

router.route('/')
  .get(async (req, res, next) => {
    const posts = await req.posts.find()/*.sort({date: 1}).skip(2).limit(2)*/.toArray()
    res.send(posts);
  })
  .post(auth,async (req, res, next) => {
    try {
      req.body.date = new Date();
      req.body.author =  req.session.userName;
      await req.posts.insertOne(req.body);

      req.io.emit('post', req.body);

      res.status(201)
        //.location(`/posts/${req.body.id})
        .send(req.body);
    } catch (e) {
      next(e);
    }
  });
  router.post('/:id/comments',auth,async(req,res,next)=>{
    try{
      const comment = {
      text: req.body.text,
      date: new Date(),
      author: req.session.userName
    };
   
    
     await req.posts.updateOne({_id: new ObjectId(req.params.id)},{$push: {
      comments:comment
    }})
    req.io.emit('comment',{
      postId: req.params.id,
      comment
    });

    res.status(201)
    .send(comment);
    }catch(e){
      next(e)
    }
  })

  export default router;