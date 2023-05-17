import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon BarProp']);
    // const apiKey = 'PwoOVKqTZhYP4clsAkwqrZ1ueTYAHGnd';

    // const onAddCategory = () => {
    //     setCategories(['Nueva Categoria', ...categories]);
    // }

    return(
        <>
            {/* Titulo */}
            <h1>GifExpert App</h1>

            {/* Input */}
            <AddCategory setCategories={setCategories} categories={categories} />

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