import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/HomePage.jsx";
import GuestList from './components/GuestList.jsx'
import WhoIAm from "./components/Apropos.jsx";

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