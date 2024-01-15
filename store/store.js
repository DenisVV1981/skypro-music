import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "./reducers/player";

export const store = configureStore({
    reducer: {
        player: playerReducer
    },
});