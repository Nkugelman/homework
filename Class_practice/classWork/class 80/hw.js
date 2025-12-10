class Element{
  // innerText = 'foo';
    //children = [];
    #innerText;
    
   constructor(innerText){
      if(this.constructor === Element){
        throw new Error ('Cannot instantiate abstract class Element directly');
      }
       this.#innerText = innerText;
   }
   addChild(child){
    if(!this.children){
        this.children =[];
    }
    this.children.push(child);
   }
   removeChild(child){
    this.children = this.children?.filter(c => c !== child);
   }
   render(){
        console.log(`${this.#innerText} baseclasses render`);
        
        this.children?.forEach(child => child.render());
   }
   get innerText(){
    return this.#innerText;
   }
    set innerText(innerText){ 
    this.#innerText = innerText;
   }
   /*get children(){
    return this.[...children];
   }*/
}
class Div extends Element{
    render(){
        console.log('im a div from div class' );
        super.render();
    }
}
class H1 extends Element{
    render(){
        console.log('im an H1 from H1 class' );
        super.render();
    }

}
const div = new Div('a');
const h1a = new H1('b');
const h1b = new H1('c');
div.addChild(h1a);
div.addChild(h1b);
div.render();
div.innerText ='foo';
console.log(div.innerText);

//new Element();



console.log('-------------');

div.removeChild(h1a);
div.render();

console.log(div,h1a,h1b);

//////////////////////////////////

const numbers =[1,2,3,4,5,6,7,8,9,10];
const [a,b,,d ,...rest] = numbers;
console.log(a,b,d ,rest);
const potus = {
    first: 'donald',
    last: 'trump',
    age: 70,
    email:'donald@whitehouse'
};
const {first :f, last ,...restp} = potus;
console.log(f, last,restp);

console.log(...numbers);
console.log([...numbers]);
const potusCopy = {...potus};
potus.age++;
console.log(potus, potusCopy);
const melania = {...potus, first: 'melania', age: 50};

const aa ={a:1, b:2};
const bb ={b:3, c:4};
const cc = {...aa, ...bb};
console.log(aa,bb,cc);


function sum(...numbers){
    console.log(numbers);
    //return numbers.reduce((acc, val) => acc + val, 0);
     return numbers.reduce((a,c) => a + c, 0);
    
}
console.log(sum(1,2));



