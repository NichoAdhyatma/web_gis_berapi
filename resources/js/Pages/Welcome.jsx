import { Head } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import Hero from "@/Components/Hero";
export default function Welcome() {
    return (
        <HomeLayout>
            <Head title="Welcome" />
            <div className="hero min-h-screen">
                <Hero />
            </div>
        </HomeLayout>
    );
}
