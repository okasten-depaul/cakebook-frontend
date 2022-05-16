import React, { useState } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';

function Recipe(props){
    const [recipe, setRecipe] = useState(props.recipe);

    return (
        <div className="rightContainer">
            <h4 className="title">
                {recipe.name}
                {recipe.is_favorite ? <StarFill color={recipe.is_favorite && 'gold'}/> : <Star/>}
                
            </h4>
            <div className="timing">
                <p>Prep Time: {recipe.prep_time}</p>
                <p>Cook Time: {recipe.cook_time}</p>
            </div>
            <div></div>
        </div>
    )
}

export default Recipe;