import { CircleMarker, Popup } from "react-leaflet";

import { useSelector } from "react-redux";

export default function VerticalLayers() {
    const position = useSelector((state) => state.position.position);

    const redOptions = { color: "red" };

    return (
        <>
            <CircleMarker
                center={position}
                pathOptions={redOptions}
                radius={20}
            >
                <Popup>Popup in CircleMarker</Popup>
            </CircleMarker>
        </>
    );
}
