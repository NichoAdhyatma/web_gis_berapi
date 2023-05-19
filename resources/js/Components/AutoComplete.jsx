import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { setPosition } from "@/Controllers/position";

export default function Search({ map, gunung }) {
    const dispatch = useDispatch();
    const [pos, setPos] = React.useState();

    const handleInputChange = (event, value) => {
        const selectedGunung = gunung.find(
            (option) => option.name === value
        );
        if (selectedGunung) {
            map.setView(JSON.parse(selectedGunung.position), 11);
            setPos(JSON.parse(selectedGunung.position));
            dispatch(setPosition(JSON.parse(selectedGunung.position)));
        } else {
            setPos(null);
        }
    };

    return (
        <div className="my-2">
            <Autocomplete
                id="free-solo-demo"
                options={gunung.map((option) => option.name)}
                onInputChange={handleInputChange}
                renderInput={(params) => (
                    <TextField {...params} label="Cari Gunung" />
                )}
            />
        </div>
    );
}
