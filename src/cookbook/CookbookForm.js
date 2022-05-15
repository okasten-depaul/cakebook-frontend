import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createNewCookbook } from '../api/cookbook'

const createCookbook = () => {
  //need an async await here probably
  createNewCookbook()
}

function CookbookForm() {
  return(
    <div className="centerContainer cookbookForm">
      <h4 className="title">Create a New Cookbook</h4>
      <Form className="formInput">
        <Form.Label>What do you want to call it?</Form.Label>
        <Form.Control type="name" placeholder=""/>
        <Button onClick={createCookbook()} variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  )
}

export default CookbookForm;