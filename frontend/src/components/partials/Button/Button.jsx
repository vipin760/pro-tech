import React from "react";
import "./Button.css";
const Button = () => {
  return (
    <div>
      <button>
        Contact US
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </div>
  );
};

export default Button;
