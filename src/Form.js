import React, { Component } from "react";

class Form extends Component {
  state = {
    namee: "ajay",
    data: {
      x: 1,
      y: 3
    }
  };

  handleChange = e => {
    const { data } = this.state;
    const currentState = data;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ data: currentState });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello</h1>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            name="x"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            name="y"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Form;
