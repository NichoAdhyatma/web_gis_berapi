import { Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

import { marker } from "../../Marker/Marker";

export default function MyLocation() {
    const position = useSelector((state) => state.position.location);

    return position === null ? null : (
        <Marker position={position} icon={marker}>
            <Popup>
                <h2 className="card-title">Lokasi mu</h2>
            </Popup>
        </Marker>
    );
}
