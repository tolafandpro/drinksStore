const User = require("../models/userModule");
const bcrypt = require("bcrypt");
const createError = require("../utils/error");


const registerUser = async (req, res, next) => {
    const findUser = await User.findOne({email: req.body.email});
    if(findUser) {
        res.status(401).send("email has been registerd");
    }
    try { 
            const newUser = new User({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                mobile:req.body.mobile,
                password:req.body.password,
            });
            await newUser.save();
            res.status(201).json("User has been created");
    } catch (error) {
        next(error)
    }
};

const loginUser = async (req, res) => {
    try {
        const userlog = await User.find({email: req.body.email});
        res.send(userlog).status(200);    
    } catch (error) {
        res.status(500).send("Can't find email");
    }
}


module.exports = {registerUser, loginUser};
// module.exports = loginUser;
