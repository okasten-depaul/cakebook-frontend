import React, { useState } from 'react';
import SearchForm from './SearchForm';

function SearchContainer() {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState(null);

    const handleSearch = formInput => {
        if(formInput.ingredient)
            formInput.ingredient = formInput.ingredient.replace(/[0-9]/g, '').trim()
        
        debugger

        fetch(`http://localhost:8080/api/recipes/all?name=${formInput.name}&ingredient=${formInput.ingredient}&cookTime=${formInput.cookTime}`)
        .then(response => response.json())
        .then(recipes => setRecipes(recipes))
    }

    return (
        <>
            <SearchForm handleSearch={handleSearch}/>
            <div className="centerContainer">
                This will be the center container
            </div>
        </>
    )
}

export default SearchContainer;