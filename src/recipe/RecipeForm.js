import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate, useLocation } from 'react-router-dom';
import InstructionModal from './InstructionModal';
import IngredientModal from './IngredientModal';

function RecipeForm() {
    const [instructions, setInstructions] = useState([{instruction: 'Step 1'}]);
    const [instructionModal, setInstructionModal] = useState(false);
    const [ingredients, setIngredients] = useState([{name: '', quantity: '', measurement: ''}])
    const [ingredientsModal, setIngredientsModal] = useState(false);

    const modifyRecipe = () => {
        if(recipe.ingredients.length == 1 && recipe.ingredients[0].quantity === "")
            recipe.ingredients = [];

        if(recipe.instructions.length == 1 && recipe.instructions[0].instruction === 'Step 1')
            recipe.instructions = [];
    }


    let recipe = {name: '', cookTime: '', prepTime: '', instructions: [], ingredients: []};
    const navigate = useNavigate();
    const location = useLocation();
    const cookbook = location.state.cookbook

    const createRecipe = (e) => {
        e.preventDefault();
        recipe['name'] = e.target[0].value;
        recipe['cookTime'] = e.target[1].value;
        recipe['prepTime'] = e.target[2].value;
        recipe['instructions'] = instructions;
        recipe['ingredients'] = ingredients;
        modifyRecipe();
        
        fetch(`http://localhost:8080/api/recipes/new/${cookbook.id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recipe)
            }
        ).then(r => navigate(-1))
    }

    return (
        <div>
            <div className="centerContainer">
                <h4 className="title">Create a New Recipe</h4>
                <Form onSubmit={createRecipe} className="formInput">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder="" key="recipeName"/>
                    <span className="leftContainer">
                        <Form.Label>Cook Time</Form.Label>
                        <Form.Control type="text" placeholder="" key="cookTime" />
                        <Form.Label>Prep Time</Form.Label>
                        <Form.Control type="text" placeholder="" key="prepTime"/>
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
                            <Button variant="danger" onClick={() => navigate(-1)}>Discard</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button variant="primary" type="submit">Save to {cookbook.name}</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Form>
            </div>

            {instructionModal && <InstructionModal setInstructionModal={setInstructionModal} instructions={instructions} setInstructionsList={(instructions) => setInstructions(instructions)}/>}
            {ingredientsModal && <IngredientModal setIngredientModal={setIngredientsModal} ingredients={ingredients} setIngredientsList={(ingredients) => setIngredients(ingredients)}/>}
        </div>
    )
}

export default RecipeForm;