(function(){
'use strict';
async function getTheData(){
    try{
    const response = await fetch('people.json');
    if(!response.ok){
        throw new Error(`Error: ${response.status}-${response.statusText}`);
    }
    console.log(response);
    const people = await response.json();
    console.log(people);
    }catch(e){
        console.error('oops' , e);
    }
}

getTheData();




}());