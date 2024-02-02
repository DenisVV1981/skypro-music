import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "./reducers/player";
import { playlistReducer } from "./reducers/playlist";
import { filterReducer } from "./reducers/filter";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        playlist: playlistReducer,
        filter: filterReducer,
    },
});