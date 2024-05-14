import React, { Component } from "react";

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
      }
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
      }

  render() {
    return (
      <div>
        <h1>Clock: {this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
