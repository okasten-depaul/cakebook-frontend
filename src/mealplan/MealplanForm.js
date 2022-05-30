import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MealplanForm() {
  const navigate = useNavigate();

  const addCookbook = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/api/cookbook/new/1`, {
      name: event.currentTarget[0].value,
    })

    navigate('/mealplans');
  }

  return(
    <div className="centerContainer cookbookForm">
      <h4 className="title">Create a New Mealplan</h4>
      <Form onSubmit={addCookbook} className="formInput">
        <Form.Label>What week is your mealplan for?</Form.Label>
        <Form.Control type="weekof" placeholder="" />
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  )
}

export default MealplanForm;