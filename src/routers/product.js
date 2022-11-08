const express = require('express')
const router = new express.Router()
const productsController = require('../controllers/product.controller')

//Routes for products
router.get('/products', productsController.listAllProducts)
// router.post('/products', auth, productsController.insertProduct)
// router.delete('/products/:product_id', auth, productsController.deleteProduct)

router.post('/products', productsController.insertProduct)
router.delete('/products/:id_product', productsController.deleteProduct)


module.exports = router