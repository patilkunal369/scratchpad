import React from "react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="container">
      <svg className="loader" viewBox="0 0 24 24">
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
      </svg>
    </div>
  );
};

export default Spinner;
