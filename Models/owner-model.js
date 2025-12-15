const mongoose = require('mongoose');
const connection = require('../config/mongodb-connection')

const ownerSchema = mongoose.Schema({
    fullName : String,
    email : String,
    password : String,
    product : {
        type : Array,
        default : []
    },
    contact : Number,
    pictures : String,
    gstin : Number
})

module.exports = mongoose.model('owner', ownerSchema)
