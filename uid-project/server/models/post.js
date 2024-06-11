// 1. Import mongoose
const mongoose = require('mongoose');

//2. Create the schema
const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    postContent: {
        type: String,
        required: true,
        minlength: 1
    }
});


//3. Create the model
const Post = mongoose.model('Post', postSchema);

//4. Create CRUD functions
// CREATE a post
async function createPost(userId, title, postContent) {
    const post = await getPost(userId, title);
    if(post) throw Error('Post already exists');

    const newPost = await Post.create({
        userId: userId,
        title: title,
        postContent: postContent
    });

    return newPost;
}

// READ a post
async function viewPost(title) {
    const post = await Post.findOne({"title": title});
    if(!post) throw Error('Post not found');
    return post;
}

// UPDATE a post
async function updatePost(postId, title, postContent) {
    const post = await Post.findByIdAndUpdate(postId, {$set: {"title": title, "postContent": postContent}}, {new: true});
    if(!post) throw Error('Post not found');
    return post;
}

// DELETE a post
async function deletePost(postId) {
    const post = await Post.findByIdAndDelete(postId);
    if(!post) throw Error('Post not found');
    return 'Post deleted';
}
// Utility functions
async function getPost(userId, title, postContent) {
    return await Post.findOne({"userId": userId, "title": title });
}

//5. Export the model
module.exports = {
    createPost,
    viewPost,
    updatePost,
    deletePost
};