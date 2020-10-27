const express = require('express');

const bcrypt = require('bcrypt');

const router = express.Router();

const mongoose = require('mongoose');

const UserModel = require('../models/user');

router.post('/signup',(req,res,next)=>{

    UserModel.findOne({email:req.body.email}).exec().then((vall)=>{
        console.log(vall);
        if(vall){
            res.status(409).json({
                message: 'Email Already Exists'
            })
            return;
        }
        else{
            bcrypt.hash(req.body.password,10,(err,encryptedpass)=>{
                if(err){
                    res.status(500).json({
                        message: err
                    })
                    return;
                }
                if(encryptedpass){
                    const User = new UserModel({
                        _id: mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: encryptedpass
                    })
        
                    User.save().then((doc)=>{
                        res.status(201).json({
                            msg: 'Signup succesfull'
                        })
                        return;
                    })
                }
            })
        }
    })

 
    
})

module.exports = router;