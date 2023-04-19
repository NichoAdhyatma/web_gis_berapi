import { Head } from "@inertiajs/react";
import HomeLayout from "@/Layouts/HomeLayout";
import LeafletMap from "@/Components/map/LeafletMap";

export default function Welcome() {
    return (
        <HomeLayout>
            <Head title="Welcome" />
            <div className="bg-secondary rounded-sm">
                <h1 className="text-2xl font-bold text-center p-4">
                    Sisitem Informasi Pemetaan Gunung Berapi di Jawa Timur
                </h1>
                <LeafletMap/>
            </div>
        </HomeLayout>
    );
}
