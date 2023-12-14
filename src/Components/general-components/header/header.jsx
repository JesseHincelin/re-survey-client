import { useSelector } from "react-redux";
import "./header.scss";

const Header = () => {
  const { userName } = useSelector((store) => store.userState);

  return (
    <header className="header">
      <h1 className="title">Re-Survey</h1>
      <p className="subtitle">Research Surveyor</p>
      {!!userName && <span className="user__welcome">Welcome {userName} !</span>}
    </header>
  );
};

export default Header;
