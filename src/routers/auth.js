const express = require('express')
const authController = require('../controllers/auth.controller')

const router = new express.Router()

//Create a new user
router.post('/users', authController.createUser )

//Perform a login operation using user credentials
router.post('/users/login', authController.login )

module.exports = router