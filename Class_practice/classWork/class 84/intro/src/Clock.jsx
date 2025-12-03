import { Component } from "react";


export default class Clock extends Component{
    state ={
        currentTime:new Date()
    }
    componentDidMount(){
        this.interval =setInterval(() =>{
            this.setState({
                currentTime :new Date()
            })
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        const { currentTime } = this.state;
        return <h1>{currentTime.toLocaleTimeString()}</h1>;
    }
}