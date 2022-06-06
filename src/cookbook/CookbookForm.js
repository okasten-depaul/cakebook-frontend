import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hasCookbooks } from "../redux/reducers/userSlice";

function CookbookForm() {
  const navigate = useNavigate();
  const userInformation = useSelector((store) => store.userInformation);
  const dispatch = useDispatch();

  const addingCB = (event) => {
    addCookbook(event);
    dispatch(hasCookbooks(userInformation));
    alert("New Cookbook added to MyCookbooks");
    window.location.reload();
  };
  const addCookbook = (event) => {
    event.preventDefault();
    axios.post(
      `${process.env.REACT_APP_API_URI}/api/cookbook/new/${userInformation.id}`,
      {
        name: event.currentTarget[0].value,
      }
    );

    navigate("/cookbooks");
  };

  return (
    <div className="centerContainer cookbookForm">
      <h4 className="title">Create a New Cookbook</h4>
      <Form onSubmit={addingCB} className="formInput">
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
