var express = require('express');
var router = express.Router();
const Post = require('../models/postMod')

router.get('/',async(req,res)=>{
    try{
        const data = await Post.find({});
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.put('/',async(req,res)=>{
    try{
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.put('/:id/comment',async(req,res)=>{
    try{
        const newComment = req.body;
        const post = await Post.findById(req.params.id);
        await post.updateOne({$push: {comments: newComment}});
        res.status(200).json(newComment);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id/upvote", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.downvotes.includes(req.body.userId)) {
        await post.updateOne({ $pop: { downvotes: req.body.userId } });
      } 

      await post.updateOne({ $push: { upvotes: req.body.userId } });

      res.status(200).json("The post has been upvoted");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put("/:id/downvote", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.upvotes.includes(req.body.userId)) {
        await post.updateOne({ $pop: { upvotes: req.body.userId } });
      }
      await post.updateOne({ $push: { downvotes: req.body.userId } });
      res.status(200).json("The post has been downvoted");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;