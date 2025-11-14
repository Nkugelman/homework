class Element {
      children=[]
    constructor(innerText){
        this.innerText = innerText;
    }
    setInnerText(text){
        this.innerText= text;
    }
    getInnerText(){
        return this.innerText;
    }
   
    addChild(child){
      this.children.push(child);

    }
    getChildren(){
      return this.children;
    }
      removeChild(child){
      this.children = this.children.filter(c => c !== child);
    }
     render(){
        console.log(`${this.innerText} from baseClass`);
        this.children.forEach(child => child.render());
        
    }
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
const h11 = new H1('b');
const h12 = new H1('c');
div.addChild(h11);
div.addChild(h12);
div.render()
div.setInnerText('new div inner text');
div.removeChild(h11);
div.render();
