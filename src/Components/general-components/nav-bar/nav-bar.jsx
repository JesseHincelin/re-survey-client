import { Link } from "react-router-dom";
import { saveRoute } from "../../../Utils/navigate.utils";
import "./nav-bar.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav--bar">
        <li>
          <Link
            to={"/project"}
            onClick={() => saveRoute("/project")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to={"/panel"}
            onClick={() => saveRoute("/panel")}
          >
            Panels
          </Link>
        </li>
        <li>
          <Link
            to={"/new-survey"}
            onClick={() => saveRoute("/new-survey")}
          >
            New survey
          </Link>
        </li>
        <li>
          <Link
            to={"/ongoing-survey"}
            onClick={() => saveRoute("/ongoing-survey")}
          >
            Ongoing survey
          </Link>
        </li>
        <li>
          <Link
            to={"/analysis"}
            onClick={() => saveRoute("/analysis")}
          >
            Analysis
          </Link>
        </li>
        <li className="nav-bar__spliter"></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
