const mongoose = require('mongoose')
const Schema = mongoose.Schema

//The Schema that our new products use 
const ProductSchema = new Schema({
    name: String,
    wattage: String,
    price: Number,
    image: String,
})

module.exports = mongoose.model('Product', ProductSchema);

