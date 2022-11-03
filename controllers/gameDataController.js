const Game = require('../models/game.js')
const Comment = require('../models/comment.js')

const gameDataController = {
  // Index
  index (req, res, next) {
    Game.find({}, (err, allGames) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.games = allGames
        next()
      }
    })
  },
  // Delete
  delete (req, res, next) {
    Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.game = deletedGame
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Game.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGame) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.game = updatedGame
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    Game.create(req.body, (err, createdGame) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.game = createdGame
        next()
      }
    })
  },
  // Show
  grabGame (req, res, next) {
    Game.findById(req.params.id, (err, foundGame) => {
      Comment.find({ gameId: req.params.id }, (err, listComments) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
            output: 'Could not find comment'
          })
        } else {
          res.locals.data.game = {
            game: foundGame,
            comments: listComments
          }
          next()
        }
      })
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find game with that ID'
        })
      }
    })
  }
}

module.exports = gameDataController
