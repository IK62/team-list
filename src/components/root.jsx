import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav className="flex justify-center py-10 gap-x-16">
                <Link to={"/"} className="nav-text">
                    home
                </Link>
                <Link to={"list"} className="nav-text">
                    create your teams
                </Link>
                <Link to={"contact"} className="nav-text">
                    contact
                </Link>
            </nav>
            <Outlet />
        </>
    )
}