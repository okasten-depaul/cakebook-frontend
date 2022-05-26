import React, { useState, useEffect } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Recipe from '../recipe/Recipe';
import { useNavigate } from 'react-router-dom';

function Cookbook() { 
	const [cookbook, setCookbook] = useState(null);
	const [recipe, setRecipe] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const cookbookId = parseInt(window.location.pathname.match(/([1-9])+/g)[0]);
		fetch(`http://localhost:8080/api/cookbook/get/1`)
		.then(response => response.json())
		.then(cookbooks => {
			if(cookbooks !== null)
				setCookbook(cookbooks.find(cookbook => cookbook.id === cookbookId))
		})
	}, [])

	const cookbookContainer = () => {
		return (
			<div className="leftContainer">
				<h3 className="title">{cookbook.name}</h3>
				{recipeList()}
				{bottomButtons()}
			</div>
		)
	}

	const recipeList = () => {
		return cookbook.recipes.map(recipe => {
			return <h5 onClick={() => setRecipe(recipe)} key={recipe.id} className="title">{recipe.name}</h5>
		})
	}

	const bottomButtons = () => {
		return (
			<ButtonToolbar>
				<ButtonGroup>
					<Button variant="primary" onClick={() => navigate('/recipes/new', {state: {cookbook: cookbook}})}>Add New Recipe</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button variant="primary" onClick={'x'}>Add Existing Recipe</Button>
				</ButtonGroup>
			</ButtonToolbar>
		)
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
		).then(r => {
			cookbook.recipes = cookbook.recipes.filter(r => recipe.id !== r.id);
			setCookbook(cookbook);
			setRecipe(null);
		})
		
	}

	return(
		<div className="sideBySide">
			{cookbook && cookbookContainer()}
			{recipe && <Recipe recipe={recipe} updateRecipe={e => updateRecipe(e)} deleteRecipe={deleteRecipe}/>}
		</div>
	)
}

export default Cookbook;