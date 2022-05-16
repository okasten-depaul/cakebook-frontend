import React from 'react'
import { getMealplans } from '../api/mealplan'

const Mealplan = () => {
    getMealplans();
  return (
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
}

export default Mealplan