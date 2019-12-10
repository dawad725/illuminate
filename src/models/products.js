const mongoose = require('mongoose')
const Schema = mongoose.Schema

//The Schema that our new products use 
const ProductSchema = new Schema({
    brand: String,
    wattageequivalent: Number,
    price: Number,
    image: String,
    sku: String,
    description: String,
    qty: Number

})

module.exports = mongoose.model('Product', ProductSchema);

