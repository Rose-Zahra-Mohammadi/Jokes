const mongoos = require('mongoose')


const JokeSchema = new mongoos.Schema({
    title : String,
    teller : String,
    funniness: Number
}, {timestamps: true})

module.exports = mongoos.model('Joke', JokeSchema)