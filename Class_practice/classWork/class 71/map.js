(function(){
  'use strict';

  function ourMap(array,callback){
    const newArray = [];
   /* for(let i = 0; i < array.length; i++){
      newArray.push(callback(array[i]));
    }*/
    array.forEach(n => newArray.push(callback(n)));
    return newArray;
  }
  function double(num){
    return num * 2;
  }
  const numbers = [1,2,3,4,5];
  console.log(ourMap(numbers,double)); 

  const people =[
    {first:'John', last:'Doe'},
    {first:'Jane', last:'Doe'},
    {first:'Jim', last:'Beam'}
  ];
  console.log(ourMap(people, person => ` first:${person.first} last: ${person.last}`));
  people.map(person => ` first:${person.first} last: ${person.last}`);
  
    }());