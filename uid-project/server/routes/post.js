// 1. Import any needed libraries
const express = require('express');
const router = express.Router();
const { createPost } = require('../models/post');
const { viewPost } = require('../models/post');
const { deletePost } = require('../models/post');
const { updatePost } = require('../models/post');

// 2. Define the routes
router
    .post('/create', async (req, res) => {
        try {
            const newPost = await createPost(req.body.userId, req.body.title, req.body.postContent);
            res.send(newPost);
        } catch(error) {
            res.status(400).send({message: error.message});
        }
    })
    .get('/:title', async (req, res) => {
        try {
            const post = await viewPost(req.params.title);
            res.send(post);
        } catch(error) {
            res.status(404).send({message: error.message});
        }
    })
    .put('/:postId', async (req, res) => {
        try {
            const post = await updatePost(req.params.postId, req.body.title, req.body.postContent);
            res.send(post);
        } catch(error) {
            res.status(404).send({message: error.message});
        }
    })
    .delete('/:postId', async (req, res) => {
        try {
            const message = await deletePost(req.params.postId);
            res.send({message: message});
        } catch(error) {
            res.status(404).send({message: error.message});
        }
    });

// 3. Export the router
module.exports = router;