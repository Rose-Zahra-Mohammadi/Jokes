const mongoos = require('mongoose')


const JokeSchema = new mongoos.Schema({
    setup : {
        type : String,
        require: [true, "Setup is reqired"],
        minlength: [10, "Setup must be at least 10 characters!"]
    },
    punchline:  {
        type : String,
        require: [true, "Punchline is reqired"],
        minlength: [3, "Setup must be at least 3 characters!"]
    }
}, {timestamps: true})

module.exports = mongoos.model('Joke', JokeSchema)