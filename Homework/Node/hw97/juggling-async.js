const http = require('http');

const urls = process.argv.slice(2);
const results =[];
let completed =0;
urls.forEach((url, index) => {
  http.get(url, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      results[index] = data;  
      completed++;
      if(completed===urls.length){
        results.forEach((r) =>console.log(r));
        
      }
    });
  });
});
