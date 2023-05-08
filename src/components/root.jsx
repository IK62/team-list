import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav>
                <Link to={"home"}>
                    home
                </Link>
                <Link to={"list"}>
                    create your teams
                </Link>
                <Link to={"contact"}>
                    contact
                </Link>
            </nav>
            <Outlet />
        </>
    )
}