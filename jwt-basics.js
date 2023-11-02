const app = require("express")();
const jwb = require("jsonwebtoken");

app.post('/auth',(req,res)=>{
    const token = jwb.sign({id: parseInt(Math.random())*100,msg:"new token"},"secret key",{expiresIn:'10d'})
    res.json({token});
})
app.use('/auth',(req,res,next)=>{
    const token = req.headers.authorization;
    const decode = jwb.verify(token,"secret key");
    console.log(decode);
    next();
})
app.get('/auth',(req,res)=>{
    res.send("WECOME HOME");
})


app.listen(3000);