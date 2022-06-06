import React, { useState, useEffect } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Recipe from "../recipe/Recipe";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Cookbook() {
  const [cookbook, setCookbook] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  const userInformation = useSelector((store) => store.userInformation);


	useEffect(() => {
		const cookbookId = parseInt(window.location.pathname.match(/([1-9])+/g)[0]);
		fetch(`${process.env.REACT_APP_API_URI}/api/cookbook/get/${userInformation.id}`)
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
    );
  };

  const recipeList = () => {
    return cookbook.recipes.map((recipe) => {
      return (
        <h5 onClick={() => setRecipe(recipe)} key={recipe.id} className="title">
          {recipe.name}
        </h5>
      );
    });
  };


	const deleteCookbook = () => {
		fetch(`${process.env.REACT_APP_API_URI}/api/cookbook/delete/${cookbook.id}/${userInformation.id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				}
			}
		)
		.then(navigate('/cookbooks'))
	}


  const bottomButtons = () => {
    return (
      <ButtonToolbar>
        <ButtonGroup>
          <Button variant="danger" onClick={deleteCookbook}>
            Delete Cookbook
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() =>
              navigate("/recipes/new", { state: { cookbook: cookbook } })
            }
          >
            Add New Recipe
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  };

  const updateRecipe = (e) => {
		console.log(e)
		const newRecipe = {...recipe, ...e};

		fetch(`${process.env.REACT_APP_API_URI}/api/recipes/${recipe.id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newRecipe)
			}
		).then(response => setRecipe(newRecipe))
	}

	const deleteRecipe = (e) => {
		fetch(`${process.env.REACT_APP_API_URI}/api/recipes/${recipe.id}`,
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


  return (
    <div className="sideBySide">
      {cookbook && cookbookContainer()}
      {recipe && (
        <Recipe
          recipe={recipe}
          updateRecipe={(e) => updateRecipe(e)}
          deleteRecipe={deleteRecipe}
		  cookbook={cookbook}
        />
      )}
    </div>
  );
}

export default Cookbook;
