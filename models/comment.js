const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {
    username: {type: String, require: true}, 
    text: {type: String, require: true}, 
    gameId: {type: String, require:true}
}
)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment