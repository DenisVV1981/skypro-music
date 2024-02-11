
import {NEXT_TRACK, PAUSE_TRACK, PLAY_TRACK, PREV_TRACK, CHANGE_TRACK_LIKE} from '../actions/types/player.js';

const initialState = {
    isPlaying: false,
    isLike: false,
};

export function playerReducer(state = initialState, action) {
    switch(action.type){
        case PLAY_TRACK: {

            return {
                isPlaying: true,
                isLike: state.isLike,
            };
        }
        case PAUSE_TRACK: {
            return {
                isPlaying: false,
                isLike: state.isLike,
            };
        }
        case NEXT_TRACK: {
            return {
                isPlaying: true,
                isLike: state.isLike,
            };
        }
        case PREV_TRACK: {
            return {
                isPlaying: true,
                isLike: state.isLike,
            };
        }
        case CHANGE_TRACK_LIKE: {
            const {isLike} = action.payload;
            return {
                isPlaying: state.isPlaying,
                isLike: isLike,
            };
        }
        
        default: 
            return state;
    };
};

