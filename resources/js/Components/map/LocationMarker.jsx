import { Marker, Popup } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { useMapEvents } from "react-leaflet";
import { setPosition } from "@/Controllers/position";

export default function LocationMarker() {
    const position = useSelector((state) => state.position.position);
    const dispatch = useDispatch();

    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            dispatch(setPosition(e.latlng));
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Rumah</h2>
                        <p>Surabaya, Jawa Timur</p>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}
