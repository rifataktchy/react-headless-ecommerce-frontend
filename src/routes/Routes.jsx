import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../components/Wishlist";
import FavouriteCards from "../components/FavouriteCards";
import Contact from "../pages/Contact";
import NotFound from "../components/NotFound";

const routes = createBrowserRouter ([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>,  
            loader: () => fetch('../categories.json'),
            children: [
              {
                path: "/",
            element: <ProductCards/>, 
            loader: () => fetch('../products.json'),
              },
              {
                path: "/category/:category",
            element: <ProductCards/>, 
            loader: () => fetch('../products.json'),
              },
            ],
        },
        {
            path: "/statistics",
            element: <Statistics />,  
        },
        {
            path: "/dashboard",
            element: <Dashboard />, 
            children: [
              {
                path: "",
            element: <FavouriteCards />, 
           
              },
              {
                path: "/dashboard/wishlist",
            element: <Wishlist/>, 
         
              },
            ], 
        },
        {
          path: "/contact",
          element: <Contact />,  
      },
        {
          path: "/product/:product_id",
          element: <ProductDetails />,  
          loader: () => fetch('../products.json'),
      },
      {
        path: "*",
        element: <NotFound />,
      },
      ],
    },
  ]);

  export default routes;