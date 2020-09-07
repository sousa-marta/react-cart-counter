import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  formatCounter() {
    //Destructuring:
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
    //return this.state.count === 0 ? 'Zero' : this.state.count;
  }

  render() {
    return (
      <>
        <span>{this.formatCounter()}</span>
        <button>Click, me</button>
      </>
    );
  }
  
}

export default Counter;
