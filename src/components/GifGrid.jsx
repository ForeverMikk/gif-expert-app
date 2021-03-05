import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    //El useEfect ejecuta solo lo que tiene una vez para no recargar todo el componente
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=PwoOVKqTZhYP4clsAkwqrZ1ueTYAHGnd";
    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
    console.log(images);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
          // <GifGridItem key={img.id} img={img} />
        ))}
      </div>
    </>
  );
};
