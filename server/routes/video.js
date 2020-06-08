const express = require('express');
const router = express.Router();
const { Video } = require("../models/Video");
const { Subscriber } = require("../models/Subscriber");

const { auth } = require("../middleware/auth");
const multer = require("multer");
var ffmpeg = require("fluent-ffmpeg");

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        console.log(path, 'at File Filter')
        const ext = path.extname(file.originalname);
        if (ext !== '.mp4') {
            return cb(res.status(400).end("only mp4 is allowed"), false);
        }
        cb(null, true);
    },
});

const upload = multer({ storage : storage }).single("file");

//=================================
//             Video
//=================================

router.post('/uploadfiles', (req, res) => {
    // 비디오를 서버에 저장한다.
    upload(req, res, err => {
        if(err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename })
    })
})

router.post('/getVideoDetail', (req, res) => {
    Video.findOne({"_id": req.body.videoId})
        .populate('writer')
        .exec((err, videoDetail) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, videoDetail });
        })
})

router.post('/uploadVideo', (req, res) => {
    // 비디오 정보들을 저장한다.
    const video = new Video(req.body);
    video.save((err, doc) => {
        if(err) return res.json({ success: false, err });
        res.status(200).json({ success: true })
    })
})

router.get('/getVideos', (req, res) => {
    // 비디오를 DB에서 가져와서 클라이언트에 보낸다.
    Video.find()
        .populate('writer')
        .exec((err, videos) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, videos })
        })
})

router.post('/thumbnail', (req, res) => {
    // 썸네일을 생성하고 비디오 정보 가져오기
    
    // 경로와 재생 길이를 가져온다
    let thumbsFilePath ="";
    let fileDuration ="";

    // 비디오 정보 가져오기
    ffmpeg.ffprobe(req.body.url, function(err, metadata){
        console.dir(metadata);
        console.log(metadata.format.duration);

        fileDuration = metadata.format.duration;
    })

    // 썸네일 생성
    ffmpeg(req.body.url) // 클라이언트에서 온 비디오 저장경로(uploads)
        .on('filenames', function (filenames) { // filenames: 비디오 썸네일 파일 이름
            console.log('Will generate ' + filenames.join(', '))
            console.log(filenames)

            thumbsFilePath = "uploads/thumbnails/" + filenames[0];
        })
        .on('end', function () { // 썸네일 생성 후 발생하는 동작
            console.log('Screenshots taken');
            return res.json({ success: true, thumbsFilePath: thumbsFilePath, fileDuration: fileDuration})
        })
        .on('error', function (err) { // 에러 발생 시 발생하는 동작
            console.error(err);
            return res.json({ success: false, err });
        })
        .screenshots({
            // Will take screens at 20%, 40%, 60% and 80% of the video
            count: 3, // 썸네일 개수
            folder: 'uploads/thumbnails', // 썸네일 파일 경로
            size:'320x240', // 썸네일 파일 크기
            // %b input basename ( filename w/o extension )
            filename:'thumbnail-%b.png' // 썸네일 파일 이름
        })

});

router.post("/getSubscriptionVideos", (req, res) => {


    //Need to find all of the Users that I am subscribing to From Subscriber Collection 
    
    Subscriber.find({ 'userFrom': req.body.userFrom })
    .exec((err, subscribers)=> {
        if(err) return res.status(400).send(err);

        let subscribedUser = [];

        subscribers.map((subscriber, i)=> {
            subscribedUser.push(subscriber.userTo)
        })


        //Need to Fetch all of the Videos that belong to the Users that I found in previous step. 
        Video.find({ writer: { $in: subscribedUser }})
            .populate('writer')
            .exec((err, videos) => {
                if(err) return res.status(400).send(err);
                res.status(200).json({ success: true, videos })
            })
    })
});

module.exports = router;
