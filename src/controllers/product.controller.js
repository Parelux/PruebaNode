const mongoose  = require('mongoose');
const Product = require('../models/product.model')

const listAllProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).send({products})
    } catch (e) {
        console.error(e)
        res.status(500).send()
    }
}

const insertProduct = async (req,res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        res.status(201).send({ product })
    } catch (e) {
        console.error(e)
        res.status(400).send(e)
    }
}

const deleteProduct = async (req,res) => {
    let id_product = req.params.id_product? req.params.id_product:undefined;
    if(!mongoose.isValidObjectId(id_product)){
        return res.status(400).send({error:"No valid ID were given"})
    }

    try {
        let productToDelete = await Product.findByIdAndDelete({_id:req.params.id_product})
        if(!productToDelete){
            return res.status(404).send({error:"Already deleted or never existed."})
        }
        res.status(200).send(productToDelete)
    } catch (e) {
        console.error(e)
        res.status(500).send()
    }
}

module.exports = {
   insertProduct,
   deleteProduct,
   listAllProducts
}