const mongoose  = require('mongoose');
const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

/**
 * Create a new user with token
 */
const createUser = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
}

/**
 * Perform a login with valid user credentials
 */
const login = async (req, res) => {
    const email = req.body.email? req.body.email: undefined;
    const password = req.body.password? req.body.password: undefined;

    if(!email || !password){
        return res.status(400).send({error: "Bad user data entry."})
    }

    const user = await User.findByCredentials(email,password);
    const token = await user.generateAuthToken();
    
    res.send({ user, token })
}

module.exports = {
    createUser,
    login
}



