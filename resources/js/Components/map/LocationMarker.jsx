import { Marker, Popup } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { useMapEvent } from "react-leaflet";
import { setPosition } from "@/Controllers/position";

export default function LocationMarker() {
    const position = useSelector((state) => state.position.position);
    const dispatch = useDispatch();
    const map = useMapEvent("click", (e) => {
        console.log(e.latlng);
        dispatch(setPosition(e.latlng));
        map.flyTo(e.latlng, map.getZoom(), {
            animate: true,
        });
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                <h2 className="card-title">Target Area</h2>
            </Popup>
        </Marker>
    );
}
