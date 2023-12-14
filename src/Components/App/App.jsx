import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Register from "../login-register components/register/register";
import Login from "../login-register components/login/login";
import Home from "../Home/home";
import ConfirmRegister from "../login-register components/confirm-register/confirm-register";
import ConfirmEmail from "../login-register components/confirm-email/confirm-email";
import Dashboard from "../general-components/dashboard/dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/confirm-register", element: <ConfirmRegister /> },
        { path: "/dashboard", element: <Dashboard /> },
      ],
    },
    { path: "/confirm-email/:userId/:verificationToken", element: <ConfirmEmail /> },
  ]);

  return (
    <div className="App blue_theme">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
