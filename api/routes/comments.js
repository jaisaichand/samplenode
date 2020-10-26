const express = require('express');
const app = express();
const router = express.Router();

router.get('/:postid', (req, res, next) => {
    const id = req.params.postid;
    res.status(200).json({ postId: id })
})

router.get('/:commid', (req, res, next) => {
    const id = req.params.commid;
    res.status(200).json({ commentId: id })
})

module.exports = app;