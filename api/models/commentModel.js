const mongoose = require('mongoose');

const commentModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    commentData: String,

})

module.exports = mongoose.model('commentModel', commentModel)