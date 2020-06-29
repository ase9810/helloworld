const express = require('express');
const router = express.Router();
const { Result } = require("../models/Result");

const { auth } = require("../middleware/auth");

//=================================
//             Result
//=================================

router.post('/update', (req, res) => {
    Result.update({ $and: [{ testid: req.body.testid }, { tester: req.body.tester }] },
        { $set: { correctPoint: req.body.correctPoint } },
        { upsert: true, },
        function (err, doc) {
            if (err) {
                console.log('b')
                return res.send(500, { error: err });
            }
            console.log('a')
            console.log(req.body)
            return res.status(200).json({
                success: true
            })
        });
});

router.post('/uploadResult', (req, res) => {
    // 시험결과를 서버에 저장한다.
    const result = new Result(req.body);

    result.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
})

router.post('/getResult', (req, res) => {
    const value = req.headers.referer.toString()
    const testid = value.substring(value.length-2, value.length)

    // 문제를 DB에서 가져와서 클라이언트에 보낸다.
    Result.find({ $and: [{ tester: req.body.tester }, { testid: testid }] })
        .then((result) => {
            if (result.length != 0) {
                res.status(200).json({
                    success: true,
                    result
                })
            } else {
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
