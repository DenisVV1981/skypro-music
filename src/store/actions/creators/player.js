import { PLAY_TRACK, PAUSE_TRACK, NEXT_TRACK, PREV_TRACK, SHUFFLE_TRACK, CHANGE_TRACK_LIKE  } from "../types/player.js";


 export const playTrack = (track, tracks) => ({
    type: PLAY_TRACK,
    payload: {track, tracks},
 });
 
 export const pauseTrack = (track) => ({
    type: PAUSE_TRACK,
    payload: {track},
 });

 export const nextTrack = (track) => ({
   type: NEXT_TRACK,
   payload: {track},
 });

 export const prevTrack = (track) => ({
   type: PREV_TRACK,
   payload: {track},
 });

 export const shuffleTrack = () => ({
   type: SHUFFLE_TRACK,
   payload: {},
 });

 export const changeTrackLike = (isLike) => ({
  type: CHANGE_TRACK_LIKE,
  payload: {isLike},
});