// 1. Import mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//2. Create the schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    followers: [String],
    following: [String]
})

//3. Create the model
const User = mongoose.model('User', userSchema);

//4. Create CRUD functions
// CREATE a user
async function register(username, password) {
    const user = getUser(username);
    if(user) throw Error('User already exists');

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        username: username,
        password: hashed
    });

    return newUser._doc;
}

// READ a user
    async function login(username, password) {
        const user = await getUser(username);
        if(!user) throw Error('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw Error('Invalid Password');

        if(user.password !== password) throw Error('Invalid Password');

        return user._doc;
    }

// UPDATE a user
    async function updatePassword(id, password) {
        const user = await User.updateOne({"_id": id}, {$set: {"password": password}});
        return user;
    }

    // DELETE a user
    async function deleteUser(id) {
        await User.deleteOne({"_id": id});
    }
// Utility functions
    async function getUser(username) {
        return await User.findOne({ "username": username });
    }

//5. Export the model
module.exports = {
    register,
    login,
    updatePassword,
    deleteUser
};