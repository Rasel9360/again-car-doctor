import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Page/Home";
import Login from "../../Page/Login";
import Register from "../../Page/Register";
import CheckOut from "../../Page/CheckOut";
import MyBooking from "../../Components/MyBooking";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: ([
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/check/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/my',
          element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        }
      ])
    },
  ]);

export default Router;