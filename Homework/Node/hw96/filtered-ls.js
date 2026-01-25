const fs = require('fs');
const { argv } = require('process');



fs.readdir(argv[2], (err, list) => {
  if (err) {
    console.error(err);
    return;
  }

  const extension = '.' + argv[3];
 

  const newFile= list.filter(file => file.endsWith(extension))
console.log(newFile);

   
});
