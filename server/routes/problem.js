const express = require('express');
const {Problem} = require("../models/Problem");

const router = express.Router();

const { auth } = require("../middleware/auth");

//=================================
//             Problem
//=================================


router.post("/saveProblem", (req, res) => {
    const problem = new Problem(req.body);
    problem.save((err, problem) => {
        if (err) return res.json({ success: false, err })
        Problem.find({ '_id': problem._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                res.status(200).json({ success: true, result })
            });
    });
});

router.get('/getProblem', function (req, res) {
    const value = req.rawHeaders.slice(7,8).toString()
    const testid = value.substring(30,32)
    
    // 문제를 DB에서 가져와서 클라이언트에 보낸다.
    Problem.find({testid:testid})
        .then((problem) => {
            if (problem.length != 0) {
                res.status(200).json({
                    success: true,
                    problem
                })
            } else {
                console.log(testid)
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