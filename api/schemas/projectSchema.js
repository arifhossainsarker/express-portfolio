const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tech_stack: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    date: {
        type: String,
        default: Date.now,
    }
})

module.exports = projectSchema;