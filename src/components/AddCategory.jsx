import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');  

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // Si el valor ingresado es menor o iguala 1 no actualiza el valor
        if(inputValue.trim().length <= 1 ) return;


        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('')
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={inputValue}
                onChange={onInputChange}
            />

            <button type="submit">Agregar</button>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func
}

export default AddCategory;