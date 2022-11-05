const Comment = require('../models/comment.js')

const commentDataController = {
  // Delete
  delete (req, res, next) {
    Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = deletedComment
        res.redirect(`/games/${deletedComment.gameId}`)
      }
    })
  },
  // Update
  update (req, res, next) {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = {
          comment: updatedComment
        }
        res.redirect(`/games/${updatedComment.gameId}`)
        // next()
      }
    })
  },
  // Create
  create (req, res, next) {
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
  // Show
  grabComment (req, res, next) {
    Comment.findById(req.params.id, (err, foundComment) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = foundComment
        next()
      }
    })
  }
}

module.exports = commentDataController
