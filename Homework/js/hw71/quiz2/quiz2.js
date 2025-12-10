(function(){
'use strict';
const people =[];

const firstNameMales =["joe","shmoe" ,"john","sam"]
const firstNameFemales =["sara","leah" ,"rachel","rivka"]

const lastNames =["smith","adams","brown","green"]
for (let i = 0; i <40; i++){
people.push(
    {
        id: i,
        first: i <20 ? getRandomName(firstNameMales):getRandomName(firstNameFemales) ,
        last: getRandomName(lastNames),
        gender: i <20 ? "male" :"female",
      
        //spouse: i %2  === 0 ? people[i+1] :people[i-1]

    }
)
}
people.forEach(p => p.spouse = getSpouse(p));
function getSpouse(person){
if(person.gender === "male"){
    return people.find(p => p.id === person.id +1)  
}
else{
    return people.find(p => p.id === person.id -1)  
}

    
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

}
function getRandomName(arr){
    return arr[Math.floor(Math.random()* arr.length)];
}

console.log(people);



}());