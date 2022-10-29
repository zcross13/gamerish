require('dotenv').config()

const express = require('express');
const methodOverride = require('method-override')
const app = express(); 
const mongoose = require('mongoose');
const Game = require('./models/game.js');


app.use(express.urlencoded({ extended:true }))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

/* Start Config */ 
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
/* End Config */

/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))


/* End Middleware */ 


/* Routes */

// Index
app.get('/games', (req,res) => {
    Game.find({}, (err, allGames) =>{
        res.render('games/Index', {
            games: allGames 
        })
    })
})

// New
app.get('/games/new', (req, res) => {
    res.render('games/New')
})
// Delete

app.delete('/games/:id', (req, res) =>{
    Game.findByIdAndRemove(req.params.id,(err, removeGame) => {
        res.redirect('/games')
    })
})
// Update
app.put('/games/:id', (req,res) =>{
    Game.findByIdAndUpdate(req.params.id, req.body, (err, updatedGame) => {
        console.log(updatedGame)
        res.redirect(`/games/${req.params.id}`)
    })
})
// Create
app.post('/games', (req,res) => {
    Game.create(req.body, (err, createdGame) => {
        res.redirect('/games')
    })
})

// Edit
app.get('/games/:id/edit',  (req,res) => {
    Game.findById(req.params.id, (err, foundGame) => {
        if(err){
            console.log(err)
            res.status(400).send(err)
        } else {
            res.render('games/Edit', {
                game: foundGame
            })
        }
    })
})

// Show 
app.get('/games/:id', (req,res) => {
    Game.findById(req.params.id, (err, foundGame) =>{
        res.render('games/Show', {
            game: foundGame
        })
    })
})


app.listen(3000, () =>{
    console.log('Listening on Port 3000')
})