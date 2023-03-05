const mongoose = require('mongoose');
require('dotenv').config()
const jwt = require('jsonwebtoken')
const checker = (req, res, next) => {
    const { authorization } = req.haeders;
    jwt.verify(authorization.split("")[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.json({ status: false, message: "Inavalid token" })
        } else {
            req.user._id = decoded._id;
            next()
        }
    })
}
module.exports = { checker }