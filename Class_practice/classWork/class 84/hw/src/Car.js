export function Car(color){
    this.color =color;
};


Car.prototype.drive =function (){
    console.log(`${this.color} car is driving`);
    
}