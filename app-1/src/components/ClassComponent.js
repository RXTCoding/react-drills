import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleChange = (value) => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
      <div>
        <h3> Hey from Class Component</h3>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.handleChange(e.target.value)}
          type="text"
        />
        <p>{this.state.inputValue}</p>
      </div>
    );
  }
}

export default ClassComponent;