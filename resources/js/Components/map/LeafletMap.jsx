import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";
import VerticalLayers from "./VerticalLayers";
import { useSelector } from "react-redux";

export default function LeafletMap() {
    var position = useSelector((state) => state.position.position);

    return (
        <div className="mt-24">
            <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <VerticalLayers />
                <LocationMarker />
            </MapContainer>
        </div>
    );
}
