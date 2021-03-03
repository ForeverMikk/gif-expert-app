import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   setCategories([...categories, "HunterXHunter"]);
  //   // setCategories([...categories.concat("HunterXHunter")]);
  // };

  return (
    <>
      <h2>Aplicacion de GifExpertApp</h2>
      <hr />

      <AddCategory />

      <ul>
        {categories.map((category) => {
          console.log(category);
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </>
  );
};
