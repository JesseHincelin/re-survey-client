import { useDispatch, useSelector } from "react-redux";
import Button from "../../general-components/button/button";
import Input from "../../general-components/input/input";
import { handleFieldChange, resetErrorForm } from "../../../Redux/reducers/user-form.reducer";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../../Api/connexion.api";
import { saveRoute } from "../../../Utils/navigate.utils";

const Login = () => {
  const { loading, error, emailValue, passwordValue } = useSelector((store) => store.userFormState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (value, props) => {
    dispatch(handleFieldChange({ value: value, props: props }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginThunk(navigate));
  };
  return (
    <section className="login section">
      <h4 className="section__sub--title">Welcome to your survey application !</h4>
      <p className="section__text">
        Re-Survey will assist you in the creation of various poll for research purpose and help you
        analyse the data recieved through it
      </p>
      <h3 className="section__title">Sign-in form :</h3>
      <form
        action=""
        className="login__form section__form"
        onSubmit={handleSubmit}
      >
        <Input
          className="login__form--email"
          id="email"
          label="Email adress :"
          type="email"
          disabled={!!loading}
          placeholder="Ex : john.smith@gmail.com"
          required={true}
          value={emailValue}
          autoComplete="email"
          onInputChange={(value) => handleInputChange(value, "emailValue")}
        />
        <Input
          className="login__form--password"
          id="password"
          label="Password :"
          type="password"
          disabled={!!loading}
          value={passwordValue}
          required={true}
          autoComplete="current-password"
          onInputChange={(value) => handleInputChange(value, "passwordValue")}
        />
        {!!error && <p className="error">{error}</p>}
        <Button
          className="login__form--button"
          type="submit"
          disabled={!!loading}
          content="Sign-in"
        />
      </form>
      <div className="redirection-link">
        <p>New to this app ?</p>
        <Link
          to={`/register`}
          onClick={() => {
            saveRoute("/register");
            dispatch(resetErrorForm());
          }}
        >
          You can sign-up right there.
        </Link>
      </div>
    </section>
  );
};

export default Login;
