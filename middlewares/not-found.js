const notFound = (req,res,next)=>{
    res.status(404).send("NOT FOUND");
}

module.exports = notFound