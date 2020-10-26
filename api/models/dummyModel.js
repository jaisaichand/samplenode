const mongoose = require('mongoose');

const dummyModel = mongoose.Schema({
    data: String,
    _id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('dummyModel', dummyModel);