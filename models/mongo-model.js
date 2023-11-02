const mongoose = require("mongoose");

const DBschema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Enter name"] //required property specifiy if this name property is required. If true and not property is not provided then error will be thrown with "Enter name" message
    },
    age :{
        type: Number,
        default: 18,
    }
});

module.exports = mongoose.model('testing',DBschema)