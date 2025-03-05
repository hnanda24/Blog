const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = 'blablabla';
const router = express.Router();
const user = require('../Models/user');

router.post('/register', async(req,res) => {
    try{
    const {username,email,password} = req.body;
    // console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser = new user({username,email,hashedPassword})
    await newUser.save();

    res.status(201).json({message: "user registered" })
    }
    
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/login', async(req,res) => {
    try{
        const {email,password} = req.body;
        console.log({email,password});
        const validUser = await user.findOne({email});
        console.log(validUser)
        if(!validUser) res.status(400).json({message : "Not a valid user"});

        const passCheck = await bcrypt.compare(password, validUser.hashedPassword);
        console.log(passCheck)
        if(!passCheck) res.status(400).json({message : "Wrong password"});

        var token = jwt.sign({email: validUser.email}, SECRET);
        console.log(token)
        return res.json({
            token,
            message: "Logged in"
        })
    }

    catch(err)
    {
        res.status(500).json({err})
    }
})

module.exports = router;

