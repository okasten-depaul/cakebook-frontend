import { createSlice } from "@reduxjs/toolkit";
import { clone } from "ramda";

export const userSlice = createSlice({
  name: "User Information",
  initialState: {},
  reducers: {
    loginSuccess: (state, action) => {
      const newObj = clone(state);
      newObj.isLoggedIn = true;
      return Object.assign(newObj, action.payload);
    },
    hasCookbooks: (state, action) => {
      const newObj = clone(state);
      newObj.hasCookbooks = true;
      return Object.assign(newObj, action.payload);
    },
    hasMealplans: (state, action) => {
      const newObj = clone(state);
      newObj.hasMealplans = true;
      return Object.assign(newObj, action.payload);
    },
  },
});

export const { loginSuccess, hasCookbooks, hasMealplans } = userSlice.actions;

export default userSlice.reducer;
