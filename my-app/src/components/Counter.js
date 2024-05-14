import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementState() {
    /* The counter will still be incremented by 1 because these updates are batched 
  together by React for better performance. In this scenario all setState calls are 
  made in one go and the updated value from one does not carry to the next call*/

    //  this.setState({count: this.state.count+1 })

    /*To get the previous state we need to:
    1. Pass in a function as param to set this.setState function
    2. That function takes the previous version of the state and then changes it.*/
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  incrementFive() {
    this.incrementState();
    this.incrementState();
    this.incrementState();
    this.incrementState();
    this.incrementState();
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
