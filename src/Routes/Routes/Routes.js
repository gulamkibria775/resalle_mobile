import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import Myorder from "../../Component/Myproduct/Myorder/Myorder";
import Myproduct from "../../Component/Myproduct/Myproduct";
import Dashboardlayout from "../../Layout/Dashboardlayout";
import Main from "../../Layout/Main";
// import Category from "../../Pages/Home/Category/Category";
import Oneplus from "../../Pages/Home/Category/Oneplus/Oneplus";
import Samsung from "../../Pages/Home/Category/Samsung/Samsung";
import Walton from "../../Pages/Home/Category/Walton/Walton";
import Dashbord from "../../Pages/Home/Dashbord/Dashbord";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Seller from "../../Pages/Seller/Seller";
import Selleraddproduct from "../../Pages/Seller/Selleraddproduct";
import Singup from "../../Pages/Singup/SignUp";
import Payment from "../../Component/Payment/Payment";
import Notfound from "../../Component/Notfound/Notfound";
import Alluser from "../../Component/Admin/Alluser/Alluser";
import Allbuyer from "../../Component/Admin/Allbuyer/Allbuyer";
import Admin from "../../Layout/Admin/Admin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import AdminRoute from "../AdminRoute/AdminRoute";
import Admin2 from "../../Layout/Admin/Admin2";
import Comment from "../../Pages/Home/Category/Oneplus/Comment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/signup",
        element: <Singup></Singup>,
      },
      {
        path: "/oneplus",
        element: (
          <PrivateRoute>
            <Oneplus></Oneplus>
          </PrivateRoute>
        ),
        //   loader: () => fetch("https://server-site-gulamkibria775.vercel.app/product")
      },
      {
        path: "/samsung",
        element: (
          <PrivateRoute>
            <Samsung></Samsung>
          </PrivateRoute>
        ),
      },
      {
        path: "/walton",
        element: (
          <PrivateRoute>
            <Walton></Walton>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <Notfound></Notfound>,
      },
      {
        path: "/comment",
        element: <Comment></Comment>,
      },
    ],
  },
  {
    path: "/seller",
    element: <Seller></Seller>,
  },
  //    {
  //     path:'/addproduct',
  //     element:<Selleraddproduct></Selleraddproduct>
  //    },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboardlayout></Dashboardlayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashbord></Dashbord>,
      },
      {
        path: "/dashboard/admin",
        element: (
          <PrivateRoute>
            <Admin></Admin>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/admin2",
        element: (
          <PrivateRoute>
            <Admin2></Admin2>
          </PrivateRoute>
        ),
      },
      //    {
      //     path:'/addproduct',
      //     element:<Selleraddproduct></Selleraddproduct>
      //    },
      {
        path: "/dashboard/addproduct",
        element: (
          <PrivateRoute>
            <Selleraddproduct></Selleraddproduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <PrivateRoute>
            <Myproduct></Myproduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user",
        element: <Alluser></Alluser>,
      },
      {
        path: "/dashboard/buyer",
        element: <Allbuyer></Allbuyer>,
      },
      {
        path: "/dashboard/comment",
        element: <Comment></Comment>,
      },
      {
        path: "/dashboard/myorder",
        element: (
          <PrivateRoute>
            <Myorder></Myorder>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-site-gulamkibria775.vercel.app/myorderproduct/${params.id}`
          ),
      },

      {
        path: "*",
        element: <Notfound></Notfound>,
      },
    ],
  },
]);

export default router;

