import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { setPosition } from "@/Controllers/position";

export default function Search() {
    const dispatch = useDispatch();
    const [pos, setPos] = React.useState();

    const handleInputChange = (event, value) => {
        const selectedGunung = dataGunung.find(
            (option) => option.title === value
        );
        if (selectedGunung) {
            setPos(selectedGunung.pos);
            dispatch(setPosition(selectedGunung.pos));
        } else {
            setPos(null);
        }
    };

    return (
        <div className="my-2">
            <Autocomplete
                id="free-solo-demo"
                options={dataGunung.map((option) => option.title)}
                onInputChange={handleInputChange}
                renderInput={(params) => (
                    <TextField {...params} label="Cari Gunung" />
                )}
            />
        </div>
    );
}

const dataGunung = [
    { title: "Gunung Semeru", pos: { lat: -8.10884, lng: 112.9222 } },
    { title: "Gunung Bromo", pos: { lat: -7.942493, lng: 112.953475 } },
    { title: "Gunung Arjuno", pos: { lat: -7.873755, lng: 112.576492 } },
    { title: "Gunung Welirang", pos: { lat: -7.741456, lng: 112.599759 } },
    { title: "Gunung Argopuro", pos: { lat: -7.88697, lng: 113.259573 } },
    { title: "Gunung Raung", pos: { lat: -8.125127, lng: 114.056452 } },
    { title: "Gunung Ijen", pos: { lat: -8.058013, lng: 114.242828 } },
    { title: "Gunung Kelud", pos: { lat: -7.942673, lng: 112.30886 } },
    { title: "Gunung Kawi", pos: { lat: -7.607858, lng: 112.510941 } },
    { title: "Gunung Penanggungan", pos: { lat: -7.623353, lng: 112.645116 } },
    { title: "Gunung Panderman", pos: { lat: -7.857577, lng: 112.66195 } },
    { title: "Gunung Anjasmoro", pos: { lat: -7.619662, lng: 111.331211 } },
    { title: "Gunung Lawu", pos: { lat: -7.617741, lng: 111.15892 } },
];
