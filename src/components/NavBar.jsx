import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="flex justify-center py-10 gap-x-16">
                <Link to={"/"} className="nav-text">
                    accueil
                </Link>
                <Link to={"list"} className="nav-text">
                    crée vos équipes
                </Link>
                <Link to={"contact"} className="nav-text">
                    contact
                </Link>
                <Link to={"WhoIAm"} className="nav-text">
                    À propos
                </Link>
            </nav>
            <Outlet />
        </>
    )
}