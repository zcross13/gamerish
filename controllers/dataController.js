const { create } = require('connect-mongo')
const Game = require('../models/games')

const dataController = {
    // Index
    index(req,res,next){
        Game.find({}, (err, foundGames) => {
            if(err){
                res.status(400).send({
                    msg:err.message
                })
            } else {
                res.locals.data.games = foundGames
                next()
            }
        })
    }, 
    // Delete 
    delete(req,res,next){
        Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
            if(err){
                res.status(400).send({
                    msg:err.message
                })
            } else {
                res.locals.data.game = deletedGame
                next()
            }
        })
    },
    // Update
    update(req, res, next){
        Log.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGame) =>{
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.game = updatedGame
                next()
            }
        })
    },
    //Create
        create(req,res, next){
        Game.create(req.body, (err, createdGame) =>{
            if(err){
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
    show(req,res,next){
        Log.findById(req.params.id, (err, foundGame) =>{
            if(err){
                res.status(404).send({
                    msg: err.message, 
                    output:' Could not find a game with that id'
                })
            } else {
                res.locals.data.game = foundGame
                next()
            }
        })
    }
}

// module.exports = dataController