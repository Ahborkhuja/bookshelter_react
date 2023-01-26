import { createBrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import RootLayoutAdmin from "./Layout/RootLayoutAdmin";
import RootLayoutUser from "./Layout/RootLayoutUser";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/",
    element: <RootLayoutUser />,
    children:[],
  },
  {
    path: "/admin",
    element: <RootLayoutAdmin />,
    children:[],
  }
]);