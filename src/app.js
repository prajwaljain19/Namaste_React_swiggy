import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/Body";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Error from "./componets/Error";
import RestaurantMenu from "./componets/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
// import Grocery from "./componets/Grocery";

  const Grocery = lazy(() => import("./componets/Grocery"));

  const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",  
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback ={<h1>loading...</h1>}><Grocery /></Suspense>,
      },

    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

 
