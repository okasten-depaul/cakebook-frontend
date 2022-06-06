import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hasMealplans } from "../redux/reducers/userSlice";

function MealplanForm() {
  const navigate = useNavigate();
  const userInformation = useSelector((store) => store.userInformation);
  const dispatch = useDispatch();

  const addingMp = (event) => {
    addMealplan(event);
    dispatch(hasMealplans(userInformation));
    alert("New Mealplan added to My Mealplans");
    window.location.reload();
  };
  const addMealplan = (event) => {
    event.preventDefault();

    axios.post(
      `${process.env.REACT_APP_API_URI}/api/mealplan/new/${userInformation.id}`,
      {
        name: event.currentTarget[0].value,
      }
    );

    navigate("/mealplans");
  };

  return (
    <div className="centerContainer cookbookForm">
      <h4 className="title">Create a New Mealplan</h4>
      <Form onSubmit={addingMp} className="formInput">
        <Form.Label>What week is your mealplan for?</Form.Label>
        <Form.Control type="weekof" placeholder="" />
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default MealplanForm;
