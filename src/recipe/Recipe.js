import React, { useState } from 'react';

function Recipe(props){
    const [recipe, setRecipe] = useState(props.recipe);

    return (
        <div className="rightContainer">
            This is going to be the recipe
        </div>
    )
}

export default Recipe;