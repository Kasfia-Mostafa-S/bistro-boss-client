import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Menu/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/Cart/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/Cart/AdItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order />,
        // element:<PrivateRoutes><Order /></PrivateRoutes>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },

    //   admin routes
      {
        path: "allUsers",
        element: <AdminRoutes><AllUsers /></AdminRoutes>,
      },
      {
        path: "addItems",
        element:<AdminRoutes> <AddItems /></AdminRoutes>,
      },
      {
        path: "manageItems",
        element:<AdminRoutes> <ManageItems /></AdminRoutes>,
      },
      {
        path: "updateItem/:id",
        element:<AdminRoutes> <UpdateItem /></AdminRoutes>,
        loader:({params})=> fetch(`https://bistro-boss-server-mu-seven.vercel.app/menu/${params.id}`)
      },
    ],
  },
]);
