import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProfileSelect from "./components/ProfileSelect/ProfileSelect.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfileSelect />,
  },
  {
    path: "/app",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
