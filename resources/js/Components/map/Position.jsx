import { setLocation } from "@/Controllers/position";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
            <button onClick={onClick} className="btn">
                Reset
            </button>
            <button className="btn btn-primary" onClick={getPosition}>
                Find Me
            </button>
        </div>
    );
}
