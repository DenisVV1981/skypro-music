
import {PAUSE_TRACK, PLAY_TRACK} from '../actions/types/player.js';

const initialState = {
    state: false
};

export function playerReducer(state = initialState, action) {
    switch(action.type){
        case PLAY_TRACK: {

            return {
                state: true,
            };
        }
        case PAUSE_TRACK: {
            return {
                state: false,
            };
        }
        default: 
            return state;
    };
};

