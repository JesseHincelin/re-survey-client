import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import NavBar from "../nav-bar/nav-bar";
import { navigateTo } from "../../../Utils/navigate.utils";
import "./dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <section className="dashboard">
        <ul className="dashboard__buttons">
          <li>
            <Button
              className="dashboard__button--project"
              content="New Project"
              onButtonClick={() => navigateTo("/new-project", navigate)}
            />
          </li>
          <li>
            <Button
              className="dashboard__button--survey"
              content="New Survey"
              onButtonClick={() => navigateTo("/new-survey", navigate)}
            />
          </li>
          <li>
            <Button
              className="dashboard__button--panel"
              content="New Panel"
              onButtonClick={() => navigateTo("/new-panel", navigate)}
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Dashboard;
