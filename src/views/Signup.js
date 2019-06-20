import React, { Component } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Form from "../components/Form";

class Signup extends Component {
  state = {
    loading: false
  };

  render() {
    return (
      <div className="signup-page">
        {this.state.loading ? <Loader /> : ""}
        <div className="signup--element-container">
          <Header />
          <div
            class="already-have-account-below-logo"
            style={{ display: "none" }}
          >
            <p>
              Already have an account? <p>Sign In</p>
            </p>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Signup;
