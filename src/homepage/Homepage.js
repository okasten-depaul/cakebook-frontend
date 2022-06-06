import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { AlignCenter, App, Images } from "react-bootstrap-icons";
import "../App.css";
import HomeRecipes from "./HomeRecipes";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const userInformation = useSelector((store) => store.userInformation);
  const userName = userInformation.username;
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const randomRecipe = null
  const navigate = useNavigate()
  console.log(userName);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/api/recipes/all`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(recipes);

  const createRandomRecList = () => {
    if(recipes.length>0){
    const rr = recipes.sort(() => Math.random() - Math.random())
                     .find(() => true);
    return (
    <div>
      <div className ="card text-light bg-primary mb-3">
      <h5> {rr.name}</h5>
      <h5> Cook time: {rr.cookTime} </h5>
      <h5> Prep time: {rr.prepTime} </h5>
      </div>
      <div class="card text-primary border-primary mb-3"> Instructions: {instructionList(rr)} <div>    </div>Ingredients: {ingredientList(rr)}</div>
      
      </div>
    )
    } 
    return <h5> "Looking for recipe recommendations...</h5>

    
  }

  const instructionList = (rr) => {
    return rr.instructions.map((instruction, i) => {
      return (
        <div ><li key={instruction.id}>
          {i + 1}. {instruction.instruction}
        </li>
        </div>
      );
    });
  };


  const ingredientList = (rr) => {
    return rr.ingredients.map((ing) => {
      return (
        <li key={ing.id}>
          <div>{ing.name}</div>
          <div>
            {ing.quantity} {ing.measurement}
          </div>
        </li>
      );
    });
  };

  const displayRandomRecipe = () => {
    if (userInformation.isLoggedIn) {
      return (
        <div className="card border-warning bg-primary mb-3">
          <div className = "card text-light  bg-primary mb-3"> <h3 className="text-center" font-size="100px" font-color="light">
            {" "}
            Recipes Recommended for {userName} 
          </h3>
          </div>
          <h5 className="text-center"> {recipes && createRandomRecList()}</h5>
          <ButtonToolbar>
        <ButtonGroup>
          <Button
            variant="light"
            onClick={() =>
              navigate(`/cookbooks/new`)
            }
 >
           Create a cookbook to start adding your own recipes!
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
        </div>
      );
    }
    return (
      <div className="card border-warning bg-light mb-3">
        <h3 className="text-center" font-size="100px">
          {" "}
          Who are you?
        </h3>
        <a style={{ color: "light" }} href={`/sign-up`} className="text-center">
          Log in to get recipe recommendations, create cookbooks, mealplans and
          more!
        </a>
      </div>
    );
  };


  const createRecipeList = () => {
    return recipes.map((recipe) => {
      return (
        <h5 onClick={() => setRecipe(recipe)} key={recipe.id} className="title">
          {recipe.name}
        </h5>
      );
    });
  };


  console.log(userInformation);
  console.log(userInformation.isLoggedIn);
  const displayUserName = () => {
    if (userInformation.isLoggedIn) {
      return <h1 className="text-center"> {userName}'s Cakebook</h1>;
    }
    return <h1 className="text-center"> Cakebook</h1>;
  };

  

  

 

  const displayRecipeRecs = () => {
    if (userInformation.isLoggedIn) {
      return (
        <div className="card text-light border-warning bg-primary mb-3">
          <h3 className="text-center" font-size="100px">
            {" "}
            Recipes Recommended for {userName} 
          </h3>
          <h5 className="text-center"> {recipes && createRecipeList()}</h5>
          <ButtonToolbar>
        <ButtonGroup>
          <Button
            variant="light"
            onClick={() =>
              navigate(`/cookbooks/new`)
            }
 >
           Create a cookbook to start adding your own recipes!
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
        </div>
      );
    }
    return (
      <div className="card text-dark border-warning bg-light mb-3">
        <h3 className="text-center" font-size="100px">
          {" "}
          Who are you?
        </h3>
        <a style={{ color: "light" }} href={`/sign-up`} className="text-center">
          Log in to get recipe recommendations, create cookbooks, mealplans and
          more!
        </a>
      </div>
    );
  };

  return (
    <div>
      <div style={{ padding: "25px", topMargin: "25px" }}>
        {displayUserName()}
        <p className="text-center" fontSize="100px">
          {" "}
          Search for Recipes, Add Recipes to Cookbooks, Plan Meals for the Week
        </p>

        <div class="container">
          <div class="row justify-content-md-center form-group">
            <div class="col-2">
              <div
                style={{
                  padding: "25 px",
                  display: "block",
                  float: "right",
                  rightMargin: "5px",
                }}
              >
                <img
                  rightMargin="10px"
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2022/06/Detroit-Style-Tomato-Herb-Pepperoni-Pizza-1-680x1020.jpg"
                  height="270px"
                  class="rounded float-right"
                />
              </div>
            </div>
            <div class="col-6">  {displayRandomRecipe()} </div>
            <div class="col-2">
              <div className="images_left">
                <img
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2022/05/Chili-Crisp-Chicken-Mango-Cucumber-Rice-Bowl-1.jpg"
                  height="270px"
                  class="rounded float-right"
                />
              </div>
            </div>
          </div>
          <div class="row justify-content-md-center form-group">
          <div class="col-2"></div>
          <div class="col-2"></div>
          <div class="col-2"></div>
          </div>
          <div class="row justify-content-md-center">
          <div class="col-2" style ={{topMargin: '10px'}}>
              <div
                style={{
                  padding: "25 px",
                  display: "block",
                  float: "right",
                  rightMargin: "5px",
                }}
              >
                <img
                  
                  rightMargin="10px"
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2022/04/Spicy-Chipotle-Honey-Salmon-Bowls-1-680x1020.jpg"
                  height="270px"
                  class="rounded float-right"
                />
              </div>
            </div>
            <div class="col-2">
            <img
                  rightMargin="10px"
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2022/01/5-Ingredient-Chocolate-Almond-Butter-Cookies-8-680x1020.jpg"
                  height="270px"
                  class="rounded float-right"
                />
            </div>
            <div class="col-2">
            <img
                  rightMargin="10px"
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2020/06/Garden-Cherry-Bourbon-Smash-1-680x1020.jpg"
                  height="270px"
                  class="rounded float-right"
                />
            </div>
            <div class="col-2">
            <img
                  rightMargin="10px"
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2022/05/Maple-Glazed-Doughnuts-1-680x1020.jpg"
                  height="270px"
                  class="rounded float-right"
                />
            </div>
            <div class="col-2">
              <div className="images_left">
                <img
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2022/04/Cauliflower-22Pepperoni22-Cheese-Pizza-1-1-680x1020.jpg"
                  height="270px"
                  class="rounded float-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Homepage;
