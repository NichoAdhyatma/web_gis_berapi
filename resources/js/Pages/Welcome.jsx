import { Head } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import Hero from "@/Components/Hero";
export default function Welcome({ canLogin, canRegister }) {
    return (
        <HomeLayout>
            <Head title="Welcome" />
            <div className="hero min-h-screen max-w-7xl mx-auto mt-24 px-4 py-2">
                <Hero />
            </div>
        </HomeLayout>
    );
}
