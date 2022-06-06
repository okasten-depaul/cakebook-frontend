import { createSlice } from '@reduxjs/toolkit'


export const recipeSlice = createSlice({
    name: 'Recipes',
    initialState: {},
    reducers: {
        setRecipes: (state, action) => {
           return action.payload
        },
        addRecipe: (state, action) => {
            const arr = [...state, action.payload]
            return arr
        },
    },
})

export const { setRecipes, addRecipe } = recipeSlice.actions

export default recipeSlice.reducer
