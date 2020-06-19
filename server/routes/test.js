const express = require('express');
const {Test} = require("../models/Test");

const router = express.Router();

const { auth } = require("../middleware/auth");

//=================================
//             Test
//=================================


router.post("/saveTest", (req, res) => {
    const test = new Test(req.body);
    test.save((err, test) => {
        if (err) return res.json({ success: false, err })
        Test.find({ '_id': test._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                res.status(200).json({ success: true, result })
            });
    });
});

router.get('/getTest', function (req, res) {
    const value = req.headers.referer.toString()
    const testid = value.substring(27,29)
    
    // 문제를 DB에서 가져와서 클라이언트에 보낸다.
    Test.find({testid:testid})
        .then((test) => {
            if (test.length != 0) {
                res.status(200).json({
                    success: true,
                    test
                })
            } else {
                console.log(value)
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