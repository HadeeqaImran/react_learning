import React, { Component } from 'react'

class Form extends Component {
  constructor(){
    super();
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({name: event.target.value});
  }
  handleSubmit(event){
    alert("Name submitted was: " + this.state.name);
    event.preventDefault();
  }
    render() {
    const isDisabled = this.state.name !== 'Hadeeqa';
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button type="submit" disabled={isDisabled}>Submit</button> 
      </form>
    )}

}
export default Form