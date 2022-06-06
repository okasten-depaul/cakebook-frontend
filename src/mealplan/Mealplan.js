import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Recipe from "../recipe/Recipe";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Mealplan() {
  const [mealplan, setMealplan] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  const userInformation = useSelector((store) => store.userInformation);
  let params = useParams();
  console.log(userInformation.id);
  console.log(params.id);

  useEffect(() => {
    const mealplanId = params.id;
    console.log(mealplanId);
    fetch(`http://localhost:8080/api/mealplan/get/${userInformation.id}`)
      .then((response) => response.json())
      .then((mealplans) => {
        if (mealplans !== null)
          setMealplan(mealplans.find((mealplan) => mealplan.id == mealplanId));
      });
  }, []);

  const mealplanContainer = () => {
    return (
      <div className="leftContainer">
        <h3 className="title">{mealplan.name}</h3>
        {recipeList()}
        {bottomButtons()}
      </div>
    );
  };

  const recipeList = () => {
    return mealplan.recipes.map((recipe) => {
      return (
        <h5 onClick={() => setRecipe(recipe)} key={recipe.id} className="title">
          {recipe.name}
        </h5>
      );
    });
  };

  const bottomButtons = () => {
    return (
      <ButtonToolbar>
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() =>
              navigate(`/recipes/all/${mealplan.id}`, {
                state: { mealplan: mealplan },
              })
            }
          >
            Add Recipe
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  };

  const updateRecipe = (e) => {
    console.log(e);
    const newRecipe = { ...recipe, ...e };
    fetch(`http://localhost:8080/api/recipes/${recipe.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then((r) => setRecipe(newRecipe));
  };

  const deleteRecipe = (e) => {
    fetch(`http://localhost:8080/api/recipes/${recipe.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      mealplan.recipes = mealplan.recipes.filter((r) => recipe.id !== r.id);
      setMealplan(mealplan);
      setRecipe(null);
    });
  };

  return (
    <div className="sideBySide">
      {mealplan && mealplanContainer()}
      {recipe && (
        <Recipe
          recipe={recipe}
          updateRecipe={(e) => updateRecipe(e)}
          deleteRecipe={deleteRecipe}
        />
      )}
    </div>
  );
}

/*   return (
    <div>
        <div style = {{backgroundColor: '#FEFEFE', marginTop: '20px',marginRight: '500px'}}>
            <h2>Sunday Mealplan:</h2>
            <div>Breakfast Recipe: 

            </div>
               <div>
                    Lunch Recipe: 
                </div>
                <div>
                Dinner Recipe: 
            </div>
        </div>
        <div style = {{backgroundColor: '#FEFEFE', marginTop: '20px',marginRight: '500px'}}>
        <h2>Monday Mealplan:</h2>
        <div>Breakfast Recipe: 

            </div>
               <div>
                    Lunch Recipe: 
                </div>
                <div>
                Dinner Recipe: 
            </div>
        </div>
        <div style = {{backgroundColor: '#FEFEFE', marginTop: '20px',marginRight: '500px'}}>
            <h2>Tuesday Mealplan:</h2>
            <div>Breakfast Recipe: 

            </div>
               <div>
                    Lunch Recipe: 
                </div>
                <div>
                Dinner Recipe: 
            </div>
        </div>
        <div style = {{backgroundColor: '#FEFEFE', marginTop: '20px',marginRight: '500px'}}>
        <h2>Wednesday Mealplan:</h2>
        <div>Breakfast Recipe: 

            </div>
               <div>
                    Lunch Recipe: 
                </div>
                <div>
                Dinner Recipe: 
            </div>
        </div>
        <div style = {{backgroundColor: '#FEFEFE', marginTop: '20px',marginRight: '500px'}}>
            <h2>Thursday Mealplan:</h2>
            <div>Breakfast Recipe: 

            </div>
               <div>
                    Lunch Recipe: 
                </div>
                <div>
                Dinner Recipe: 
            </div>
        </div>
        <div style = {{backgroundColor: '#FEFEFE', marginTop: '20px',marginRight: '500px'}}>
            <h2>Friday Mealplan:</h2>
            <div>Breakfast Recipe: 

            </div>
               <div>
                    Lunch Recipe: 
                </div>
                <div>
                Dinner Recipe: 
            </div>
        </div>
        <div style = {{backgroundColor: '#FEFEFE', marginTop: '20px',marginRight: '500px'}}>
            <h2>Saturday Mealplan:</h2>
            <div>Breakfast Recipe: 

            </div>
               <div>
                    Lunch Recipe: 
                </div>
                <div>
                Dinner Recipe: 
            </div>
        </div>
       
    </div>
  )
} */

export default Mealplan;
