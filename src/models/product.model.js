const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: false
    },
    description: {
        type: String,
        required: false,
    }
}, {
    timestamps: true,
    autoIndex: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
