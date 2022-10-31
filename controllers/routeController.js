const express = require('express')
const router = express.Router()
const gameDataController = require('./gameDataController')
const gameViewController = require('./gameViewController')
const commentDataController = require('./commentDataController')


//Game Routes 
// Index
router.get('/', gameDataController.index, gameViewController.index)
// New
router.get('/new', gameViewController.newView)
// Delete
router.delete('/:id', gameDataController.delete, gameViewController.redirectHome)
// Update
router.put('/:id', gameDataController.update, gameViewController.redirectShow)
// Create
router.post('/', gameDataController.create, gameViewController.redirectHome)
// Edit
router.get('/:id/edit', gameDataController.grabGame, gameViewController.edit)
// Show
router.get('/:id', gameDataController.grabGame, gameViewController.show)


//Comments Routes 

// Create Route 
router.post('/:id/new', commentDataController.create, gameViewController.redirectShow)



module.exports = router