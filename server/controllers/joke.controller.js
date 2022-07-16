const Joke = require("./../models/joke.model")

module.exports.testApi = (req, res) =>{
    res.json({status:"ok"})
}

// Get all
module.exports.allJokes = (req, res) =>{
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

// Get one
module.exports.oneJoke = (req, res) =>{
    // get id from params
    Joke.findOne({_id: req.params.id})
    .then(oneJoke => res.json(oneJoke))
    .catch(err => res.json(err))
}

// Create
module.exports.addJoke = (req, res) =>{
    const newJoke = req.body
    Joke.create(newJoke)
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

// Update -- getOne + create
module.exports.updateJoke = (req, res) =>{
    // grab id from params
    // update: criteria, updatedValue, options
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedJoke => res.json(updatedJoke))
    .catch(err => res.json(err))
}

// Delete
module.exports.deleteJoke= (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
    .then( message => res.json(message))
    .catch(err => res.json(err))
    
}