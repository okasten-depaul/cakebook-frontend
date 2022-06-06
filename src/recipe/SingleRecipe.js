import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonGroup, ButtonToolbar } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Recipe from "./Recipe";

function SingleRecipe(r) {
  let params = useParams();
  const recipe = r.recipe;
  const navigate = useNavigate();

  console.log(recipe);
  console.log(recipe.name);

  const addToMealplan = () => {
    const mealplan = {
      id: params.id,
    };
    axios.post(`http://localhost:8080/api/mealplan/recipe/${recipe.id}`, {
      id: params.id,
    });
  };

  const toMealplans = () => {
    navigate(`/mealplans/${params.id}`);
  };

  const ingredientList = () => {
    return recipe.ingredients.map((ing) => {
      return (
        <li key={ing.id}>
          <div>{ing.name}</div>
          <div>
            {ing.quantity} {ing.measurement}
          </div>
        </li>
      );
    });
  };

  const instructionList = () => {
    return recipe.instructions.map((instruction, i) => {
      return (
        <li key={instruction.id}>
          {i + 1}. {instruction.instruction}
        </li>
      );
    });
  };

  return (
    <div className="leftContainer">
      <h4 className="title">{recipe.name}</h4>
      <div className="sideBySide">
        <div>
          <p>Prep Time: {recipe.prepTime} Minutes</p>
          <p>Cook Time: {recipe.cookTime} Minutes</p>
        </div>
      </div>
      <div className="sideBySide">
        <div className="internalBox leftContainer">
          Ingredients
          <ul className="u-textLeft">{ingredientList()}</ul>
        </div>
        <div className="internalBox rightContainer">
          Instructions
          <ol className="u-textLeft">{instructionList()}</ol>
        </div>
      </div>
      <ButtonToolbar>
        <ButtonGroup>
          <Button variant="danger" onClick={addToMealplan()}>
            Add to Mealplan
          </Button>
        </ButtonGroup>
        <ButtonGroup></ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default SingleRecipe;
