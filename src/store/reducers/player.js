
import {SHUFFLE_TRACK, NEXT_TRACK, PAUSE_TRACK, PLAY_TRACK, PREV_TRACK, CHANGE_TRACK_LIKE} from '../actions/types/player.js';

const initialState = {
    tracks: [],
    shuffledTracks: null,

    trackToPlay: null,

    isPlaying: false,
    isLike: false,
};

function shuffle(array) {  
    for (let i = array.length - 1; i> 0; i--) {  
        const j = Math.floor(Math.random() * (i + 1));  
        [array[i], array[j]] = [array[j], array[i]];  
    }  
    return array;  
}  

export function playerReducer(state = initialState, action) {
    switch(action.type){
        case PLAY_TRACK: {
            const {track, tracks} = action.payload;

            return {
                tracks: tracks,
                shuffledTracks: state.shuffledTracks,
                trackToPlay: track,

                isPlaying: true,
                isLike: state.isLike,
            };
        }
        case PAUSE_TRACK: {
            return {
                tracks: state.tracks,
                shuffledTracks: state.shuffledTracks,
                trackToPlay: state.trackToPlay,

                isPlaying: false,
                isLike: state.isLike,
            };
        }
        case NEXT_TRACK: {
            const {track} = action.payload;
            
            let tracks = state.shuffledTracks ?? state.tracks;
            
            let index = tracks.indexOf(track);
            let newTrackToPlay = null;

            if(index === -1){
                newTrackToPlay = tracks[0];
            }
            else if (index === tracks.length -1 ){
                newTrackToPlay = tracks[0];
            }
            else {
                newTrackToPlay = tracks[index +1];
            }

            return {
                tracks: state.tracks,
                shuffledTracks: state.shuffledTracks,
                trackToPlay: newTrackToPlay,

                isPlaying: true,
                isLike: state.isLike,
            };
        }
        case PREV_TRACK: {
            const {track} = action.payload;
            
            let tracks = state.shuffledTracks ?? state.tracks;

            let index = tracks.indexOf(track);
            let newTrackToPlay = null;

            if(index === -1){
                newTrackToPlay = tracks[0];
            }
            else if (index === 0 ){
                newTrackToPlay = tracks[tracks.length-1];
            }
            else {
                newTrackToPlay = tracks[index -1];
            }

            return {
                tracks: state.tracks,
                shuffledTracks: state.shuffledTracks,
                trackToPlay: newTrackToPlay,

                isPlaying: true,
                isLike: state.isLike,
            };
        }
        case SHUFFLE_TRACK: {
            let shuffleList;
            if(state.shuffledTracks === null){
                shuffleList = shuffle([...state.tracks]);
            }
            else {
                shuffleList = null;
            }

            return {
                tracks: state.tracks,
                shuffledTracks: shuffleList,
                trackToPlay: state.trackToPlay,

                isPlaying: state.isPlaying,
                isLike: state.isLike,
            };
        }
        case CHANGE_TRACK_LIKE: {
            const {isLike} = action.payload;
            return {
                tracks: state.tracks,
                shuffledTracks: state.shuffledTracks,
                trackToPlay: state.trackToPlay,

                isPlaying: state.isPlaying,
                isLike: isLike,
            };
        }
        
        default: 
            return state;
    };
};

