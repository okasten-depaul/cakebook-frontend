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
import MealplanForm from './mealplan/MealplanForm';
import Mealplans from './mealplan/Mealplans';
import RecipeForm from './recipe/RecipeForm';
import SignupForm from './user/SignupForm';
import LoginForm from './user/LoginForm';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const myStore = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
})
let persistor = persistStore(myStore)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={myStore}>
  <PersistGate loading={null} persistor={persistor}>
    <Routes>
      <Route path="/" element={<App />}>
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
      </Route>
      
    </Routes>
    </PersistGate>
    </Provider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
