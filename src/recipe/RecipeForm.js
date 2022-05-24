import { PlusCircle } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate, useLocation } from 'react-router-dom';

function RecipeForm() {
    const [instructions, setInstructions] = useState({1: ''})
    let recipe = {name: '', cookTime: '', prepTime: '', instructions: []};
    const navigate = useNavigate();
    const location = useLocation();
    const cookbook = location.state.cookbook

    const createRecipe = (e) => {
        e.preventDefault();
        recipe['name'] = e.target[0].value;
        recipe['cookTime'] = e.target[1].value;
        recipe['prepTime'] = e.target[2].value;
        for(let i = 3; i < e.target.length - 1; i++){
            recipe['instructions'].push(e.target[i].value)
        }
        recipe['cookbookId'] = cookbook.id;
        
        fetch(`http://localhost:8080/api/recipes/new/${cookbook.id}`,
            {
                method: 'POST',
                'Content-Type': 'application/json',
                body: JSON.stringify(recipe)
            }
        ).then(r => r.json())
        .then(() => navigate(-1))
    }

    const instructionsList = () => {
        return Object.keys(instructions).map(num => {
            return (
                <Form.Control key={num} type="text" placeholder={`Step ${num}`} className="instruction"/>
            )
        })
    }

    const addInstruction = (e) => {
        const newIndex = Object.keys(instructions).length + 1;
        setInstructions({...instructions, [newIndex]: `Step ${newIndex}`})
    }

    return (
        <div className="centerContainer">
            <h4 className="title">Create a New Recipe</h4>
            <Form onSubmit={createRecipe} className="formInput">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="text" placeholder="" key="recipeName"/>
                <div className="leftContainer">
                    <Form.Label>Cook Time</Form.Label>
                    <Form.Control type="text" placeholder="" key="cookTime" />
                    <Form.Label>Prep Time</Form.Label>
                    <Form.Control type="text" placeholder="" key="prepTime"/>
                </div>
                <div className="leftContainer">
                    <div>
                        Instructions
                    </div>
                    <div className="instructionForm">
                        {instructionsList()}
                        <PlusCircle onClick={addInstruction} style={{marginLeft: '100%'}}/>
                    </div>
                </div>
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
    )
}

export default RecipeForm;