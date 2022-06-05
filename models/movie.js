const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    cast: {
        type: Array,
        required: true,
        default: []
    }

})

module.exports = mongoose.model('Movie',movieSchema)