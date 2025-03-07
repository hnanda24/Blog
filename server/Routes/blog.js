const express = require('express');
const router = express.Router();
const blogData = require('../Models/blog');

router.post('/data', async(req,res) => {

    try{
    const {title,content,author} = req.body;
    const newBlog = new blogData({title,content,author});
    await newBlog.save();
    res.status(201).json({message: "Data saved"});
    }

    catch(err){
        res.status(500).json({err})
    }
})

router.get('/displayData', async(req,res) => {
    try{
    const data = await blogData.find();
    res.json({data});
    console.log({data});
    }

    catch(err){
        res.status(500).json({err});
    }
})

module.exports = router;