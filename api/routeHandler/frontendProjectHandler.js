const express = require("express");
const mongoose = require("mongoose"); 
const router = express.Router();
const projectSchema = require("../schemas/projectSchema");
const Project = new mongoose.model("Project", projectSchema);



// get all Project router
router.get('/', async(req, res) => {
    try{
        const data = await Project.find({status: 'active'})
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