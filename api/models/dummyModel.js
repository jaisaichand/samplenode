const mongoose = require('mongoose');

const dummyModel = mongoose.Schema({
    data: String,
    _id: mongoose.Schema.Types.ObjectId,
    image: String
})

module.exports = mongoose.model('dummyModel', dummyModel);