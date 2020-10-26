const express = require('express');

const app = express();

const mongoose = require('mongoose');

const morgan = require('morgan');

const bodyParser = require('body-parser');

const posts = require('./api/routes/post');

const comments = require('./api/routes/comments');

mongoose.connect('mongodb+srv://jaithethope:Elonmusk@cluster0.iwj9o.mongodb.net/<dbname>?retryWrites=true&w=majority'
    , { useNewUrlParser: true, useUnifiedTopology: true })



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/posts', posts);   //here only the requests that comes to /posts only will be passed on to posts handler
app.use('/comments', comments);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-type, Accept, Authorization');

    // res.status(200).json({ key: 'ismart' });
})



module.exports = app;