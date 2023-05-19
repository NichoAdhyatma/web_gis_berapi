import HomeLayout from "@/Layouts/HomeLayout";
import LeafletMap from "@/Components/map/LeafletMap";

export default function Index({gunung}) {
    return (
        <HomeLayout>
            <LeafletMap gunung={gunung} />
        </HomeLayout>
    );
}
