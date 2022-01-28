const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
    }
})

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    purchasePrice: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        default: new Date(),
        required: true
    },
    comment: [commentSchema],
    user: String
})

module.exports = mongoose.model('Item', itemSchema)
