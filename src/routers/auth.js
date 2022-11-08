const express = require('express')


const router = new express.Router()


router.app.post('/login', (req, res) => {
  //Auth token generation


  res.send('LoginREQUESTED')
})