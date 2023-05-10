import { configureStore } from "@reduxjs/toolkit";
import positionReducer from "./position";

export const store = configureStore({
    reducer: { position : positionReducer },
});
