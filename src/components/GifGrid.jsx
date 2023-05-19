import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    const [counter, setCounter] = useState(10);
    
    useEffect(()=> {
        getGifs(category);
    }, []);

    return (
        <>
            <h4>{category}</h4>
            <p>{counter}</p>
            <button onClick={()=> setCounter(counter+1)}>+1</button>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}