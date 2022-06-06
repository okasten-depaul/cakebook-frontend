import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function Cookbooks() {
  const [cookbooks, setCookbooks] = useState([]);
  const userInformation = useSelector((store) => store.userInformation)

  const createCookbooksList = () => {
   return cookbooks.map(cookbook => <a href={`/cookbooks/${cookbook.id}`} className="centerItem" key={cookbook.id}>{cookbook.name}</a>) 
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/api/cookbook/get/${userInformation.id}`)
      .then(response => response.json())
      .then(data => setCookbooks(data))
  }, [])

  return (
    <div className="centerContainer cookbookIndex">
      <h1 className="title">My Cookbooks</h1>
      {createCookbooksList()}
    </div>
    
  )
}

export default Cookbooks;