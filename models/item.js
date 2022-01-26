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
        required: false
    },
    purchaseDate: {
        type: Date,
        default: new Date(),
        required: false
    },
    comment: [commentSchema]
})

module.exports = mongoose.model('Item', itemSchema)

// module.exports = mongoose.model('Comment', commentSchema)