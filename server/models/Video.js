const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({
    // 비디오를 업로드한 사람
    writer: {
        // 비디오를 업로드한 사람은 로그인한 유저이기 때문에 유저의 정보를 가져온다.
        // 객체의 Id 정보만 가져오면 해당 유저의 모든 정보를 참고할 수 있다.
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50,
    },
    description: {
        type: String,
    },
    privacy: {
        type: Number,
    },
    filePath: {
        type: String,
    },
    catogory: String,
    views: {
        type: Number,
        default: 0
    },
    duration: {
        type: String
    },
    thumbnail: {
        type: String
    }
    // 만든 날짜와 업데이트한 날짜를 표기
}, { timestamps: true })


const Video = mongoose.model('Video', videoSchema);

module.exports = { Video }