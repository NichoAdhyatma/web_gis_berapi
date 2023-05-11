import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    position: { lat: -7.536064, lng: 112.238402 },
    location: null,
};

export const positionSlice = createSlice({
    name: "position",
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
    },
});

export const { setPosition, setLocation } = positionSlice.actions;

export default positionSlice.reducer;
