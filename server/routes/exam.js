const express = require('express');
const { Exam } = require("../models/Exam");

const multer = require("multer");
const fs = require("fs");

const router = express.Router();

const { auth } = require("../middleware/auth");

//=================================
//             Exam
//=================================

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        var path = "./uploads/pdf/" + req.body.program + "/" + req.body.level + "/" + req.body.grade + req.body.book + "/";
        fs.exists(path, exist => {
            if (!exist) {
              fs.mkdirSync(path, {recursive: true})
              return cb(null, path)
            }
            return cb(null, path)
        })
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        console.log(path, 'at File Filter')
        const ext = path.extname(file.originalname);
        if (ext !== '.pdf') {
            return cb(res.status(400).end("only pdf is allowed"), false);
        }
        cb(null, true);
    },
});

const multer_settings = multer({
    storage: storage
});



router.post('/update', (req, res) => {
    Exam.update({ "_id": req.body._id },
            { $set: { "correctcnt": req.body.correctcnt, "totalcnt": req.body.totalcnt } },
            { upsert: true },
            function (err, doc) {
                if (err) {
                    return res.send(500, { error: err });
                }
                return res.status(200).json({
                    success: true
                })
            });
});

router.post("/saveExam", multer_settings.fields([{name:"testfile"},{name:"answerfile"}]), (req, res) => {
    const exam = new Exam(req.body);
    const clas = req.body.class;
    const contents = req.body.contents;
    const ex = req.body.ex;
    const point = req.body.point;

    exam.testfile = req.files.testfile[0].path;
    exam.answerfile = req.files.answerfile[0].path;

    console.log(req.files.testfile[0].path)
    console.log(exam.testfile)

    for(var i=0; i<clas.length; i++) {
        exam.exam.push({
            class: clas[i],
            contents: contents[i],
            ex: ex[i],
            point: point[i]
        })
    }
    
    exam.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.redirect('/')
        
    });
});

router.get('/getExam', function (req, res) {
    const value = req.headers.referer.toString()
    const examid = value.substring(value.lastIndexOf("/")+1, value.length)
    console.log(examid)

    // 문제를 DB에서 가져와서 클라이언트에 보낸다.
    Exam.find({ seq: examid })
        .then((exam) => {
            if (exam.length != 0) {
                console.log('a')
                res.status(200).json({
                    success: true,
                    exam
                })
                console.log(exam)
            } else {
                console.log('b')
                console.log(examid)
                res.status(200).json({
                    success: false
                })
            }
        }).catch((err) => {
            console.log(err);
            return res.status(400).send(err);
        })

});

module.exports = router;