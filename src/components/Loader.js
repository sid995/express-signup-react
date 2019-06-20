import React from "react";
import "./component.scss";

const Loader = () => {
  return (
    <div className="page-redirect-loader">
      <div className="loader-component">
        <span className="loader-component--spinner">
          <div class="loader" />
        </span>
        <div className="loader-component--text">Signing Up</div>
      </div>
    </div>
  );
};

export default Loader;
