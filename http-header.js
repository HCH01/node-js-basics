const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('nice',"ok")
    res.setHeader('content-type',"text/html")
    res.write("<h1>welcome</h1>");
    res.end();
}).listen(5000)