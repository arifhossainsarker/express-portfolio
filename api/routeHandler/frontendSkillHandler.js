const express = require("express");
const mongoose = require("mongoose"); 
const router = express.Router();
const skillSchema = require("../schemas/skillSchema");
const Skill = new mongoose.model("Skill", skillSchema);




// get all Skill router
router.get('/', async(req, res) => {
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



module.exports = router;