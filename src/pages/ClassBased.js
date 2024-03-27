import React, { Component } from "react";

export class ClassBased extends Component {
  constructor() {
    super();
    this.state = {
      name: "Olamilekan Z",
      color: "red"
    };
  }

  // componentDidMount(){
  //     console.log("I have mounted")
  // }

  // componentWillUnmount(){
  //     console.log("I am about to unmount")
  // }
  greetLekan() {
    console.log("Greeting Lekan");
  }
  render() {
    return (
      <div>
        <h1 onClick={this.greetLekan}>Olamilekan Class Based Components</h1>
        ClassBased
        <h2>{this.state.name} {this.state.color}</h2>
        <button onClick={()=> this.setState({name: "ZZZZZZZZZZZZZZZZZZ"})}>Change Name</button>
      </div>
    );
  }
}

export default ClassBased;
