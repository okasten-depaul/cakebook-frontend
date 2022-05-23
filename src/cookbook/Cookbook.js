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
		fetch(`http://localhost:8080/api/cookbook/get/${cookbookId}`)
		.then(response => response.json())
		.then(cookbooks => setCookbook(cookbooks.find(cookbook => cookbook.id === cookbookId)))
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
			<ButtonToolbar style={{justifyContent: 'space-around'}}>
				<ButtonGroup>
					<Button variant="primary" onClick={() => navigate('/recipes/new', {cookbookId: cookbook.id})}>Add New Recipe</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button variant="primary">Add Existing Recipe</Button>
				</ButtonGroup>
			</ButtonToolbar>
		)
	}
	
	const updateRecipe = (e) => {
		console.log(e)
	}

	return(
		<div className="sideBySide">
			{cookbook && cookbookContainer()}
			{recipe && <Recipe recipe={recipe} updateRecipe={e => updateRecipe(e)}/>}
		</div>
		
	)
}

export default Cookbook;