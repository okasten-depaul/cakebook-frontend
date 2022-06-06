import React from "react";
import { ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Recipe(props) {
  const { recipe, updateRecipe, deleteRecipe } = props;
  const navigate = useNavigate();

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

  const editRecipe = () => {
    navigate(`/recipes/edit/${recipe.id}`, { state: { recipe: recipe } });
  };

  const addToCookbook = () => {
    navigate(`/quick-add`, { state: { recipe: recipe } });
  };

  return (
    <div className="rightContainer">
      <h4 className="title">
        {recipe.name}
        {!props.fromSearch &&
          (recipe.favorite ? (
            <StarFill
              onClick={() => updateRecipe({ favorite: false })}
              className="star"
              color="gold"
            />
          ) : (
            <Star
              onClick={() => updateRecipe({ favorite: true })}
              className="star"
            />
          ))}
      </h4>
      <div className="sideBySide">
        <div>
          <p>Prep Time(minutes): {recipe.prepTime}</p>
          <p>Cook Time(minutes): {recipe.cookTime}</p>
        </div>
        {!props.fromSearch && (
          <Button
            variant="warning"
            size="sm"
            onClick={() => updateRecipe({ isPublic: !recipe.isPublic })}
          >
            Make {recipe.isPublic ? "Private" : "Public"}
          </Button>
        )}
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
      {!props.fromSearch && (
        <ButtonToolbar>
          <ButtonGroup>
            <Button variant="danger" onClick={deleteRecipe}>
              Delete Recipe
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="primary" onClick={editRecipe}>
              Edit Recipe
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      )}
      {props.fromSearch && (
        <ButtonToolbar>
          <Button variant="primary" onClick={addToCookbook}>
            Add to Existing Cookbook
          </Button>
        </ButtonToolbar>
      )}
    </div>
  );
}

export default Recipe;
