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
    var query = req.query;

    // 문제를 DB에서 가져와서 클라이언트에 보낸다.
    Problem.find({testid:query})
        .then((problem) => {
            if (problem.length != 0) {
                res.status(200).json({
                    success: true,
                    problem
                })
            } else {
                console.log(query);
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