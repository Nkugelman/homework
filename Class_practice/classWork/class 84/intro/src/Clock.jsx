import { Component } from "react";


export default class Clock extends Component{
    state ={
        currentTime:new Date(),
        ticked:0
    }
    componentDidMount(){
        this.interval =setInterval(() =>{
            this.setState({
                currentTime :new Date(),
                ticked :this.state.ticked +=2
                
            })
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        const { currentTime } = this.state;
        const ticker = `ticked ${this.state.ticked} times`
        return (
        <h1>{currentTime.toLocaleTimeString()} {ticker}</h1>
        );
    }
}