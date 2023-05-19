import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(()=> {
        getImages();
    }, []);

    return (
        <>
            <h4>{category}</h4>
            <ol className="card-grid">
                {images.map((image) => (
                    // <GifItem key={id} title={title} url={url} /> //Forma tradicional de desestructurar
                    <GifItem key={image.id} {...image} /> //Esparcir las propiedades en caso de tener muchas
                ))}
            </ol>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}