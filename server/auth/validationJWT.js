const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err) return res.status(401).send(err);
        next();
    });
};

module.exports = verifyJWT;