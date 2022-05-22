import { PlusCircle } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function RecipeForm() {
    const [instructions, setInstructions] = useState({1: ''})
    let recipe = {name: '', cookTime: '', prepTime: '', instructions: []};

    const createRecipe = (e) => {
        e.preventDefault();
        recipe['name'] = e.target[0].value;
        recipe['cookTime'] = e.target[1].value;
        recipe['prepTime'] = e.target[2].value;
        for(let i = 3; i < e.target.length - 1; i++){
            recipe['instructions'].push(e.target[i].value)
        }
        console.log(recipe);

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
        debugger
        setInstructions({...instructions, [newIndex]: `Step ${newIndex}`})
    }

    return (
        <div className="centerContainer">
            <h4 className="title">Create a New Recipe</h4>
            <Form onSubmit={createRecipe} className="formInput">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="text" placeholder="" key="recipeName"/>
                <div>
                    <Form.Label>Cook Time</Form.Label>
                    <Form.Control type="text" placeholder="" key="cookTime" />
                    <Form.Label>Prep Time</Form.Label>
                    <Form.Control type="text" placeholder="" key="prepTime"/>
                </div>
                <div>
                    Instructions
                </div>
                
                <div className="instructionForm">
                    {instructionsList()}
                    <PlusCircle onClick={addInstruction} style={{marginLeft: '100%'}}/>
                </div>

                <Button variant="primary" type="submit">Save</Button>
                
            </Form>

        </div>
    )
}

export default RecipeForm;