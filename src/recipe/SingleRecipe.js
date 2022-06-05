
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const SingleRecipe = () => {
    let params = useParams()
    const [recipe, setRecipe] = useState(null);


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
        return recipe.instructions.map((instruction, i) => {
            return (
                <li key={instruction.id}>
                    {i + 1}. {instruction.instruction}
                </li>
            )
        })
    }

    const addRecipeToMealplan = (e) => {
		fetch(`http://localhost:8080/api/mealplan/recipe/${params.id}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				}
			})
		
	}

  return (
    <div className="rightContainer">
            <h4 className="title">
                {recipe.name}
               
                
            </h4>
            <div className="sideBySide">
                <div>
                    <p>Prep Time: {recipe.prepTime}</p>
                    <p>Cook Time: {recipe.cookTime}</p>
                </div>
                
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
            <ButtonToolbar>
                <ButtonGroup>
                    <Button variant="danger" onClick={addRecipeToMealplan}>Add Recipe to Mealplan</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default SingleRecipe