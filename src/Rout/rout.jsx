import { createBrowserRouter } from "react-router-dom";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contact/Contact";
import Details from "../Page/Details/Details";
import Root from "../Page/Details/Root/Root";
import ErrorPage from "../Page/Error/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Profile from "../Page/Profile/Profile";
import Registration from "../Page/Registration/Registration";
import PrivetRout from "./PrivetRout/PrivetRout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/profile",
        element: (
          <PrivetRout>
            <Profile />
          </PrivetRout>
        ),
      },
      {
        path: "/contact",
        element:<PrivetRout><Contact /></PrivetRout> ,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/registration",
        element: <Registration />,
      },

      {
        path: "/details/:id",
        element: (
          <PrivetRout>
            {" "}
            <Details />
          </PrivetRout>
        ),
        loader: () => fetch(`/data2.json`),
      },
    ],
  },
]);
