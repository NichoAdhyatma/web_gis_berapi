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
                    url="http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}"
                    subdomains={["mt1", "mt2", "mt3"]}
                />
                <GeoJSON
                    key="my-geojson"
                    data={geoJSONJaTim}
                    pathOptions={limeOptions}
                />

                <LocationMarker />
                {gunung.map((item, index) => (
                    <Marker
                        key={index}
                        position={JSON.parse(item.position)}
                        icon={item.status ? volcano : mountain}
                    >
                        <Popup>
                            <div class="card bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">{item.name}</h2>
                                    {item.status ? (
                                        <div className="badge badge-success bg-yellow-200 p-4">
                                            <p className="font-bold text-yellow-700">
                                                Aktif
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="badge badge-success bg-green-200 p-4">
                                            <p className="font-bold text-green-700">
                                                Tidak Aktif
                                            </p>
                                        </div>
                                    )}
                                    <p className="truncate">{item.deskripsi}</p>
                                    <div className="card-actions justify-end">
                                        <a className="link link-primary">
                                            Lebih lanjut
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                <MyLocation />
            </MapContainer>
        ),
        []
    );

    return (
        <div className="mt-20 flex flex-col">
            <div className="flex justify-between">
                <Search map={map} gunung={gunung} />
                {map ? <DisplayPosition map={map} /> : null}
            </div>

            {displayMap}
        </div>
    );
}
