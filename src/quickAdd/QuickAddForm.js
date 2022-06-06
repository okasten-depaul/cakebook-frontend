import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import {  useSelector } from 'react-redux'

function QuickAddForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [cookbooks, setCookbooks] = useState([]);
    const [cookbook, setCookbook] = useState((location.state && location.state.cookbook) || null);
    const [recipe, setRecipe] = useState((location.state && location.state.recipe) || null);

    const userInformation = useSelector((store) => store.userInformation)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/api/cookbook/get/${userInformation.id}`)
        .then(r => r.json())
        .then(cookbooks => setCookbooks(cookbooks))
    })

    const createCookbookOptions = () => {
        return cookbooks.map(cookbook => <option key={cookbook.id} value={cookbook.id}>{cookbook.name}</option>)
    }

    const handleChange = (e) => {
        const c = cookbooks.find(cb => cb.id === e.currentTarget.value);
        setCookbook(c);
    }

    const formRecipe = (newRecipe, cookbookId) => {
        delete(newRecipe.id);
        delete(newRecipe.favorite);
        delete(newRecipe.isPublic);
        delete(newRecipe.author)
        newRecipe.instructions = newRecipe.instructions.map(ins => ({'instruction': ins.instruction}))
        newRecipe.ingredients.forEach(ing => {
            delete(ing.id);
            ing['quantity'] = ing['quantity'].toString();
        })
        newRecipe.prepTime = newRecipe.prepTime.toString();
        newRecipe.cookTime = newRecipe.cookTime.toString();
        newRecipe.name = newRecipe.name + ` (copy ${cookbookId})`
        return newRecipe
    }

    const addRecipe = (e) => {
        e.preventDefault();
        let newRecipe = {...recipe}
        let cookbookId = e.currentTarget[0].value;
        newRecipe = formRecipe(newRecipe, cookbookId);

        fetch(`${process.env.REACT_APP_API_URI}/api/recipes/new/${cookbookId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRecipe)
            }
        ).then(r => navigate(`/cookbooks/${cookbookId}`))
        .catch(console.log)
    }

    const fromSearchForm = () => {
        return (
            <Form onSubmit={addRecipe} className="formInput">
                <Form.Label>Select a Cookbook</Form.Label>
                <Form.Select onChange={handleChange}>
                    {createCookbookOptions()}
                </Form.Select>

                <Form.Label>Select a Recipe</Form.Label>
                <Form.Control disabled key={recipe.id} value={recipe.name} type="text"/>

                <Button type="submit">Save</Button>
            </Form>
        )
    }

    return(
        <div className="centerContainer cookbookForm">
            <h4 className="title">Add Recipe to Cookbook</h4>
            {fromSearchForm()}
        </div>
    )
}

export default QuickAddForm;
