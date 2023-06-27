const mongoose = require('mongoose');

const gamesSchema = mongoose.Schema({
    name: {type : String, required: true},
    description: {type : String, required: true},
    price: {type : Number, required: true},
    capacity: {type : Number, required: true},
    disponibility: {type : Boolean, required: true},
    image:{type: String, required: true}
})

module.exports = mongoose.model('Games', gamesSchema)