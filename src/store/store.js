import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "./reducers/player";
import { filterReducer } from "./reducers/filter";
import { searchReducer } from "./reducers/search";
import { playerApi } from "../services/playerAPI";
import { apiReducer } from "./reducers/api";

export const store = configureStore({
    reducer: {
        [playerApi.reducerPath]: playerApi.reducer,
        auth: apiReducer,
        player: playerReducer,
        filter: filterReducer,
        search: searchReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playerApi.middleware),
});