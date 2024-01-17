import { PLAY_TRACK, PAUSE_TRACK, NEXT_TRACK, PREV_TRACK  } from "../types/player.js";


 export const playTrack = (track) => ({
    type: PLAY_TRACK,
    payload: {track},
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