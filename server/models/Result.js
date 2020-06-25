const mongoose = require('mongoose');

const {Schema} = mongoose;

const resultSchema = new Schema({
    // 시험 결과를 업로드한 사람
    tester: {
        // 시험결과를 업로드한 사람은 로그인한 유저이기 때문에 유저의 정보를 가져온다.
        // 객체의 Id 정보만 가져오면 해당 유저의 모든 정보를 참고할 수 있다.
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    testid: {
        type: String
    },
    correctPoint: {
        type: String
    },
    totalPoint: {
        type: String
    }
})


const Result = mongoose.model('Result', resultSchema);

module.exports = { Result }