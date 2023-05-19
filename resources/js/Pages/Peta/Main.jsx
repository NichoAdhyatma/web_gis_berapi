import HomeLayout from "@/Layouts/HomeLayout";
import LeafletMap from "@/Components/map/LeafletMap";

export default function Main({gunung}) {
    return (
        <HomeLayout>
            <LeafletMap gunung={gunung} />
        </HomeLayout>
    );
}
