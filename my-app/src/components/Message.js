import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor!",
    };
  }
  changeState() {
    this.setState({
      message: "Thanks for Subscribing!",
    });
  }

  render() {
    // Destructuring: You can destructure only the props that you wan to use
    // const {name} = this.props
    // const {state1} = this.state
    // Then you can 
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeState()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
