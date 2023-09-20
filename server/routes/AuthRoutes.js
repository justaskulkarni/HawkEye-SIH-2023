if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/user')

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.SECRET, {
        expiresIn: 3 * 24 * 60 * 60
    });
}

router.post('/signup', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(12)
        pass = req.body.password
        const hashp = await bcrypt.hash(pass, salt);
        const newUser = new User({
            email: req.body.email,
            password: hashp,
            role: req.body.role,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        })

        await newUser.save()

        const token = createToken(newUser._id, req.body.role)
        res.json({ success: true, authToken: token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/login', async (req, res) => {

    try {
        console.log(req.body.email, req.body.role)
        const requser = await User.findOne({ email: req.body.email, role: req.body.role })
        
        if (!requser) {
            throw Error('Incorrect Details')
        }

        const match = await bcrypt.compare(req.body.password, requser.password)
        
        if (!match) {
            throw Error('Password is incorrect')
        }
        else {
            const token = createToken(requser._id, req.body.role)
            res.json({ success: true, authToken: token })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

module.exports = router;