
import {NEXT_TRACK, PAUSE_TRACK, PLAY_TRACK, PREV_TRACK} from '../actions/types/player.js';

const initialState = {
    isPlaying: false
};

export function playerReducer(state = initialState, action) {
    switch(action.type){
        case PLAY_TRACK: {

            return {
                isPlaying: true,
            };
        }
        case PAUSE_TRACK: {
            return {
                isPlaying: false,
            };
        }
        case NEXT_TRACK: {
            return {
                isPlaying: true,
            };
        }
        case PREV_TRACK: {
            return {
                isPlaying: true,
            };
        }
        default: 
            return state;
    };
};

