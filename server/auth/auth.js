const jwt = require('jsonwebtoken');

const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/auth', async function(req, res){
    try {
        const token = jwt.sign({userId: 1}, process.env.JWT_SECRET, {expiresIn: "1h"});
        return res.json({auth: true, token});
    } catch (error) {
        
    }
});


module.exports = router;
