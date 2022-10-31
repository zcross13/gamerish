const Comment = require('../models/comment.js')


const commentDataController = {
    // Delete 
    delete(req, res, next) {
        Comment.findByIdAndDelete(req.params.id, (err, deletedGame) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.comment = deletedGame
                next()
            }
        })
    },
    // Update
    update(req, res, next) {
        Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGame) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.comment = updatedGame
                next()
            }
        })
    },
    //Create
    create(req, res, next) {
        Comment.create(req.body, (err, createdComment) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.comment = createdComment
                next()
            }
        })
    },
    //Show 
    grabComment(req, res, next) {
        Comment.findById(req.params.id, (err, foundComment) =>{
            if(err){
                res.status(404).send({
                    msg:err.message
                })
            } else {
                res.locals.data.comment= foundComment
                next()
            }
        })
    }
}

module.exports = commentDataController