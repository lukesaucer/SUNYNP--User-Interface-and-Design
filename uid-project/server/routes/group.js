// 1. Import any needed libraries
const express = require('express');
const router = express.Router();
const { createGroup } = require('../models/group');
const { viewGroup } = require('../models/group');
const { deleteGroup } = require('../models/group');
const { updateGroup } = require('../models/group');

// 2. Define the routes
router
    .post('/create', async (req, res) => {
        try {
            const newGroup = await createGroup(req.body.groupId, req.body.name, req.body.description);
            res.send(newGroup);
        } catch(error) {
            res.status(400).send({message: error.message});
        }
    })
    .get('/:groupId/:name', async (req, res) => {
        try {
            const group = await viewGroup(req.params.groupId, req.params.name);
            res.send(group);
        } catch(error) {
            res.status(404).send({message: error.message});
        }
    })
    .put('/:groupId', async (req, res) => {
        try {
            const group = await updateGroup(req.params.groupId, req.body.name, req.body.description);
            res.send(group);
        } catch(error) {
            res.status(404).send({message: error.message});
        }
    })
    .delete('/:groupId', async (req, res) => {
        try {
            const message = await deleteGroup(req.params.groupId);
            res.send({message: message});
        } catch(error) {
            res.status(404).send({message: error.message});
        }
    });

// 3. Export the router
module.exports = router;