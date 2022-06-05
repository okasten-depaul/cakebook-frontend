import Header from './components/Header.js';
import Homepage from './homepage/Homepage.js';
import Cookbook from './cookbook/Cookbook';
import Cookbooks from './cookbook/Cookbooks'; 
import CookbookForm from './cookbook/CookbookForm';
import Mealplan from './mealplan/Mealplan';
import MealplanForm from './mealplan/MealplanForm';
import Mealplans from './mealplan/Mealplans';
import RecipeForm from './recipe/RecipeForm';
import SignupForm from './user/SignupForm';
import LoginForm from './user/LoginForm';
import Container from 'react-bootstrap/Container'
import SearchContainer from './search/SearchContainer';
import QuickAddForm from './quickAdd/QuickAddForm';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Container>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage />}/>
        <Route path="cookbooks" element={<Cookbooks />}/>
        <Route path="cookbooks/:id" element={<Cookbook />}/>
        <Route path="cookbooks/new" element={<CookbookForm />}/>
        <Route path="mealplans" element = {<Mealplans />}/>
        <Route path="mealplans/new" element = {<MealplanForm />}/>
          <Route path=":id" element={<Mealplan />}/>
        <Route path="recipes/new" element={<RecipeForm/>}/>
        <Route path="recipes/edit/:id" element={<RecipeForm/>}/>
        <Route path="sign-up" element = {<SignupForm />}/>
        <Route path="login" element = {<LoginForm />}/>
        <Route path="search" element={<SearchContainer />}/>
        <Route path="quick-add" element={<QuickAddForm/>}/>
      </Routes>
    </Container>
  );
}

export default App;

