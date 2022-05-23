import React from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

function Recipe(props){
    const { recipe, updateRecipe } = props;
    debugger
    const ingredientList = () => {
        return recipe.ingredients.map(ing => {
            return (
                <li key={ing.id}>
                    <div>
                        {ing.name}
                    </div>
                    <div>
                        {ing.quantity} {ing.measurement}
                    </div>            
                </li>)
        })
    }

    const instructionList = () => {
        return recipe.intstructions.map((instruction, i) => {
            return (
                <li key={instruction.id}>
                    {i}. {instruction}
                </li>
            )
        })
    }

    return (
        <div className="rightContainer">
            <h4 className="title">
                {recipe.name}
                {recipe.favorite ? <StarFill onClick={() => updateRecipe({favorite: false})} className="star" color='gold'/> : <Star onClick={() => updateRecipe({favorite: true})} className="star"/>}
                
            </h4>
            <div className="sideBySide">
                <div>
                    <p>Prep Time: {recipe.prepTime}</p>
                    <p>Cook Time: {recipe.cookTime}</p>
                </div>
                <Button variant="warning" size="sm" onClick={() => updateRecipe({isPublic: !recipe.isPublic})}>Make {recipe.isPublic ? 'Private' : 'Public'}</Button>
            </div>
            <div className="sideBySide">
                <div className="internalBox leftContainer">
                    Ingredients
                    <ul className="u-textLeft">
                        {ingredientList()}
                    </ul>
                </div>
                <div className="internalBox rightContainer">
                    Instructions
                    <ol className="u-textLeft">
                        {instructionList()}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Recipe;