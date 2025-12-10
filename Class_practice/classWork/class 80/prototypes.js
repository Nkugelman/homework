const oranism ={};
const animal = Object.create(oranism);
const mammal = Object.create(animal);
const dog = Object.create(mammal);

console.log(dog);

mammal.hasHair = true;
dog.bark = ()=>{
    console.log ('Woof Woof');
};

const spot = Object.create(dog);

spot.name = 'Spot';
spot.breed = 'Dalmatian';
spot.weight = 50;
spot.color = 'black';
console.log(spot);

const rover = Object.create(spot);
rover.name = 'Rover';
rover.weight = 60;

console.log(rover.name);

console.log(rover);