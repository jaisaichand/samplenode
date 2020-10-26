const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    content: String,
    likesCnt: Number,
})

module.exports = mongoose.model('Postmodel', postSchema)