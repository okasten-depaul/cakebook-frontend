import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CookbookForm() {

  const [cookbook, setCookbook] = useState([])
  const [newCookbook, setNewCookbook] = useState('')
  const navigate = useNavigate();

  const addCookbook = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/api/cookbook/new/1`, {
      name: event.currentTarget[0].value,
    })

    navigate('/cookbooks');
  }

  return(
    <div className="centerContainer cookbookForm">
      <h4 className="title">Create a New Cookbook</h4>
      <Form onSubmit={addCookbook} className="formInput">
        <Form.Label>What do you want to call it?</Form.Label>
        <Form.Control type="name" placeholder="" />
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  )
}

export default CookbookForm;