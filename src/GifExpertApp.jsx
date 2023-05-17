import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    // const apiKey = 'PwoOVKqTZhYP4clsAkwqrZ1ueTYAHGnd';

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return; //Si la categoria se repite no te deja ingresarla
        setCategories([newCategory, ...categories]);
    }

    return(
        <>
            {/* Titulo */}
            <h1>GifExpert App</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={value => onAddCategory(value)} 
            />

            {/* Listado de Gifs */}
            <ol>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ol>
                {/* GifItem dentro de la lista de Gifs */}
        </>
    )
}

export default GifExpertApp;