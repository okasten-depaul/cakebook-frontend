import React, { useState } from 'react';
import SearchForm from './SearchForm';
import Recipe from '../recipe/Recipe';

function SearchContainer() {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const e = []

    const formatSearchString = input => {
        let searchString = "";
        Object.keys(input).forEach(key => {
            if(!!input[key]){
                input[key].split(',').forEach(val => {
                    searchString += `${key}=${val.trim()}`
                })
            }  
        })
        return searchString;
    }

    const handleSearch = (e, formInput) => {
        e.preventDefault();

        if(formInput.ingredient)
            formInput.ingredient = formInput.ingredient.replace(/[0-9]/g, '')

        fetch(`${process.env.REACT_APP_API_URI}/api/recipes/all/${formatSearchString(formInput)}`)
        .then(r => r.json())
        .then(recipes => setRecipes(recipes))
        .catch(error => {console.log(error); e.push(error)} )

        console.log(recipes.length)
        
    }

   

    const recipesContainer = () => {

      if(recipeList()!=0){
        return (
            <div className="leftContainer">
                <h3 className="title">Search Results</h3>
                {recipeList()}
            </div>
        )
      }
      return(
      <div className="leftContainer">
        <h3 className="title">Search Results</h3>
      <h5 className = "text-center"> No search results yet!</h5>
  </div>
      )
    }

    const recipeList = () => {
      if(recipes.length > 0){
        return recipes.map(recipe => {
            return <h5 onClick={() => setRecipe(recipe)} key={recipe.id} className="title">{recipe.name}</h5>
        })
      }
      else   return 0
    }

    return (
        <>
            <SearchForm handleSearch={handleSearch}/>
            
            <div className="sideBySide">
                {recipes && recipesContainer()}
                {recipe && <Recipe recipe={recipe} fromSearch />}
            </div>
        </>
    )
}

export default SearchContainer;