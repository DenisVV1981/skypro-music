
import {NEXT_TRACK, PAUSE_TRACK, PLAY_TRACK, PREV_TRACK, CHANGE_TRACK_LIKE} from '../actions/types/player.js';

const initialState = {
    isPlaying: false,

};

const initialIsLikeState = {
    isLike: false,
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

export function playerIsLikeReducer(state = initialIsLikeState, action) {
    switch(action.type){
        case CHANGE_TRACK_LIKE: {
            const {isLike} = action.payload;
            return {
                isLike: isLike,
            };
        }
        case PLAY_TRACK: {
            const {track} = action.payload;
            return {
                isLike: track.isLike,
            };
        }
        case NEXT_TRACK: {
            const {track} = action.payload;
            return {
                isLike: track.isLike,
            };
        }
        case PREV_TRACK: {
            const {track} = action.payload;
            return {
                isLike: track.isLike,
            };
        }
        
        default: 
            return state;
    };
};

