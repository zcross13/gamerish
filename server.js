const express = require('express');
const app = express(); 
const games = require('./models/games.js')

//set up view engine 
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())



/* Start Config */ 
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

/* End Config */

/* Start Middleware */



/* End Middleware */ 


/* Routes */
// Index
app.get('/gamerish', (req,res) => {
    res.render('games/Index', {
        games: games
        
    })
})

// Show 
app.get('/gamerish/:id', (req,res) => {
    res.render('games/Show',{
        game: games[req.params.id]
    })
})


app.listen(3000, () =>{
    console.log('Listening on Port 3000')
})