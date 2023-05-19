import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";
import { useSelector } from "react-redux";
import { Marker, Popup } from "react-leaflet";
import { mountain, volcano } from "../../Marker/Marker";
import Search from "../AutoComplete";
import MyLocation from "./MyLocation";
import { geoJSONJaTim } from "@/35";
import { GeoJSON } from "react-leaflet";
import { useMemo, useState } from "react";
import DisplayPosition from "./Position";

export default function LeafletMap({ gunung }) {
    var position = useSelector((state) => state.position.position);
    const limeOptions = { color: "lime", fillColor: "transparent" };
    const [map, setMap] = useState(null);

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={position}
                zoom={9}
                scrollWheelZoom={true}
                ref={setMap}
                className="z-10"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
                    subdomains={["mt1", "mt2", "mt3"]}
                />
                <GeoJSON
                    key="my-geojson"
                    data={geoJSONJaTim}
                    pathOptions={limeOptions}
                />

                <LocationMarker />
                {gunung.map((item, index) => (
                    <Marker key={index} position={JSON.parse(item.position)} icon={item.status ? volcano : mountain}>
                        <Popup>
                            <h2 className="card-title">{item.name}</h2>
                        </Popup>
                    </Marker>
                ))}
                <MyLocation />
            </MapContainer>
        ),
        []
    );

    return (
        <div className="mt-24">
            <Search map={map} gunung={gunung} />
            {map ? <DisplayPosition map={map} /> : null}
            {displayMap}
        </div>
    );
}
