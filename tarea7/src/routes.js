const express = require('express')
const Character = require('./models/character')
const router = express.Router()

const characters = require('./controllers/characters.js')

router.get('/characters/:id', characters.getCharacter)
router.get('/characters', characters.getCharacters)
router.post('/characters', characters.createCharacter)
router.patch('/characters/:id', characters.updateCharacter)
router.delete('/characters/:id', characters.deleteCharacter)

module.exports = router
