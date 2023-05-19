import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    // const apiKey = 'PwoOVKqTZhYP4clsAkwqrZ1ueTYAHGnd';

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return; //Si la categoria se repite no te deja ingresarla
        setCategories([newCategory, ...categories]);
    }

    return(
        <>
            <h1>GifExpert App</h1>
            <AddCategory 
                onNewCategory={value => onAddCategory(value)} 
            />
            {categories.map((category) => (
                <GifGrid key={category} category={category}/>
            ))}
        </>
    )
}

export default GifExpertApp;