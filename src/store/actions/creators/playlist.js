import { ADD_TRACKS } from "../types/playlist";


export const addTracks = (tracksData) => ({
    type: ADD_TRACKS,
    payload: {
        tracks: tracksData.list,
        tracksError: tracksData.errorMessage
    },
 });
 