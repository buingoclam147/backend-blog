const mongoose = require('mongoose');

const User = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 1,
        trim: true
    },
    userName: {
        type: String,
        require: true,
        minlength: 6,
        trim: true
    },
    password: {
        type: String,
        require: true,
        minlength: 8,
        trim: true
    },
    avatar: {
        type: String,
        minlength: 1,
    },
    phoneNumber: {
        type: String,
        minlength: 10,
        trim: true
    },
    sex: {
        type: Boolean,
        trim: true
    },
    dateOfBirth: {
        type: Number,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    role:{
        type: String,
        trim: true
    },
    note: {
        type: String,
    }

})
module.exports = mongoose.model('User', User);