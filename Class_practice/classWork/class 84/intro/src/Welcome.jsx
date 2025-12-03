import { Component } from "react";

export default function Welcome(props) {
    //  console.log(props);
    const { first, last } = props;
    return (
        <h1>Welcome {first} {last}!</h1>
    );
}
export class WelcomeC extends Component {
    state={
    count : 0,
    foo:0
    }
    constructor(props){
        super(props);
       
    }
    componentDidMount(){
        console.log('commponent did mount');
        this.interval= setInterval(()=>{
           this.setState({
            count: this.state.count+1,
           
           })
        },1000);
         this.interval= setInterval(()=>{
           this.setState({
           
            foo:this.state.foo -1
           })
        },2000);
        
        
    }
    componentWillUnmount(){
        console.log('commponent will unmount');
        clearInterval(this.interval)
        
    }
    render() {

        const { first, last } = this.props;
        return (<>
            <h1>Welcome "class" {first} {last}!</h1>
            <h2>current count {this.state.count}</h2>
            <h2>current foo{this.state.foo}</h2>
        </>

        );
    }

}