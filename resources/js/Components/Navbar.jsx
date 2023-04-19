import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import { useState } from "react";

export default function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const user = usePage().props.auth.user;

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);
    return (
        <div
            className={
                "w-full fixed top-0 shadow-sm transition ease-in" +
                (colorChange
                    ? " bg-primary text-secondary"
                    : " bg-secondary text-primary")
            }
        >
            <div className="max-w-7xl flex items-center justify-between mx-auto">
                <Link href={route("welcome")} className="p-4">
                    <ApplicationLogo className="w-16 h-16" />
                </Link>

                <div className="flex gap-8 items-center">
                    {user ? (
                        <>
                        <Link href={route('dashboard')} className="font-bold">{user.name}</Link>
                        </>
                    ) : (
                        <>
                            {" "}
                            <Link
                                href={route("login")}
                                className="bg-ternary px-4 py-2 rounded-md text-primary border-none"
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
