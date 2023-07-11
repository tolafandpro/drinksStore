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


module.exports = {getAllUsers};