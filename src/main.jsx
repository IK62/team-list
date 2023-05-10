import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "src/components/NavBar";
import Contact from "src/components/Contact";
import Home from "src/components/HomePage";
import GuestList from 'src/components/GuestList'
import WhoIAm from "src/components/Apropos";

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