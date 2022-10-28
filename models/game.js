const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
    {
    name: {type: String, require: true}, 
    image: {type: String, require: true},
    releasedate: {type: String, require: true}, 
    price: {type: String, require: true},
    console: {type: String, require: true }, 
    wouldRecommend: Boolean
    }
)

const Game = mongoose.model('Game', gameSchema)

module.exports = Game

// const games = [
//     {
//         name: 'Splatoon 3', 
//         releaseDate:'September 8, 2022', 
//         price: '$59.99',
//         console: 'Nintendo Switch', 
//         wouldRecommend: true
//     }, 
//     {
//         name: 'Pokemon Scarlet and Violet', 
//         releaseDate:'November 18, 2022', 
//         price: '$59.99', 
//         console: 'Nintendo Switch', 
//         wouldRecommend: false
//     }, 
//     {
//         name: 'The Legend of Zelda: Breath of The Wild', 
//         releaseDate:'March 3, 2017', 
//         price: '$44.99', 
//         console: 'Nintendo Switch', 
//         wouldRecommend: true
//     }, 
