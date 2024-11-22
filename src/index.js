
import React from "react"; 
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/style.css";
import projectRoute from "./projectroute";
import { Outlet, Link } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import projectstore from "./redux/projectstore";
import { Provider } from "react-redux";

// console.log(React);
// console.log(ReactDOM);

const result = ReactDOM.createRoot(document.getElementById("root"));

// result.render(<App />);

result.render(
  <Provider store={projectstore}>
    <RouterProvider router={projectRoute} />
  </Provider>
);
