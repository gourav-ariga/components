import React, { useState } from "react";
const ControlledComponent = () => {
  const [inputValue, SetInputValue] = useState("");

  const handleChange = (event) => {
    SetInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("submited value: " + inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
};

export default ControlledComponent;
