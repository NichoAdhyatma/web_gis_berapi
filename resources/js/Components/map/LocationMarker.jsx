import { Marker, Popup } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { useMapEvent } from "react-leaflet";
import { setPosition } from "@/Controllers/position";
import { useEffect } from "react";


export default function LocationMarker({ animateRef }) {
    const position = useSelector((state) => state.position.position);
    const dispatch = useDispatch();
    const map = useMapEvent("click", (e) => {
        dispatch(setPosition(e.latlng));
        map.flyTo(e.latlng, map.getZoom(), {
            animate: animateRef.current,
        });
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                <div className="card bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Lokasi mu</h2>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}
