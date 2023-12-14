import { configureStore } from "@reduxjs/toolkit";
import userFormReducer from "./reducers/user-form.reducer";
import userReducer from "./reducers/user.reducer";

const store = configureStore({
  reducer: {
    userFormState: userFormReducer,
    userState: userReducer,
  },
});

export default store;
