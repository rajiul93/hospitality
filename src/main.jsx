import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { router } from "./Rout/rout.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HelmetProvider>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
     </HelmetProvider>
  </React.StrictMode>
);
