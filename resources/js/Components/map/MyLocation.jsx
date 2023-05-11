import { Marker, Popup } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { useMapEvents } from "react-leaflet";
import { setLocation } from "@/Controllers/position";

import { marker} from "../../Marker/Marker";

export default function MyLocation() {
    const position = useSelector((state) => state.position.location);
    const dispatch = useDispatch();
    

    return position === null ? null : (
        <Marker position={position} icon={marker}>
            <Popup>
                <div className="card bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Lokasi anda</h2>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}
