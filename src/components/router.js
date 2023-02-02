import { createBrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import ProtectedRout from "./utility/ProtectedRout";
import User from "./User/User";
import Admin from "./Admin/Admin";
import MoreInfo from "./User/MoreInfo";
export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/",
    element: <User />,
    children:[
      {
        path: "/moreInfo",
        element: <MoreInfo />
      }
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRout>
      <Admin />
    </ProtectedRout>,
    children:[],
  }
]);