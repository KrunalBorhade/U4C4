const User = require('../models/user.model')
var jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    return jwt.sign({user},process.env.SECRET_KEY)
}