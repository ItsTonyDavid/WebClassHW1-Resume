
const mongoose = require('mongoose')

const connectionURL = 'mongodb+srv://tony:otro@cluster0-nztla.azure.mongodb.net/test?retryWrites=true'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
