import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Mealplans() {
  const [mealplans, setMealplans] = useState([]);

  const userInformation = useSelector((store) => store.userInformation);
  console.log(userInformation.id);

  const createMealplansList = () => {
    return mealplans.map((mealplan) => (
      <a
        href={`/mealplans/${mealplan.id}`}
        className="centerItem"
        key={mealplan.id}
      >
        {mealplan.name}
      </a>
    ));
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/mealplan/get/${userInformation.id}`)
      .then((response) => response.json())
      .then((data) => setMealplans(data));
    console.log(mealplans);
  }, []);

  return (
    <div className="centerContainer cookbookIndex">
      <h1 className="title">My Mealplans</h1>
      {createMealplansList()}
    </div>
  );
}

export default Mealplans;
