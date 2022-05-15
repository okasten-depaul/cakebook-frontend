import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createNewCookbook } from '../api/cookbook';

function CookbookForm() {

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
        <Form.Control type="name" placeholder=""/>
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  )
}

export default CookbookForm;