import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CookbookForm() {
  const navigate = useNavigate();
  const userInformation = useSelector((store) => store.userInformation);

  const addCookbook = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/api/cookbook/new/${userInformation.id}`, {
      name: event.currentTarget[0].value,
    });

    navigate("/cookbooks");
  };

  return (
    <div className="centerContainer cookbookForm">
      <h4 className="title">Create a New Cookbook</h4>
      <Form onSubmit={addCookbook} className="formInput">
        <Form.Label>What do you want to call it?</Form.Label>
        <Form.Control type="name" placeholder="" />
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default CookbookForm;
