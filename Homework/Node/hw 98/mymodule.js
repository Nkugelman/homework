const fs = require('fs');


 module.exports = function (dir,ext,callback) {


  const extension = '.' + ext;
 fs.readdir(dir, (err, list) => {
   if (err) {
     callback(err)
     return;
   }
 
   const newFile= list.filter(file => file.endsWith(extension))
 callback(null,newFile)
 
    
 });
 
         
  }



