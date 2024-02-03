import { configureStore } from "@reduxjs/toolkit";
import { playerIsLikeReducer, playerReducer } from "./reducers/player";
import { playlistReducer } from "./reducers/playlist";
import { filterReducer } from "./reducers/filter";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        playerIsLike: playerIsLikeReducer,
        playlist: playlistReducer,
        filter: filterReducer,
    },
});