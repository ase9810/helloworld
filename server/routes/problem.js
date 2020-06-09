const express = require('express');
const router = express.Router();

const { Problem } = require("../models/Problem");

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
            })
    })
});

router.get('/getProblem', (req, res) => {
    // 문제를 DB에서 가져와서 클라이언트에 보낸다.
    Problem.find()
        .populate('question')
        .exec((err, problem) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, problem })
        })
})

module.exports = router;