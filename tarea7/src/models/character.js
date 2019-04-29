const mongoose = require('mongoose');
const validator = require('validator');

const characterSchema = new mongoose.Schema({
  "name": String,
  "age": Number,
  "born": Number,
  "timeline": String,
  "alliegance": [String],
  "playedBy": String,
  "titles": [String],
  "father": String,
  "mother": String,
  "spouse": String
});


const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
