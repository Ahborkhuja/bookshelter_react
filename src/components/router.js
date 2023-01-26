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
    path: "/user",
    element: <RootLayoutUser />,
    children:[],
  },
  {
    path: "/",
    element: <RootLayoutAdmin />,
    children:[],
  }
]);