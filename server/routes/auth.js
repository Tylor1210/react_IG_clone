const express = require('express');
const User = require('../models/User'); 
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();  

//Registration (POST) route.
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({message: 'User already exists...'});

        //Create New User
        const user = new User ({
            username,
            email,
            password,
        });

        await user.save(); //Save the user ^
        res.status(201).json({message: 'User registered successfully!'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error...'})
    }
});

//Login (POST) Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        //Find the user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credential' });

        //Compare password w/ hashed password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials.. '});

        //Generate a JWT token (using secret key)
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.json({ token });
    }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error..'});
    }
});

//Middleware to protect routes requiring Auth
const protect = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).json({message: 'No token, authorization denied'});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: 'Token is not valid...'});
    }
};







module.exports = router;

