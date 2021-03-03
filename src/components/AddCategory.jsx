import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sumbit Hecho");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};
