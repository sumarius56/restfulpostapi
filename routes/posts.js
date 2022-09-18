const express = require("express");
const router = express.Router();
const Post = require("../models/Post");


//Gets back all the posts
router.get("/",  async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({message : error})
  }
});

//Creates a post
router.post("/", async (req, res) => {
  const post =  new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
    console.log('Posted saved in the DB')
  } catch (error) {
    res.json({message: error})
  }
    
});

//Specific Post
router.get('/:postId', async (req, res) => {
    try {
       const post = await Post.findById(req.params.postId)
       res.json(post)
    
   } catch (error) {
     res.json({message: error})
   }
})

//Delete a specific post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({_id:req.params.postId})
        res.json(removedPost)
        console.log('Deleted a post')
    } catch (error) {
        res.json({message: error})
    }
})


//Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id:req.params.postId},{
            $set : {title: req.body.title, description: req.body.description}
        })
        res.json(updatedPost)
        console.log('Updated a post')
    } catch (error) {
        res.json({message: error})
    }
})


module.exports = router;
