import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CookbookForm() {
  return(
    <div className="centerContainer cookbookForm">
      <h4 className="title">Create a New Cookbook</h4>
      <p className="title">What do you want to call it?</p>
      <Form className="formInput">
        <Form.Control type="name" placeholder="Enter cookbook's name"/>
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  )
}

export default CookbookForm;