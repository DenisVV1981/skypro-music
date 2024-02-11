import { NEXT_TRACK, PLAY_TRACK, PREV_TRACK, SHUFFLE_TRACK } from "../actions/types/player";
import { ADD_FAVORITE_TRACKS, ADD_TRACKS } from "../actions/types/playlist";
import { TRACKS_SEARCH, TRACKS_SORT } from "../actions/types/search";

const initialState = {
    tracks: [],
    shuffledTracks: null,
    trackToPlay: null,
    tracksError: null,
};

function shuffle(array) {  
    for (let i = array.length - 1; i> 0; i--) {  
        const j = Math.floor(Math.random() * (i + 1));  
        [array[i], array[j]] = [array[j], array[i]];  
    }  
    return array;  
}  

export function playlistReducer(state = initialState, action) {
    switch(action.type){
        case ADD_TRACKS: {
            const {tracks, tracksError} = action.payload;

            return {
                tracks,
                shuffledTracks: state.shuffledTracks,
                trackToPlay: state.trackToPlay,
                tracksError,
                favoriteTracks: state.favoriteTracks,
                favoriteTracksError: state.favoriteTracksError,
            };
        }
        case ADD_FAVORITE_TRACKS: {
            const {tracks, tracksError} = action.payload;

            return {
                tracks:state.tracks,
                shuffledTracks: state.shuffledTracks,
                trackToPlay: state.trackToPlay,
                tracksError:state.tracksError,
                favoriteTracks: tracks,
                favoriteTracksError: tracksError,
            };
        }
        case PLAY_TRACK: {
            const {track} = action.payload;

            return {
                tracks: state.tracks,
                shuffledTracks: state.shuffledTracks,
                trackToPlay: track,
                tracksError: state.tracksError,
                favoriteTracks: state.favoriteTracks,
                favoriteTracksError: state.favoriteTracksError,
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
                tracksError: state.tracksError,
                favoriteTracks: state.favoriteTracks,
                favoriteTracksError: state.favoriteTracksError,
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
                tracksError: state.tracksError,
                favoriteTracks: state.favoriteTracks,
                favoriteTracksError: state.favoriteTracksError,
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
                tracksError: state.tracksError,
                favoriteTracks: state.favoriteTracks,
                favoriteTracksError: state.favoriteTracksError,
            };
        }
        case TRACKS_SEARCH: {
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
                tracksError: state.tracksError,
                favoriteTracks: state.favoriteTracks,
                favoriteTracksError: state.favoriteTracksError,
            };
        }
        // case TRACKS_SORT: {
        //     let shuffleList;
        //     if(state.shuffledTracks === null){
        //         shuffleList = shuffle([...state.tracks]);
        //     }
        //     else {
        //         shuffleList = null;
        //     }

        //     return {
        //         tracks: state.tracks,
        //         shuffledTracks: shuffleList,
        //         trackToPlay: state.trackToPlay,
        //         tracksError: state.tracksError,
        //         favoriteTracks: state.favoriteTracks,
        //         favoriteTracksError: state.favoriteTracksError,
        //     };
        // }
        // case CHANGE_TRACK_LIKE: {
        //     const {isLike} = action.payload;
        //     const trackToPlay = {...state.trackToPlay};
        //     trackToPlay.isLike = !trackToPlay.isLike;
        //     return {
        //         tracks: state.tracks,
        //         shuffledTracks: state.shuffledTracks,
        //         trackToPlay: trackToPlay.isLike,
        //         tracksError: state.tracksError,
        //         favoriteTracks: state.favoriteTracks,
        //         favoriteTracksError: state.favoriteTracksError,
        //     };
        // }

        default: 
            return state;
    };
};
