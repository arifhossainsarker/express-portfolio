const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require('../schemas/userSchema');
const User = new mongoose.model("User", userSchema); 

// signup route
router.post('/signup', async(req, res) => {
    try{

    
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
        });
        await newUser.save()
        res.status(200).json({
            message: "Signup was successfully",
        });
    } catch{
        res.status(500).json({
            message: "Signup Failed",
        });
    }
})

// Login Route
router.post('/login', async(req, res) => {
    try{

        const user = await User.find({username: req.body.username});
        if(user && user.length > 0){
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
            if(isValidPassword){
                // generate web token
                const token = jwt.sign({
                    username: user[0].username,
                    userId: user[0]._id
                }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                });

                res.status(200).json({
                    "access_token": token,
                    "message": "Login Successfully"
                })

            }else{
                res.status(401).json({
                    "error": "Authentication failed password"
                });
            }

        } else{
            res.status(401).json({
                "error": "Authentication failed user"
            });
        }
    }catch(err){
        // console.log(err);
        res.status(401).json({
            "error": "Authentication failed catch"
        });
    }
})


module.exports = router;