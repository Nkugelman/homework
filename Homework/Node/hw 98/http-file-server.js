const http =require('http');
const fs =require('fs');
const port =process.argv[2];
 const file =process.argv[3];

 const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text'});
    fs.createReadStream(file).pipe(res)
 })
 server.listen(port)