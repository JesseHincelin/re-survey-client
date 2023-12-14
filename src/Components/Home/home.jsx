import { Outlet, useNavigate } from "react-router-dom";
import Header from "../general-components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFromStorage, getRouteFromStorage } from "../../Utils/general.utils";
import { autoLoginThunk } from "../../Api/connexion.api";
import { navigateTo } from "../../Utils/navigate.utils";
import "./home.scss";

const Home = () => {
  const { id } = useSelector((store) => store.userState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getFromStorage("token");
    if (!token) {
      navigateTo("/login", navigate);
    }
    if (!!token && !id) {
      dispatch(autoLoginThunk());
      navigateTo(getRouteFromStorage("route"), navigate);
    }
    if (!!token && !!id) {
      navigateTo("/dashboard", navigate);
    }
  }, []);

  return (
    <div className="global__container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
