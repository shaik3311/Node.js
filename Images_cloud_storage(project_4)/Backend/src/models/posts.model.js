const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : String,
    url : String
});

const postModel = mongoose.model('Posts',postSchema);

module.exports = postModel;