const User = require("../models/userModule");

// Find all users 
const getAllUsers = async (req, res) => {
    try {
        const getAllUser = await User.find(req.body.firstname)
        res.json(getAllUser).status(200);   
    } catch (error) {
        res.status(400).json("Unenable to find users")
    }
};

// Find a user 
const getSingleUsers = async (req, res) => {
    try {
        const getAllUser = await User.findById(req.body.id)
        res.json(getAllUser).status(200);   
    } catch (error) {
        res.status(400).json("Unenable to find users")
    }
};
// Update users Profile
const updateUsers = async (req, res) => {
    try {
        const getAllUser = await User.findByIdAndUpdate(req.body.id, {$set: req.body}, {new: true});
        res.json(getAllUser).status(200);   
    } catch (error) {
        res.status(400).json("Unenable to find users")
    }
};
// Delete all users 
const deleteUsers = async (req, res) => {
    try {
        const getAllUser = await User.findByIdAndDelete(req.body.id)
        res.json("User has been deleted").status(200);   
    } catch (error) {
        res.status(400).json("Unenable to find users")
    }
};


module.exports = {getAllUsers, updateUsers, deleteUsers};