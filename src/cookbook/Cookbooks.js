import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import * as cookbooksAPI from "../api/cookbook";

function Cookbooks() {
  const [cookbooks, setCookbooks] = useState([]);
  const isIndex = window.location.pathname === "/cookbooks";

  const createCookbooksList = () => {
    return cookbooks.map(cookbook => <a href={`/cookbooks/${cookbook.id}`} className="centerItem" key={cookbook.id}>{cookbook.name}</a>)
  }

  const indexPage = () => {
    return(
      <div className="centerContainer cookbookIndex">
        <h1 className="title">My Cookbooks</h1>
        {createCookbooksList()}
      </div>
    )
  }

  useEffect(() => {
    fetch(`http://localhost:8080/api/cookbook/all`) //TODO this is going to have to change to use user
      .then(response => response.json())
      .then(data => setCookbooks(data))
  }, [])

  return (
    <div>
      {isIndex ? indexPage() : <Outlet/>}
    </div>
    
  )
}

export default Cookbooks;