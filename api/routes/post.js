const express = require('express');

const router = express.Router();

const postmodel = require('../models/postmodel');

const dummyModel = require('../models/dummyModel');

const mongoose = require('mongoose');

const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res, next) => {
    console.log('got request to' + req);

    res.status(200).json(
        {
            message: 'amma baboi'
        }
    )
})

router.get('/dummy', (req, res, next) => {
    console.log('got request to' + req);

    let datatosend = {};
    dummyModel.find().then((val) => {
        datatosend = val;
        res.status(200).json(
            {
                data: datatosend
            }
        )
    })

})

router.get('/dummy/:dummyid', (req, res, next) => {
    console.log('got request to' + req);


    dummyModel.findById(req.params.dummyid).then((vall) => {

        res.status(200).json(
            {
                data: vall
            }
        )
    })

})

router.post('postimagetest', upload.single('postImage'), (req, res, next) => {
    console.log(req);
    console.log(req.file);
    res.status(200).json({ msg: 'Done' })


})

router.delete('/dummy/:dummyid', (req, res, next) => {
    console.log('got request to' + req);


    dummyModel.remove({ _id: req.params.dummyid }).then((vall) => {

        res.status(200).json(
            {
                data: vall
            }
        )
    }).catch((err) => {
        console.log(err);
    })

})



router.post('/dummy', upload.single('postImage'), (req, res, next) => {
    console.log('got request to' + req);
    console.log(req);
    console.log(req.file);

    const savedummy = new dummyModel({
        data: req.body.data,
        _id: mongoose.Types.ObjectId()
    }).save().then((result) => {
        res.status(200).json(
            {
                data: result
            }
        )
    }).catch((err) => {
        console.log(err);

    });

})

router.patch('/', (req, res, next) => {
    console.log('got request to' + req);

    res.status(200).json(
        {
            message: 'amma baboi'
        }
    )
})

router.delete('/:postid', (req, res, next) => {
    console.log('got request to' + req);
    console.log(req.body.postid);


    res.status(200).json(
        {
            message: req.body.postid
        }
    )
})

router.get('/:postid', (req, res, next) => {
    const id = req.params.postid;
    res.status(200).json({ postid: id })
})

router.post('/', (req, res, next) => {
    const postnew = new postmodel({
        _id: mongoose.Types.ObjectId(),
        content: 'abcd',
        likesCnt: 30
    })

    postnew.save().then((result) => {
        console.log(result);

    }).catch((err) => {
        console.log(err);

    })
    res.status(201).json(
        {
            data: postnew
        }
    )
})

module.exports = router;