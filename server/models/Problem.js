const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = mongoose.Schema({
    Question: {
        type: String
    },
    Answer: {
        type: String
    },
    Mark1: {
        type: String
    },
    Mark2: {
        type: String
    },
    Mark3: {
        type: String
    },
    Mark4: {
        type: String
    }

}, { timestamps: true })


const Problem = mongoose.model('Problem', problemSchema);

module.exports = { Problem }