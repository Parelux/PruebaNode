const { default: mongoose } = require('mongoose');
const Product = require('../models/product.model')

let listAllProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).send({products})
    } catch (e) {
        res.status(500).send()
    }
}

let insertProduct = async (req,res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        res.status(201).send({ product })
    } catch (e) {
        res.status(400).send(e)
    }
}

let deleteProduct = async (req,res) => {
    
    let id_product = req.params.id_product? req.params.id_product:undefined;
    if(!mongoose.isValidObjectId(id_product)){
        return res.status(400).send("No valid ID were given")
    }

    try {
        let productToDelete = await Product.findByIdAndDelete({_id:req.params.id_product})
        res.status(200).send(productToDelete)
    } catch (e) {
        res.status(500).send()
    }
}

module.exports = {
   insertProduct,
   deleteProduct,
   listAllProducts
}