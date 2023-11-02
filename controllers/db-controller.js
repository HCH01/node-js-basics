const model = require("../models/mongo-model");
const asyncWrapper = require("../middlewares/async-trycatch-handler");

const postMethod = asyncWrapper(async (req,res,next)=>{
    const data = await model.create(req.body);
    res.json(data);
})

const getMethod = asyncWrapper(async (req,res,next)=>{
    const data = await model.find({})
    res.json(data);
})

const deleteMethod = asyncWrapper(async (req,res,next)=>{
    const data = await model.findOneAndDelete({_id:req.params.id})
    res.json(data);
})

module.exports = {
    postMethod,
    getMethod,
    deleteMethod
}