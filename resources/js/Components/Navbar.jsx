import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

export default function Navbar() {
    return (
        <div
            className={
                "w-full fixed top-0 transition ease-in backdrop-blur-md z-50 bg-transparent shadow p-2"
            }
        >
            <div className="max-w-7xl flex items-center mx-auto gap-4">
                <Link href={route("welcome")}>
                    <ApplicationLogo className="w-16 h-16" />
                </Link>

                <Link href={route("welcome")} className="px-4">
                    Beranda
                </Link>

                <Link href={route("peta")} className="px-4">
                    Peta
                </Link>

                <Link href={route("peta.index")} className="px-4">
                    Data
                </Link>
            </div>
        </div>
    );
}
