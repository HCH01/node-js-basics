const mongoose = require("mongoose");

const mongoConnect = async (url)=>{
    mongoose.connect(url,{
        autoIndex: true,
    })
}

module.exports = mongoConnect