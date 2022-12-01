import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import Myorder from "../../Component/Myproduct/Myorder/Myorder";
import Myproduct from "../../Component/Myproduct/Myproduct";
import Dashboardlayout from "../../Layout/Dashboardlayout";
import Main from "../../Layout/Main";
import Category from "../../Pages/Home/Category/Category";
import Oneplus from "../../Pages/Home/Category/Oneplus/Oneplus";
import Samsung from "../../Pages/Home/Category/Samsung/Samsung";
import Walton from "../../Pages/Home/Category/Walton/Walton";
import Dashbord from "../../Pages/Home/Dashbord/Dashbord";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Seller from "../../Pages/Seller/Seller";
import Selleraddproduct from "../../Pages/Seller/Selleraddproduct";
import Singup from "../../Pages/Singup/SignUp";
import Payment from "../../Component/Payment/Payment"
import Notfound from "../../Component/Notfound/Notfound";
import Alluser from "../../Component/Admin/Alluser/Alluser";
import Allbuyer from "../../Component/Admin/Allbuyer/Allbuyer";
import Admin from "../../Layout/Admin/Admin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";

 const router=createBrowserRouter([


    {
        path:'/',
        element:<Main></Main>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                  path:'/home',
                  element:<Home></Home>
            },

           {
            path:'/login',
            element:<Login></Login>
           },
         
           {
            path:'/signup',
            element:<Singup></Singup>
           },
           {
                  path:'/oneplus',
                  element:<PrivateRoute><Oneplus></Oneplus></PrivateRoute>,
                //   loader: () => fetch("http://localhost:5000/product")
           },
           {
           path:'/samsung',
           element:<PrivateRoute><Samsung></Samsung></PrivateRoute>
           },
           {
            path:'/walton',
            element:<PrivateRoute><Walton></Walton></PrivateRoute>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
                 {
                   path:"*",
                   element:<Notfound></Notfound>
                 }
         
    
           
        
        ]
    },
    {
        path:'/seller',
        element:<Seller></Seller>
       },
    //    {
    //     path:'/addproduct',
    //     element:<Selleraddproduct></Selleraddproduct>
    //    },
       {
        path:'/dashboard',
        element:<PrivateRoute><Dashboardlayout></Dashboardlayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashbord></Dashbord>
            },
            {
                path:'/dashboard/admin',
                element:<PrivateRoute><Admin></Admin></PrivateRoute>
               },
            //    {
            //     path:'/addproduct',
            //     element:<Selleraddproduct></Selleraddproduct>
            //    },
            {
                path:'/dashboard/addproduct',
                element:<PrivateRoute><Selleraddproduct></Selleraddproduct></PrivateRoute>
            },
            {
                path:'/dashboard/myproduct',
                element:<PrivateRoute><Myproduct></Myproduct></PrivateRoute>
            },
            {
                path:'/dashboard/user',
                element:<Alluser></Alluser>
            },
            {
                path:'/dashboard/buyer',
                element:<Allbuyer></Allbuyer>
            },
            {
                path:'/dashboard/myorder',
                element:<PrivateRoute><Myorder></Myorder></PrivateRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/myorderproduct/${params.id}`)
            },
            
                 {
                   path:"*",
                   element:<Notfound></Notfound>
                 }
        ]
       }
   

])

export default router;


// {
    //         path:"/update/:id",
    //         element:<Update></Update>,
    //         loader: ({ params }) =>
    //           fetch(`https://server-site-gulamkibria775.vercel.app/services/${params.id}`),
    //       },


// import Main from "../../Layout/Main";

// import Notfound from "../../Pages/Consultan/Notfound/Notfound";
// import Home from "../../Pages/Home/Home/Home";
// import Addservice from "../../Pages/Home/Services/Addservice/Addservice";
// import Blog from "../../Pages/Home/Services/Blog/Blog";
// import Comment from "../../Pages/Home/Services/Comment/Comment";
// import Myreview from "../../Pages/Home/Services/Myreview/Myreview";
// import ServiceDetail from "../../Pages/Home/Services/ServiceDetail";
// import ServicesAll from "../../Pages/Home/Services/ServicesAll";
// import Update from "../../Pages/Home/Services/Update/Update";
// import Login from "../../Pages/Login/Login";

// import SignUp from "../../Pages/SignUp/SignUp";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

// const { createBrowserRouter } = require("react-router-dom");

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/signup",
//         element: <SignUp></SignUp>,
//       },
//       // ,
//       // {
//       //   path: '/checkout/:id',
//       //   element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
//       //   loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
//       // },
//       {
//         path: '/services1/:id',
//         element:<Comment></Comment>,
//        loader: ({params})=> fetch(`https://server-site-gulamkibria775.vercel.app/services/${params.id}`)
//       },
//       {
//         path: "/service/:id",
//         element: <ServiceDetail></ServiceDetail>,
//         loader: ({ params }) =>
//           fetch(`https://server-site-gulamkibria775.vercel.app/services/${params.id}`),
//       },
//       // {
//       //   path: "/orders",
//       //   element: (
//       //     <PrivateRoute>
//       //       <Orders></Orders>
//       //     </PrivateRoute>
//       //   ),
//       // },

//      { 
//       path:"/addservice",
//       element:<PrivateRoute><Addservice></Addservice></PrivateRoute>,
//       loader: () => fetch("https://server-site-gulamkibria775.vercel.app/services"),
//      },


//       {
//         path: "/serviecsAll",
//         element: <ServicesAll></ServicesAll>,
//         loader: () => fetch("https://server-site-gulamkibria775.vercel.app/services"),
//       },
//       {
//         path:"/myreview",
//         element:<Myreview></Myreview>,
//         loader: () => fetch("https://server-site-gulamkibria775.vercel.app/services"),
//       },
//       {
//         path:"/update/:id",
//         element:<Update></Update>,
//         loader: ({ params }) =>
//           fetch(`https://server-site-gulamkibria775.vercel.app/services/${params.id}`),
//       },
//       {
//         path:"/blog",
//         element:<Blog></Blog>
//       },
//       {
//         path:"*",
//         element:<Notfound></Notfound>
//       }

//     ],
//   },
// ]);

// export default router;
