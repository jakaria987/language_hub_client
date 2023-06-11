import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Hudai from "../Pages/Hudai";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/hudai",
        element: (
          <PrivateRoute>
            <Hudai></Hudai>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: 'mycart',
            element:<MyCart></MyCart>
        },
        {
            path: 'allusers',
            element:<AllUsers></AllUsers>
        },
        {
            path: 'manageclass',
            element: <ManageClass></ManageClass>
        },
        {
            path: 'addclass',
            element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        }
    ]
  },
]);
