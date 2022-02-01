import "./Input.css"

import React from 'react';

const Input = ({ text, result}) => {
  return (
      <div className="input-wrapper">
            <div className="result">
                <span> { result }</span>
            </div>
            <div className="text">
                <span> { text }</span>
            </div>
      </div>
  );
};

export default Input;
