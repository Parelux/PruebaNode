const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

/**
 * Middleware to check authentication
 * 1-Acquire the token from header
 * 2-Verify the token is decoded using the secret key, obtaining the user's ID
 * 3-Find the user with the decoded id related to the token
 * 4-If user is found, success, call next(), if not, return authentication error
 */
const authMW = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            return res.status(400).send({ error: 'User not found' })
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = authMW

