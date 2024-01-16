import { PLAY_TRACK } from "../actions/types/player";
import { ADD_TRACKS } from "../actions/types/playlist";

const initialState = {
    tracks: [],
    trackToPlay: {}
};

export function playlistReducer(state = initialState, action) {
    switch(action.type){
        case ADD_TRACKS: {
            const {tracks, tracksError} = action.payload;

            return {
                tracks,
                trackToPlay: state.trackToPlay,
                tracksError,
            };
        }
        case PLAY_TRACK: {
            const {track} = action.payload;

            return {
                tracks: state.tracks,
                trackToPlay: track,
                tracksError: state.tracksError,
            };
        }
        default: 
            return state;
    };
};
