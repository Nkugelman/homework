(function(){
'use strict';
const urlInput = document.querySelector('#url');
const resultDiv = document.querySelector('#results');
document.querySelector('#load').addEventListener('click',async () =>{
   /* fetch(urlInput.value)
    .then(r => {
        if(! r.ok){
            throw new Error (`${r.status }- ${r.statusText}`);
        }
        return  r.text();
})
    .then(t => resultDiv.innerText = t)
    .catch (e=>console.error(e));*/
    try{
        const r = await fetch (urlInput.value);
        if(! r.ok){
            throw new Error (`${r.status }- ${r.statusText}`);
        }
  const t = await r.text();
    resultDiv.innerText = t;
    }catch(e){
        console.error(e);
    }

    
    
    
});

}());