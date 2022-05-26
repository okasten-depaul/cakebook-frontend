import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BoxArrowInDownRight, PlusCircle } from 'react-bootstrap-icons';

function IngredientModal(props){
    const [type, setType] = useState('cup')

    const ingredientsList = () => {
        return props.ingredients.map(ingredient => {
            return (
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Form.Control key={`${ingredient.name}`} type="text" placeholder={ingredient.name || `Ingredient name`}/>
                    <Form.Control key={`${ingredient.quantity}`} type="number" placeholder={ingredient.quantity || 'Quantity'}/>
                    <Form.Select key={ingredient} onChange={e => updateMeasurement(e, ingredient)} value={ingredient.measurement}>
                        <option value="cup">Cup</option>
                        <option value="tablespoon">Tablespoon</option>
                        <option value="teaspoon">Teaspoon</option>
                    </Form.Select>
                </div>
            )
        })
    }

    const updateMeasurement = (e, ingredient) => {
        const targetIndex = props.ingredients.findIndex(ing => ing === ingredient)
        let newList = [...props.ingredients]
        newList[targetIndex]['measurement'] = e.target.value;

        props.setIngredientsList(newList);
    }

    const addIngredient = (e) => {
        const ingredients = e.target
        let newList = [];
        for(let i = 0; i < ingredients.length - 3; i += 3)
            newList.push({name: ingredients[i].value, quantity: ingredients[i+1].value, measurement: ingredients[i+2].value})

        props.setIngredientsList(newList);
    }

    const handleClose = () => {
        props.setIngredientModal(false);
    }

    const handleSave = (e) => {
        addIngredient(e);
        props.setIngredientModal(false)
    }

    const addNewLine = () => {
        props.setIngredientsList([...props.ingredients, {name: '', quantity: '', measurement: ''}])
    }

    return (
        <Form onSubmit={handleSave}>
        <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">Ingredients</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {ingredientsList()}
                <div className="ingredientForm">
                    <PlusCircle onClick={addNewLine} style={{marginLeft: '100%'}}/>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" type="submit">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Form>
    )
}

export default IngredientModal;