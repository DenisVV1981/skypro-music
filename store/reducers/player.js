
import {PLAY_TRACK} from '../types/player';

const initialState = {
    tracks: [],
    trackToPlay: {}
};

export function playerReducer(state = initialState, action) {
    switch(action.type){
        case PLAY_TRACK: {
            const {a, b} = action.payload;

            return {};
        }
        default: 
            return state;
    };
};

