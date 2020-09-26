import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  
  // handleIncrement() {
  //   console.log("Clicked!");
  // }
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  formatCount() {
    //Object Destructure:
    const { count } = this.state;
    return count === 0 ? <h4>Zero</h4> : count;
    //return this.state.count === 0 ? 'Zero' : this.state.count;
  }

  render() {
    return (
      <>
        <span
          className={this.getBadgeClasses()}
          style={{ fontSize: 15, fontWeight: "bold" }}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
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
