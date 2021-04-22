import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterString: "",
      favArray: ["Benz SUV", "Bora Bora", "Yoga", "Family"]
    };
  }
  handleChange(filter) {
    this.setState({ filterString: filter });
  }
  render() {
    let favArrayDisplay = this.state.favArray
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      <div class="App">
        <input
          onchange={(e) => this.handleChange(e.target.value)}
          type="text"
        />
        {favArrayDisplay}
      </div>
    );
  }
}

export default ClassComponent;
//why isnt the data filtering?