import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddBlog from "../pages/Home/Blogs/AddBlog";
import WishList from "../pages/WishList/WishList";
import AllWishlist from "../pages/WishList/AllWishlist";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assignment11-serverside-categorynumber6.vercel.app/blogByUser"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addblog",
        element: <PrivateRoute><AddBlog></AddBlog>,</PrivateRoute>
      },
      {
        path: "wishlist/:id",
        element: <WishList></WishList>,
        loader: ({ params }) =>
          fetch(`https://assignment11-serverside-categorynumber6.vercel.app/blogByUser/${params.id}`),
      },
      {
        path: "/allWishlist",
        element: (
          <PrivateRoute>
            <AllWishlist></AllWishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
        fetch(`https://assignment11-serverside-categorynumber6.vercel.app/blogByUser/${params.id}`),
      },
    ],
  },
]);

export default router;
