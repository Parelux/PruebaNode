const express = require('express')
const authMW = require('../middleware/auth')
const productsController = require('../controllers/product.controller')

const router = new express.Router()

//Routes for products
router.get('/products', productsController.listAllProducts)
router.post('/products', authMW, productsController.insertProduct)
router.delete('/products/:id_product', authMW, productsController.deleteProduct)

module.exports = router