import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "HunterXHunter"]);
  //   // setCategories([...categories.concat("HunterXHunter")]);
  // };

  return (
    <>
      <h2>Aplicacion de GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ul>
    </>
  );
};
