import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "./reducers/player";
import { playlistReducer } from "./reducers/playlist";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        playlist: playlistReducer,
        
    },
});