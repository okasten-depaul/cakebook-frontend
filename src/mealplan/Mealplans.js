import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import * as mealplansAPI from "../api/mealplan";

function Mealplans() {
  const [mealplans, setMealplans] = useState([]);
  const isIndex = window.location.pathname === "/mealplans";

  const createMealplansList = () => {
    return mealplans.map(mealplan => <a href={`${mealplan.id}`} className="centerItem" key={mealplan.id}>{mealplan.week}</a>)
  }

  const indexPage = () => {
    return(
      <div className="centerContainer mealplanIndex">
        <h1 className="title">My Mealplans</h1>
        {createMealplansList()}
      </div>
    )
  }

  useEffect(() => {
    const mealplans = mealplansAPI.getMealplans();
    setMealplans(mealplans);
    // .then(mealplans => setMealplans(mealplans))
  }, [])

  return (
    <div>
      {isIndex ? indexPage() : <Outlet/>}
    </div>
    
  )
}

export default Mealplans;