import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";
import VerticalLayers from "./VerticalLayers";
import { useSelector } from "react-redux";
import { Marker, Popup } from "react-leaflet";
import { mountain, volcano } from "../../Marker/Marker";
import { useRef } from "react";
import Search from "../AutoComplete";
import MyLocation from "./MyLocation";
import { geoJSONJaTim } from "@/35";
import { GeoJSON } from "react-leaflet";


export default function LeafletMap() {
    var position = useSelector((state) => state.position.position);
    const animateRef = useRef(true);
//     // Note that difference in the "lyrs" parameter in the URL:
//     // Hybrid: s,h;
//     // Satellite: s;
//     // Streets: m;
//     // Terrain: p;

//     // layer
//     L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
//         maxZoom: 20,
//         subdomains:['mt0','mt1','mt2','mt3']
//     }).addTo(map);
    

    return (
        <div className="mt-24">
            <Search />
            <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}"
                    subdomains={['mt1','mt2','mt3']}
                    
                />
                <GeoJSON key='my-geojson' data={geoJSONJaTim} />

                <Marker
                    position={{ lat: -8.112595, lng: 112.921257 }}
                    icon={volcano}
                >
                    <Popup>
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Gunung Semeru</h2>
                                <div className="badge bg-yellow-600 border-none gap-2 text-white p-2">
                                    Aktif
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker
                    position={{ lat: -7.941976, lng: 112.953135 }}
                    icon={volcano}
                >
                    <Popup>
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Gunung Bromo</h2>
                                <div className="badge bg-yellow-600 border-none gap-2 text-white p-2">
                                    Aktif
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker
                    position={{ lat: -7.938873, lng: 112.305323 }}
                    icon={volcano}
                >
                    <Popup>
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Gunung Kelud</h2>
                                <div className="badge bg-yellow-600 border-none gap-2 text-white p-2">
                                    Aktif
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker
                    position={{ lat: -7.923307, lng: 112.451813 }}
                    icon={mountain}
                >
                    <Popup>
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Gunung Kawi</h2>
                                <div className="badge bg-green-600 border-none gap-2 text-white p-2">
                                    Tidak Aktif
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker
                    position={{ lat: -7.904191, lng: 112.496717 }}
                    icon={mountain}
                >
                    <Popup>
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Gunung Panderman</h2>
                                <div className="badge bg-green-600 border-none gap-2 text-white p-2">
                                    Tidak Aktif
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
                <Marker
                    position={{ lat: -7.765763, lng: 112.590638 }}
                    icon={volcano}
                >
                    <Popup>
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Gunung Arjuno</h2>
                                <div className="badge bg-yellow-600 border-none gap-2 text-white p-2">
                                    Aktif
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>

                {/* <Marker position={{ lat: -7.765763, lng: 112.590638 }} icon={mountain}> 
                    <Popup>
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Gunung Arjuno</h2>
                            </div>
                        </div>
                    </Popup>
                </Marker> */}

                <LocationMarker animateRef={animateRef} />
                <MyLocation />
                <VerticalLayers />
            </MapContainer>
        </div>
    );
}
