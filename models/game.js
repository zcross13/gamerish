const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
    {
    name: {type: String, require: true}, 
    image: {type: String, require: true},
    releaseDate: {type: String, require: true}, 
    price: {type: String, require: true},
    system: {type: String, require: true }
    }
)

const Game = mongoose.model('Game', gameSchema)

module.exports = Game


