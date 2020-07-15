const mongoose = require('mongoose');
const config = require("../config/key");
const autoIncrement = require('mongoose-auto-increment');

const {Schema} = mongoose;

const connect = mongoose.createConnection(config.mongoURI);
autoIncrement.initialize(connect);

const examSchema = new Schema({
    seq: {
        type: Number
    },
    program: {
        type: String
    },
    level: {
        type: String
    },
    book: {
        type: String
    },
    title: {
        type: String
    },
    division: {
        type: String
    },
    domain: {
        type: String
    },
    grade: {
        type: String
    },
    testfile: {
        type: String
    },
    answerfile: {
        type: String
    },
    type1: {
        type: String
    },
    type2: {
        type: String
    },
    type3: {
        type: String
    },
    type4: {
        type: String
    },
    type5: {
        type: String
    },
    type6: {
        type: String
    },
    exam: {
        type: Array,
        class: {
            type: String
        },
        contents: {
            type: String
        },
        ex: {
            type: String
        },
        point: {
            type: Number
        }
    }
})

examSchema.plugin(autoIncrement.plugin, {
    model:'Exam',
    field: 'seq', // auto-increment할 field
    startAt: 0, // 0에서 부터
    increment: 1 // 1씩 증가
   });


const Exam = mongoose.model('Exam', examSchema);

module.exports = { Exam }