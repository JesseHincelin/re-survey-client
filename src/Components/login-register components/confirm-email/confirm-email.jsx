import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../general-components/header/header";
import { verifyEmailThunk } from "../../../Api/connexion.api";
import { saveRoute } from "../../../Utils/navigate.utils";

const ConfirmEmail = () => {
  const { userName, emailConfirmed } = useSelector((store) => store.userState);

  const dispatch = useDispatch();

  const { userId, verificationToken } = useParams();

  useEffect(() => {
    dispatch(verifyEmailThunk(userId, verificationToken));
  }, []);
  return (
    <>
      <Header />
      <article className="article">
        <h3>Congratulation {userName} on joinning us !</h3>
        {!emailConfirmed ? (
          <p>We are currently verifying your email adress</p>
        ) : (
          <>
            <p>Thank you for confirming your email. </p>
            <p>
              You can get to your dashboard{" "}
              <Link
                to={"/dashboard"}
                onClick={() => saveRoute("/dashboard")}
              >
                from here
              </Link>
              .
            </p>
          </>
        )}
      </article>
    </>
  );
};

export default ConfirmEmail;
