import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "./pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"",
        element:<Navigate to={"/category/01"}></Navigate>
      },
    {
      path: "/category/:id",
      element: <CategoryNews></CategoryNews>,
      loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
    },
  ]
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