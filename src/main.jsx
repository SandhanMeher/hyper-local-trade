import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RootsError from "./ReactComponents/Errors/RootsError.jsx";
import Signin from "./ReactComponents/Authentication/Signin.jsx";
import Signup from "./ReactComponents/Authentication/Signup.jsx";
import Buy from "./ReactComponents/Adrower/Buy/Buy.jsx";
import Sells from "./ReactComponents/Adrower/Sells/Sells.jsx";
import Saves from "./ReactComponents/Adrower/Saves/Saves.jsx";

import Profile from "./ReactComponents/Adrower/Profile/Profile.jsx";
import RouteNotFound from "./ReactComponents/Errors/RouteNotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RootsError />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "saves",
    element: <Saves />,
  },
  {
    path: "buy",
    element: <Buy />,
  },
  {
    path: "sells",
    element: <Sells />,
  },
  {
    path: "*",
    element: <RouteNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
