import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate, useLocation } from "react-router-dom";
import InstructionModal from "./InstructionModal";
import IngredientModal from "./IngredientModal";

function RecipeFormCookbook() {
  const navigate = useNavigate();
  const location = useLocation();
  const cookbook = location.state && location.state.cookbook;
  const isEdit = !!location.state.recipe;

  const [recipe, setRecipe] = useState(
    location.state.recipe || {
      name: "",
      cookTime: "",
      prepTime: "",
      instructions: [{ instruction: "Step 1" }],
      ingredients: [{ name: "", quantity: "", measurement: "" }],
    }
  );
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [instructionModal, setInstructionModal] = useState(false);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [ingredientsModal, setIngredientsModal] = useState(false);

  const createRecipe = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...recipe,
      instructions: instructions,
      ingredients: ingredients,
    };
    if (
      newRecipe.ingredients.length == 1 &&
      newRecipe.ingredients[0].quantity === ""
    )
      newRecipe.ingredients = [];

    if (
      newRecipe.instructions.length == 1 &&
      newRecipe.instructions[0].instruction === "Step 1"
    )
      newRecipe.instructions = [];

    fetch(`http://localhost:8080/api/recipes/new/${cookbook.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).then((r) => navigate(`/cookbooks/${cookbook.id}`));
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const updateRecipe = () => {
    const newRecipe = {
      ...recipe,
      instructions: instructions,
      ingredients: ingredients,
    };
    fetch(`http://localhost:8080/api/recipes/${recipe.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).then((response) => navigate("cookbooks/"));
  };

  return (
    <div>
      <div className="centerContainer">
        <h4 className="title">
          {isEdit ? "Edit Recipe" : "Create a New Recipe"}
        </h4>
        <Form
          onSubmit={isEdit ? updateRecipe : createRecipe}
          className="formInput"
        >
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
          <span className="leftContainer">
            <Form.Label>Cook Time (Minutes)</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              name="cookTime"
              value={recipe.cookTime}
              onChange={handleChange}
            />
            <Form.Label>Prep Time (Minutes)</Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              name="prepTime"
              value={recipe.prepTime}
              onChange={handleChange}
            />
          </span>
          <ButtonToolbar>
            <Button onClick={() => setInstructionModal(true)}>
              Add Instructions
            </Button>
            <Button onClick={() => setIngredientsModal(true)}>
              Add Ingredients
            </Button>
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup>
              <Button variant="danger" onClick={() => navigate(-1)}>
                Discard
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="primary" type="submit">
                {isEdit ? "Save" : `Save to ${cookbook.name}`}
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      </div>

      {instructionModal && (
        <InstructionModal
          setInstructionModal={setInstructionModal}
          instructions={instructions}
          setInstructionsList={(instructions) => setInstructions(instructions)}
        />
      )}
      {ingredientsModal && (
        <IngredientModal
          setIngredientModal={setIngredientsModal}
          ingredients={ingredients}
          setIngredientsList={(ingredients) => setIngredients(ingredients)}
        />
      )}
    </div>
  );
}

export default RecipeFormCookbook;
