import { createSlice } from "@reduxjs/toolkit";

const USER_FORM_STATE = {
  error: null,
  loading: false,
  userNameValue: "",
  emailValue: "",
  passwordValue: "",
  confPasswordValue: "",
};

const getInitialState = () => USER_FORM_STATE;

const userFormSlice = createSlice({
  name: "userForm",
  initialState: getInitialState(),
  reducers: {
    handleFieldChange: (state, action) => {
      const { value, props } = action.payload;

      return { ...state, [props]: value };
    },
    resetForm: () => getInitialState(),
    resetErrorForm: (state) => {
      return { ...state, error: null };
    },
    setFormError: (state, action) => {
      const { error } = action.payload;

      return { ...state, loading: false, error: error };
    },
    startLoading: (state) => {
      return { ...state, loading: true };
    },
  },
});

export const { handleFieldChange, resetForm, resetErrorForm, setFormError, startLoading } =
  userFormSlice.actions;
export default userFormSlice.reducer;
