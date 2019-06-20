import React, { Component } from "react";
import InputTag from "./InputTag";

class Form extends Component {
  state = {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <InputTag
            onChange={() => this.handleInputChange()}
            name="fname"
            type="text"
            placeholder="First Name"
            required
            className="rounded-textfield float-label-input"
            id="firstName"
          />
        </form>
      </div>
    );
  }
}

export default Form;
