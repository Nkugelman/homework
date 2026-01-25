const fs = require('fs');
const fileContents = fs.readFile(process.argv[2],'utf-8',lineCounter)
function lineCounter(err,text){
    if(err){
        console.error(err);
        return;
        
    }
  const lineCount = text.split('\n').length -1

  console.log(lineCount)
}