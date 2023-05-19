import PropTypes from 'prop-types';
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);
    // console.log(isLoading);
    
    return (
        <>
            <h4>{category}</h4>
            { isLoading &&  <h2>Cargando...</h2> }
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