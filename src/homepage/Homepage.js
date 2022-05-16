import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div style = {{padding: '25px', topMargin: '25px'}}>
        <h3 >Trending Recipes</h3>
        <div style = {{ display: "block", float: "left", rightMargin: "5px"}}>
          <img
           
            src = "https://www.halfbakedharvest.com/wp-content/uploads/2022/05/Chili-Crisp-Chicken-Mango-Cucumber-Rice-Bowl-1.jpg"
            height = "200px"
            /> 
            </div>
            <div style = {{ display: "block", float: "left", rightMargin: "5px"}}>
             <img
             leftMargin = '10px'
            src = "https://www.halfbakedharvest.com/wp-content/uploads/2022/05/One-Pot-Spinach-and-Sun-Dried-Tomato-Burrata-Pasta-1.jpg"
            height = "200px"
            /> 


        </div>
      </div>
    </div>
  )
}

export default Homepage