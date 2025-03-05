const express = require('express');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwetoken');
const router = express.Router();
const user = require('../Models/user');

router.post('/register', async(req,res) => {
    try{
    const {username,email,password} = req.body;
    // console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    const newUser = new user({username,email,hashedPassword})
    await newUser.save();

    res.status(201).json({message: "user registered" })
    }
    
    catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})

router.post('/login', async(req,res) => {
    try{
        const {email,password} = req.body;
        const validEmail = await user.findOne({email});
        // console.log(validEmail)
        if(!validEmail) res.status(400).json({message : "Not a valid user"});

        const passCheck = await bcrypt.compare(password, validEmail.hashedPassword);
        if(!passCheck) res.status(400).json({message : "Wrong user"});

        res.status(200).json({message: "Logged in" })

    }

    catch(err)
    {
        res.status(500).json({err})
    }
})

module.exports = router;