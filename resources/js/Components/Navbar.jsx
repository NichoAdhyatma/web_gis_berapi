import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
    const { auth } = usePage().props;

    return (
        <div
            className={
                "w-full fixed top-0 transition ease-in backdrop-blur-md z-50 bg-transparent shadow py-2 px-4"
            }
        >
            <div className="flex items-center w-full">
                <div className="flex items-center mx-auto gap-4">
                    <Link href={route("welcome")}>
                        <ApplicationLogo className="w-16 h-16" />
                    </Link>

                    <Link href={route("welcome")} className="px-4">
                        Beranda
                    </Link>

                    <Link href={route("peta")} className="px-4">
                        Peta
                    </Link>

                    {auth.user && (
                        <Link href={route("peta.index")} className="px-4">
                            Data
                        </Link>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    {auth.user ? (
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn m-1 btn-sm btn-ghost text-primary flex items-center gap-2"
                            >
                                <PersonIcon /> {auth.user.name}
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link  href={route('logout')} method="post" as="button">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="btn btn-sm btn-primary"
                            >
                                Login
                            </Link>
                            <Link href={route("register")}>Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
