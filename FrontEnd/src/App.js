import React, { Children } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Help from "./components/Help";
import About from "./components/About";

const AppLayOut = () => {
    return (
        <div className="main">
            <Header />
            <Outlet />
        </div>
    );
}

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayOut/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/home",
                element:<Body />,
            },
            {
                path:"/about-us",
                element:<About />,
            },
            {
                path:"/support",
                element:<Help />,
            }
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={AppRouter} />);