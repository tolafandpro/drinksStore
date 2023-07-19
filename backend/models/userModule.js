const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        uniqe: true,
        min: 3
    },
    mobile: {
        type: Number,
        required: true,
        uniqe: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{timestamp: true}
);

userSchema.pre("save", async (next) => {
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
} )

module.exports = mongoose.model('User', userSchema);

// module.exports = User;