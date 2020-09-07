import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // styles = {
  //   fontSize: 14,
  //   fontWeight: 'bold'
  // }

  formatCounter() {
    //Destructuring:
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    //return this.state.count === 0 ? 'Zero' : this.state.count;
  }

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()} style={{ fontSize: 15, fontWeight: "bold" }}>
          {this.formatCounter()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
