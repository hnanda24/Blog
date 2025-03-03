const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwetoken');
const router = express.router();
const user = require('../Models/user');

router.post('/register', async(req,res) => {
    try{
    const {username,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({username,email,hashedPassword})
    await newUser.save();

    res.status(201).json({message: "user registered" })
    }
    
    catch(err)
    {
        res.status(500).json({err})
    }
})

router.post('/login', async(req,res) => {
    try{
        const {email,password} = req.body;
        const validEmail = await user.findOne({email});
        if(!validEmail) res.status(400).json({message : "Not a valid user"});

        const passCheck = await bcrypt.compare(password, user.password);
        if(!passCheck) res.status(400).json({message : "Wrong user"});


    }

})

module.exports = router();