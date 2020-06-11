const mongoose = require('mongoose');

const {Schema} = mongoose;

const problemSchema = new Schema({
    testid: {
        type: String
    },
    number: {
        type: String
    },
    question: {
        type: String
    },
    answer: {
        type: String
    },
    mark1: {
        type: String
    },
    mark2: {
        type: String
    },
    mark3: {
        type: String
    },
    mark4: {
        type: String
    },
    mark5: {
        type: String
    }

})


const Problem = mongoose.model('Problem', problemSchema);

module.exports = { Problem }