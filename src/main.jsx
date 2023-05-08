import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root";
import Contact from "./components/contact";
import Home from "./components/homePage";
import GuestList from './components/GuestList'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
              path: "home",
              element: <Home />
            },
            {
                path: "list",
                element: <GuestList />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)