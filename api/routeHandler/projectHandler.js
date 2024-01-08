const express = require("express");
const mongoose = require("mongoose"); 
const router = express.Router();
const projectSchema = require("../schemas/projectSchema");
const Project = new mongoose.model("Project", projectSchema);
const checkLogin = require('../middlewares/checkLogin');



// get all Skill router
router.get('/', async(req, res) => {
    try{
        const data = await Project.find({status: 'active'})
            .select({
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
router.get('/:id',  async(req, res) => {
    try{
        const data = await Project.find({_id: req.params.id});
        res.status(200).json({
            data: data,
            message: "Data Show successfully",
            })
    }catch(err){
        console.log(err)
    }
});

// post Project router
router.post('/', async(req, res) => {
    const newProject = new Project(req.body);
    try{
       await newProject.save();
       res.status(200).json({
        message: "Data insert successfully",
      })
    }catch(err){
        console.log(err)
    }
});

// update Project router
router.put('/:id', async(req, res) => {
    try{
        await Project.updateOne({_id: req.params.id}, {
            $set: {
                name: req.body.name,
                tech_stack: req.body.tech_stack,
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

// Delete Project router
router.delete('/:id', async(req, res) => {
    try{
        await Project.deleteOne({_id: req.params.id});
        res.status(200).json({
            message: "Data Delete successfully",
        })
    }catch(err){
        console.log(err)
    }
});


module.exports = router;