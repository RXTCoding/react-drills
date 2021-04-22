import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ["you", "love", "ice cream"]
    };
  }

  render() {
    let array = this.state.array.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{array}</div>;
  }
}

export default ClassComponent;