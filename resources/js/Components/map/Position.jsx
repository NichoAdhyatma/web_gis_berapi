import { setLocation } from "@/Controllers/position";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Tooltip } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";

export default function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter());
    const myPosition = useSelector((state) => state.position.position);
    const dispatch = useDispatch();
    const centerPosition = { lat: -7.536064, lng: 112.238402 };

    const onClick = useCallback(() => {
        map.setView(centerPosition, 9);
    }, [map]);

    const onMove = useCallback(() => {
        setPosition(map.getCenter());
    }, [map]);

    const getPosition = () => {
        map.locate();
        map.on("locationfound", function (e) {
            dispatch(setLocation(e.latlng));
            map.flyTo(e.latlng, 13);
        });
    };

    useEffect(() => {
        map.on("move", onMove);
        return () => {
            map.off("move", onMove);
        };
    }, [map, onMove]);

    return (
        <div className="p-4 flex gap-4 items-center">
            latitude:
            <span className="font-bold text-primary">
                {position.lat.toFixed(4)}
            </span>{" "}
            , longitude:
            <span className="font-bold text-secondary">
                {position.lng.toFixed(4)}
            </span>
            <Tooltip arrow title={"Reset Koordinat"} placement="top">
                <button onClick={onClick} className="btn btn-sm btn-warning">
                    <ReplayIcon />
                </button>
            </Tooltip>
            <Tooltip arrow title={"Find ur location"} placement="top">
                <button
                    className="btn btn-sm btn-primary"
                    onClick={getPosition}
                >
                    <LocationOnIcon />
                </button>
            </Tooltip>
            <Tooltip arrow title={"Legenda"} placement="top">
                <label
                    htmlFor="my-modal-legenda"
                    className="btn btn-sm btn-secondary"
                >
                    <MapIcon />
                </label>
            </Tooltip>
            <input type="checkbox" id="my-modal-legenda" className="modal-toggle" />
            <label htmlFor="my-modal-legenda" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label
                        htmlFor="my-modal-legenda"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Legenda</h3>
                    <p className="py-4 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://img.icons8.com/?size=200&id=sQ90qWr6WjKH&format=png"
                                alt=""
                                className="w-10"
                            />
                            Gunung Tidak Aktif
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://img.icons8.com/?size=128&id=WBGXXRL30VKg&format=png"
                                alt=""
                                className="w-10"
                            />
                            Gunung Aktif
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/marker.png" alt="" className="w-10" />
                            Penanda / Marker
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/home.png" alt="" className="w-10" />
                            Lokasi Rumah Anda
                        </div>
                    </p>
                </label>
            </label>
        </div>
    );
}
