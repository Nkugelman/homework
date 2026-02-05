 const mymodule = require('./mymodule.js');
mymodule(process.argv[2],process.argv[3],print)


function print(err,data){
    if(err){
        console.error(err);
        return
        
    }
    data.forEach(d=>console.log(d));
    

}
