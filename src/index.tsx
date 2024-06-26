import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFoundPage from "./Pages/NotFound/NotFound";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Details from "./Pages/Details/Details";
import "./index.css";

const router = createHashRouter([
  {
    element: <Home />,
    path: "",
  },
  {
    element: <Details />,
    path: "/:name",
  },
  {
    element: <NotFoundPage></NotFoundPage>,
    path: "*",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
