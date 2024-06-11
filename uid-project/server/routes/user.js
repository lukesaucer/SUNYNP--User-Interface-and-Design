// 1. Import any needed libraries
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// 2. Define the routes
router
    .post('/login', async(req, res) => {
   try {
    const user = await User.login(req.body.username, req.body.password);
    res.send({...user, password: undefined});
   } catch(error) {
       res.status(401).send({message: error.message});
   }
})
    .post('/register', async(req, res) => {
        try {
            const user = await User.register(req.body.username, req.body.password);
            res.send({...user, password: undefined});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/update', async (req, res) => {
        try {
            const user = await User.updatePassword(req.body.id, req.body.password);
            res.send({...user, password: undefined});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await User.deleteUser(req.body.id);
            res.send({success: "Account deleted"});
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })


// 3. Export the router
module.exports = router;