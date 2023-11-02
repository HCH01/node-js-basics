const app = require('express')();


app.listen(5000);

const handleRequest = (req,res)=>{
    res.send('welcome')
}
app.use("/new",(req,res,next)=>{ //middleware is which where every req is passed through with matching url and addition to that path
    console.log(req.url,req.params,req.query);
    next();
})

app.get("/",handleRequest)

app.get("/new/:id",(req,res)=>{
    res.send("WORKING WELL")
})

app.get("/json",(req,res)=>{
    res.json(data);
})

const data = [
    {
        name : "harry"
    }
]
