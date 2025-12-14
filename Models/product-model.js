const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/scatch')

const productSchema = mongoose.Schema({
    image : String,
    name : String,
    price : Number,
    discount : Number,
    bgColor : String,
    panelColor : String,
    textColor : String
})

module.exports = mongoose.model('product', productSchema)