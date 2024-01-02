const express = require("express");
const mongoose = require("mongoose"); 
const router = express.Router();
const skillSchema = require("../schemas/skillSchema");
const Skill = new mongoose.model("Skill", skillSchema);
const checkLogin = require('../middlewares/checkLogin');



// get all Skill router
router.get('/', checkLogin, async(req, res) => {
    try{
        const data = await Skill.find({status: 'active'})
            .select({
                _id:0,
                date: 0,
            });
        res.status(200).json({
            data: data,
            message: "Data Show successfully",
            })
    }catch(err){
        console.log(err)
    }
});

// get by id router
router.get('/:id', checkLogin, async(req, res) => {
    try{
        const data = await Skill.find({_id: req.params.id});
        res.status(200).json({
            data: data,
            message: "Data Show successfully",
            })
    }catch(err){
        console.log(err)
    }
});

// post skill router
router.post('/', checkLogin, async(req, res) => {
    const newSkill = new Skill(req.body);
    try{
       await newSkill.save();
       res.status(200).json({
        message: "Data insert successfully",
      })
    }catch(err){
        console.log(err)
    }
});

// update skill router
router.put('/:id', checkLogin, async(req, res) => {
    try{
        await Skill.updateOne({_id: req.params.id}, {
            $set: {
                name: req.body.name,
                description: req.body.description,
            }
        })
        res.status(200).json({
            message: "Data Update successfully",
        })
    }catch(err){
        console.log(err)
    }
});

// Delete Skill router
router.delete('/:id', checkLogin, async(req, res) => {
    try{
        await Skill.deleteOne({_id: req.params.id});
        res.status(200).json({
            message: "Data Delete successfully",
        })
    }catch(err){
        console.log(err)
    }
});


module.exports = router;