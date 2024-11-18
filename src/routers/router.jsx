import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <div>news</div>,
  },
  {
    path: "auth",
    element: <div>Login</div>,
  },
  {
    path: "*",
    element: <div>error</div>,
  },
]);
 

export default router;