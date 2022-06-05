import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Recipe from '../recipe/Recipe';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const params = useParams()


    useEffect(() => {
        fetch(`http://localhost:8080/api/recipes/all`)
        .then(response => response.json())
        .then(data => setRecipes(data))
        
	}, [])


    const createRecipeList = () => {
        return recipes.map(recipe => <a href={`/recipe/${recipe.id}/${params.id}` } className="centerItem" key={recipe.id}>{recipe.name}</a>) 
}
    
    

const updateRecipe = (e) => {
    console.log(e)
    const newRecipe = {...recipe, ...e};
    fetch(`http://localhost:8080/api/recipes/${recipe.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe)
        }
    ).then(response => response.json())
    .then(r => setRecipe(newRecipe))
    
}

const deleteRecipe = (e) => {
    fetch(`http://localhost:8080/api/recipes/${recipe.id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    ).then(
        setRecipe(null)
    )
    
}
  return (
    <div className="centerContainer cookbookIndex">
    {createRecipeList()}
</div>
 
  )
}

export default Recipes