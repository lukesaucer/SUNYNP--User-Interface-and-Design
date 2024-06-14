// 1. Import mongoose
const mongoose = require('mongoose');

//2. Create the schema
const groupSchema = new mongoose.Schema({
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 1
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

//3. Create the model
const Group = mongoose.model('Group', groupSchema);

//4. Create CRUD functions
// CREATE a post
async function createGroup(groupId, name, description) {
    const group = await Group.findOne({"groupId": groupId, "name": name});
    if(group) throw Error('Group already exists');

    const newGroup = await Group.create({
        groupId: groupId,
        name: name,
        description: description
    });

    return newGroup;
}

// READ a post
async function viewGroup(groupId, name) {
    const group = await Group.findOne({"groupId": groupId, "name": name});
    if(!group) throw Error('Group not found');
    return group;
}

// UPDATE a post
async function updateGroup(groupId, name, description) {
    const group = await Group.findByIdAndUpdate(groupId, {$set: {"name": name, "description": description}}, {new: true});
    if(!group) throw Error('group not found');
    return group;
}

// DELETE a post
async function deleteGroup(groupId) {
    const group = await Group.findByIdAndDelete(groupId);
    if(!group) throw Error('Group not found');
    return 'Group deleted';
}

//5. Export the model
module.exports = {
    createGroup,
    viewGroup,
    updateGroup,
    deleteGroup
};