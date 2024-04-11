import { combineReducers } from "@reduxjs/toolkit";
import navReducer from "../features/navSlice";

const rootReducer = combineReducers({
  nav: navReducer,
});

export default rootReducer;
