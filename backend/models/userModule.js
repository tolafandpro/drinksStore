const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema);

module.exports = User;