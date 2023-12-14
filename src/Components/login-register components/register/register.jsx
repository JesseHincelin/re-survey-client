import { useDispatch, useSelector } from "react-redux";
import Button from "../../general-components/button/button";
import { handleFieldChange, resetErrorForm } from "../../../Redux/reducers/user-form.reducer";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../general-components/input/input";
import { registerThunk } from "../../../Api/connexion.api";
import { saveRoute } from "../../../Utils/navigate.utils";

const Register = () => {
  const { loading, error, userNameValue, emailValue, passwordValue, confPasswordValue } =
    useSelector((store) => store.userFormState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (value, props) => {
    dispatch(handleFieldChange({ value, props }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerThunk(navigate));
    //redirect
  };

  return (
    <section className="section register">
      <h4 className="section__sub--title">Welcome to your survey application !</h4>
      <p className="section__text">
        Re-Survey will assist you in the creation of various poll for research purpose and help you
        analyse the data recieved through it
      </p>
      <h3 className="section__title">Sign-up form :</h3>
      <form
        action=""
        className="register__form section__form"
        onSubmit={handleSubmit}
      >
        <Input
          className="register__form--userName"
          id="userName"
          label="User name :"
          disabled={!!loading}
          value={userNameValue}
          placeholder="Ex : John"
          required={true}
          onInputChange={(value) => handleInputChange(value, "userNameValue")}
        />
        <Input
          className="register__form--email"
          id="email"
          label="Email adress :"
          type="email"
          disabled={!!loading}
          value={emailValue}
          placeholder="Ex : john.smith@gmail.com"
          required={true}
          onInputChange={(value) => handleInputChange(value, "emailValue")}
        />
        <Input
          className="register__form--password"
          id="password"
          label="Password :"
          type="password"
          disabled={!!loading}
          value={passwordValue}
          required={true}
          onInputChange={(value) => handleInputChange(value, "passwordValue")}
        />
        <Input
          className="register__form--conf-password"
          id="conf-password"
          label="Confirm password :"
          type="password"
          disabled={!!loading}
          value={confPasswordValue}
          required={true}
          onInputChange={(value) => handleInputChange(value, "confPasswordValue")}
        />
        {!!error && <p className="error">{error}</p>}
        <Button
          className="register__form--button"
          type="submit"
          disabled={!!loading}
          content="Sign-in"
        />
      </form>
      <div className="redirection-link">
        <p>You already have an account on Re-Survey ?</p>
        <Link
          to={`/login`}
          onClick={() => {
            saveRoute("/login");
            dispatch(resetErrorForm());
          }}
        >
          You can sign-in right there.
        </Link>
      </div>
    </section>
  );
};

export default Register;
