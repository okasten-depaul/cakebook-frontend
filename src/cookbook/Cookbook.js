import React, { useState, useEffect } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { getCookbook } from '../api/cookbook';
import Recipe from '../recipe/Recipe';

function Cookbook() { 

	const [cookbook, setCookbook] = useState({name: ''});
	const [recipe, setRecipe] = useState({});

	useEffect(() => {
		setCookbook(getCookbook(window.location.pathname.match(/([1-9])+/g)[0]));
	}, [cookbook])

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
		return cookbook.recipes && cookbook.recipes.map(recipe => {
			return <h5 onClick={() => setRecipe(recipe)} key={recipe.id} className="title">{recipe.name}</h5>
		})
	}

	const bottomButtons = () => {
		return (
			<ButtonToolbar className=" justify-content-between">
				<ButtonGroup>
					<Button variant="primary">Add New Recipe</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button variant="primary">Add Existing Recipe</Button>
				</ButtonGroup>
			</ButtonToolbar>
		)
	}
	
	return(
		<div className="sideBySide">
			{cookbookContainer()}
			{recipe.id && <Recipe recipe={recipe}/>}
		</div>
		
	)
}

export default Cookbook;