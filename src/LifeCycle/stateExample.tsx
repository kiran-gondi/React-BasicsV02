import React, { Component } from "react";

class StateComponent extends Component{

    constructor(props){
        super(props);
        this.state = {count:0,}; //Iniitalizing the state;
    }

    render(){
        return(
            <div>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.handleInc}>Increment</button>
                <button onClick={this.handleDec}>Decrement</button>
            </div>
        );
    }

    handleInc = ()=>{
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    handleDec = ()=>{
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

}

export default StateComponent;