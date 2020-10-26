const mongoose = require('mongoose');

const subcommentschema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subcommentdata: String,

});

module.exports = mongoose.model('subcommentsmodel', subcommentschema);