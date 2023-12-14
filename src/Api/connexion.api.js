import { resetForm, setFormError, startLoading } from "../Redux/reducers/user-form.reducer";
import { setUser } from "../Redux/reducers/user.reducer";
import { getFromStorage, saveLocalStorage } from "../Utils/general.utils";
import { navigateTo } from "../Utils/navigate.utils";
import { getRequest, postRequest } from "./requests.api";

export const loginThunk = (functionNavigate) => async (dispatch, getStates) => {
  const { loading, emailValue, passwordValue } = getStates().userFormState;

  if (!!loading) return;
  dispatch(startLoading());

  const response = await postRequest("user/login", {
    email: emailValue.trim(),
    password: passwordValue.trim(),
  });

  if (!!response.error) {
    dispatch(setFormError({ error: response.error }));
  }

  if (!!response.result && !!response.result.user && response.result.token) {
    dispatch(setUser({ user: response.result.user }));
    dispatch(resetForm());
    saveLocalStorage("token", response.result.token);

    navigateTo("/dashboard", functionNavigate);
  }
};

export const registerThunk = (functionNavigate) => async (dispatch, getStates) => {
  const { loading, userNameValue, emailValue, passwordValue } = getStates().userFormState;

  if (!!loading) return;
  dispatch(startLoading());

  const response = await postRequest("user/register", {
    userName: userNameValue,
    email: emailValue,
    password: passwordValue,
  });

  if (!!response.error) {
    dispatch(setFormError({ error: response.error }));
  }

  if (!!response.result && !!response.result.user) {
    // dispatch(setUser({ user: response.result.user }));
    dispatch(resetForm());

    navigateTo("/confirm-register", functionNavigate);
  }
};

export const autoLoginThunk = () => async (dispatch, getStates) => {
  const { loading } = getStates().userFormState;

  if (!!loading) return;
  dispatch(startLoading());

  const response = await getRequest("user/auto-login", getFromStorage("token"));

  if (!!response.error) {
    // handle error globaly (specific reducer ??)
  }

  if (!!response.result && !!response.result.user) {
    dispatch(setUser({ user: response.result.user }));
  }
};

export const verifyEmailThunk = (userId, verificationToken) => async (dispatch, getStates) => {
  const response = await getRequest(`user/verify/${userId}/${verificationToken}`);

  if (!!response.error) {
    //handle error
  }

  if (!!response.result && !!response.result.user) {
    dispatch(setUser({ user: response.result.user }));
  }
};
