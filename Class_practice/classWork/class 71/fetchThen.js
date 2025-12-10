(function(){
'use strict';
let theResponse;
fetch('people.json')
.then(response =>{
    theResponse = response;
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
})
.then(text => {
    console.log(text);
    //const people = JSON.parse(text);
    //console.log(people);

  
    
})
.catch(e => {
    console.error('oops' , e)
      console.log(theRsponse.status);
});
   

}());