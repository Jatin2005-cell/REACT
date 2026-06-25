import {
  createBrowserRouter,
} from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Github from "../pages/Github";
import Error from "../pages/Error";
import User from "../pages/User";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Analytics from "../pages/Analytics";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";



const githubLoader = async () => {

    const response = await fetch(
        "https://api.github.com/users/github"
    );

    return response.json();

};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     errorElement: <Error />,

    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
   path:"login",
   element:<Login/>
},

      {
        path: "github",
    element: <Github />,
    loader: githubLoader,
      },
      {
    path: "user/:id",
    element: <User />,
},
{
  path: "dashboard",
 element:(
    <ProtectedRoute>
      <Dashboard/>
    </ProtectedRoute>
  ),
    
  children: [
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "analytics",
      element: <Analytics />,
    },
  ],
},

    ],
  },
]);

export default router;