import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function SearchForm(props) {
    const [form, setForm] = useState({name: '', ingredient: '', cookTime: 0})

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value.trim()})
    }

    return (
        <div className="searchForm">
            <Form onSubmit={(e) => props.handleSearch(form)} className="formInput" style={{margin: '1rem 0 0 2rem'}}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control type="text" name="name" placeholder="Recipe Name" value={form.name} onChange={handleChange}/>
                        <Form.Label>Recipe Name</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="text" name="ingredient" placeholder="Ingredient" value={form.ingredient} onChange={handleChange}/>
                        <Form.Label>Ingredient</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="number" name="cookTime" placeholder="Cook Time (minutes)" value={form.cookTime} onChange={handleChange}/>
                        <Form.Label>Cook Time (minutes)</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button type="submit" style={{marginTop: '0'}}>Search</Button>
                    </Form.Group>
                </Row>
            </Form>
        </div>    
    )
}

export default SearchForm;