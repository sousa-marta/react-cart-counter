import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [  ],
  };

  renderTags(){
    if(this.state.tags.length ===0) return <p>There are no tags</p>

    return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
  }

  render() {
    return (
      <>
        {this.state.tags.length === 0 && <h3>Please, create a new tag!</h3>}
        {this.renderTags()}
      </>
    );
  }
}

export default Counter;
