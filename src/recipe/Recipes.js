import React, { useState, useEffect } from 'react'
import Recipe from '../recipe/Recipe';
import SingleRecipe from '../recipe/SingleRecipe';
import { useDispatch } from 'react-redux'
import {setRecipes} from '../redux/reducers/recipeSlice'
import { useNavigate, useParams } from 'react-router-dom';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/recipes/all`)
        .then(response => response.json())
        .then(data => setRecipes(data))
        console.log("hi")
        
        
	}, [])


    console.log(recipes)
    
    const recipeContainer = () => {
		return (
			<div className="leftContainer">
				<h3 className="title">{"All Recipes"}</h3>
				{createRecipeList()}
			</div>
		)
	}
    
    const createRecipeList = () => {
        return recipes.map(recipe => {
        return <h5 onClick ={() => setRecipe(recipe)}  key={recipe.id} className="title">{recipe.name}</h5>
    })
}
console.log(recipe)

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

const getTimes = () => {

    return <div>
        <h2> Cook Time: {recipe.cookTime}</h2>
        <h2> Prep Time: {recipe.prepTime}</h2>
    
    </div> 

}

const checkRecipe = (recipe) => {

    return (<div> 
       <h1 className = "leftContainer">
    <h2> {getTimes()}</h2>
    <h2> Ingredients: {ingredientList()}</h2>
    <h2> Instructions: {instructionList()}</h2>

    </h1>
    </div>
    )
    }



  return (

    <div>
      
     {recipeContainer()}

  {recipe && <SingleRecipe recipe = {recipe} ></SingleRecipe>} 
  
    </div>
  
      
  
   
  )
   

}

export default Recipes