import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navBar";
import Contact from "./components/contact";
import Home from "./components/homePage";
import GuestList from './components/guestList'
import WhoIAm from "./components/à propos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        children: [
            {
              path: "",
              element: <Home />
            },
            {
                path: "list",
                element: <GuestList />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "whoIAm",
                element: <WhoIAm />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)