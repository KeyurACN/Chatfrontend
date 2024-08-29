import { Reducer as AppReducer } from "./AppReducer/Reducer";
import { Reducer as AuthReducer } from "./AuthReducer/Reducer";

import { configureStore } from "@reduxjs/toolkit";

// Create the Redux store
export const store = configureStore({
  reducer: {
    AppReducer,
    AuthReducer,
  },
});
