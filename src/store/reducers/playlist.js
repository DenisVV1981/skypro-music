import { NEXT_TRACK, PLAY_TRACK } from "../actions/types/player";
import { ADD_TRACKS } from "../actions/types/playlist";

const initialState = {
    tracks: [],
    trackToPlay: null,
    tracksError: null,
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
        case NEXT_TRACK: {
            const {track} = action.payload;

            let index = state.tracks.indexOf(track);
            let newTrackToPlay = null;

            if(index === -1){
                newTrackToPlay = state.tracks[0];
            }
            else if (index === state.tracks.length -1 ){
                newTrackToPlay = state.tracks[0];
            }
            else {
                newTrackToPlay = state.tracks[index +1];
            }

            return {
                tracks: state.tracks,
                trackToPlay: newTrackToPlay,
                tracksError: state.tracksError,
            };
        }
        default: 
            return state;
    };
};
