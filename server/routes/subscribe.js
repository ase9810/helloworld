const express = require('express');
const router = express.Router();

const { Subscriber } = require("../models/Subscriber");

const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================


router.post("/subscribeNumber", (req, res) => {

    Subscriber.find({ "userTo": req.body.userTo })
        .exec((err, subscribe) => { // userTo를 구독하는 모든 경우의 정보
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, subscribeNumber: subscribe.length }) // 구독자의 경우들의 길이를 모아서 만든다
        })

});



router.post("/subscribed", (req, res) => {

    Subscriber.find({ "userTo": req.body.userTo, "userFrom": req.body.userFrom })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)

            //subscribe의 길이가 1이상이면 자신이 구독을 하고 있다는 의미
            let result = false;
            if (subscribe.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, subcribed: result })
        })

});


// 미구독 중일 때 구독
router.post("/subscribe", (req, res) => {

    const subscribe = new Subscriber(req.body);

    subscribe.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

// 구독 중일 때 구독 취소
router.post("/unSubscribe", (req, res) => {

    console.log(req.body)
    // 구독 정보를 찾아서 지운다
    Subscriber.findOneAndDelete({ userTo: req.body.userTo, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, doc })
        })
});



module.exports = router;