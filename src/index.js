import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './custom.scss';
import App from './App';
import Cookbook from './cookbook/Cookbook';
import Cookbooks from './cookbook/Cookbooks'; 
import CookbookForm from './cookbook/CookbookForm';
import Mealplan from './mealplan/Mealplan';
import Mealplans from './mealplan/Mealplans';
import RecipeForm from './recipe/RecipeForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cookbooks" element={<Cookbooks />}>
          <Route path=":id" element={<Cookbook />}/>
        </Route>
        <Route path="cookbooks/new" element={<CookbookForm />}/>
        <Route path="mealplans" element = {<Mealplans />}>
          <Route path=":id" element={<Mealplan />}/>
        </Route>
        <Route path="recipes/new" element={<RecipeForm/>}/>
      </Route>
      
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
