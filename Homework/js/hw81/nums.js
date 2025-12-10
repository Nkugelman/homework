const person ={
    age:80
    
}
const potus ={
    first:'donald',
    last:'trump',
    print(){
        console.log(this.first,this.last);
        
    }
};
Object.setPrototypeOf(potus,person)

Object.defineProperty(potus,'email',{
    value: 'dedw@gmail',writable:true ,configurable:true,enumerable:true}
)
for(const prop in potus){
    if(potus.hasOwnProperty(prop))
    if(potus[prop].constructor !==Function){
    console.log(prop ,potus[prop]);
    }
    
}
