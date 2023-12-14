import { createSlice } from "@reduxjs/toolkit";

const USER_STATE = {
  id: "",
  userName: "",
  email: "",
  emailConfirmed: false,
  project: [],
  surveys: [],
  panels: [],
  theme: "",
};

const getInitialState = () => USER_STATE;

const userSlice = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      return {
        ...state,
        id: user.id,
        userName: user.userName,
        email: user.email,
        project: user.project,
        surveys: user.surveys,
        panels: user.panels,
        theme: user.theme,
        emailConfirmed: user.emailConfirmed,
      };
    },
    resetUser: () => getInitialState(),
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
