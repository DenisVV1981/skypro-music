import { ADD_TRACKS } from "../types/playlist";
import { ADD_FAVORITE_TRACKS } from "../types/playlist";

export const addTracks = (tracksData) => ({
    type: ADD_TRACKS,
    payload: {
        tracks: tracksData.list,
        tracksError: tracksData.errorMessage
    },
 });

export const addFavoriteTracks = (tracksData) => ({
    type: ADD_FAVORITE_TRACKS,
    payload: {
        tracks: tracksData.list,
        tracksError: tracksData.errorMessage
    },
 });

 