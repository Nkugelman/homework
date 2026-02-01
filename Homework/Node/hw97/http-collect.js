const http =require('http');
const { argv } = require('process');

http.get(argv[2],(res)=>{
    res.setEncoding('utf8')
    let rawData='';
    res.on('data',(chunk)=>rawData+=chunk)
    res.on('end',()=>console.log(rawData));
    res.on('error',(err)=>{console.error(err);
    })
    
})