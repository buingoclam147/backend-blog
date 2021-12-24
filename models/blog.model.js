const mongoose = require('mongoose');

const Blog = new mongoose.Schema({
    categoryId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1
    },
    userId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1
    },
    title: {
        type: String,
        minlength: 1,
        require: true,
    },
    nikname: {
        type: String,
        minlength: 1,
        require: true,
    },
    content: {
        type: String,
        require: true
    },
    createAt: {
        type: Number,
        minlength: 1,
        require: true,
    },
    view:{
        type: Number
    },
    backgroundBlog:{
        type: String,
    },
    status: {
        type: String,
    }

})
module.exports = mongoose.model('Blog', Blog);