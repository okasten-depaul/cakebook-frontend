import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createNewCookbook } from '../api/cookbook';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CookbookForm() {

  const [cookbook, setCookbook] = useState([])
  const[newCookbook, setNewCookbook] = useState('')

  const addCookbook = (event) => {
    axios.post(`http://localhost:8080/api/cookbook/new/1`, {
      name: newCookbook,
    })
    .then((response) => {console.log('Cookbook created!') })

    setCookbook([...cookbook, newCookbook])
    setNewCookbook('')
  }

  const createCookbook = (e) => {
    //need an async await here probably
    e.preventDefault();
    createNewCookbook(e.currentTarget[0].value);
  }

  return(
    <div className="centerContainer cookbookForm">
      <h4 className="title">Create a New Cookbook</h4>
      <Form onSubmit={createCookbook} className="formInput">
        <Form.Label>What do you want to call it?</Form.Label>
        <Form.Control type="name" placeholder="" onChange ={(event) => setNewCookbook(event.target.value)}/>
        <Button onClick={addCookbook} variant="primary" type="submit">Save</Button>
      </Form>

    </div>
  )
}

export default CookbookForm;